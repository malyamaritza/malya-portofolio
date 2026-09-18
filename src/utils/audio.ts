/**
 * Minimalist Web Audio API synthesizer for playing a gentle, soothing
 * Studio Ghibli-inspired pentatonic melody ("One Summer's Day" theme)
 * without needing external MP3 assets.
 */

class AmbientMusicPlayer {
    private ctx: AudioContext | null = null;
    private isPlaying: boolean = false;
    private timerId: number | null = null;
    private noteIndex: number = 0;

    // Pentatonic notes frequencies in Hz (D4, E4, F#4, A4, B4, C#5, D5, E5)
    private melodyNotes: { freq: number; duration: number }[] = [
        { freq: 293.66, duration: 1.2 }, // D4
        { freq: 329.63, duration: 0.8 }, // E4
        { freq: 369.99, duration: 1.4 }, // F#4
        { freq: 440.00, duration: 1.6 }, // A4
        { freq: 369.99, duration: 0.9 }, // F#4
        { freq: 329.63, duration: 1.1 }, // E4
        { freq: 293.66, duration: 1.8 }, // D4
        { freq: 220.00, duration: 1.2 }, // A3
        { freq: 246.94, duration: 1.4 }, // B3
        { freq: 293.66, duration: 2.0 }, // D4
        { freq: 369.99, duration: 1.0 }, // F#4
        { freq: 440.00, duration: 1.4 }, // A4
        { freq: 493.88, duration: 1.8 }, // B4
        { freq: 440.00, duration: 1.2 }, // A4
        { freq: 369.99, duration: 2.2 }, // F#4
    ];

    public toggle(): boolean {
        if (this.isPlaying) {
            this.pause();
            return false;
        } else {
            this.play();
            return true;
        }
    }

    public getPlayingState(): boolean {
        return this.isPlaying;
    }

    public play() {
        if (!this.ctx) {
            const AudioContextClass =
                window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            this.ctx = new AudioContextClass();
        }

        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        this.isPlaying = true;
        this.scheduleNextNote();
    }

    public pause() {
        this.isPlaying = false;
        if (this.timerId) {
            window.clearTimeout(this.timerId);
            this.timerId = null;
        }
    }

    private playTone(freq: number, duration: number) {
        if (!this.ctx || !this.isPlaying) return;

        try {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            // Warm triangle/sine hybrid sound for music box feel
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

            // Subtle gentle envelope
            gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 0.1);
            gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(this.ctx.currentTime);
            osc.stop(this.ctx.currentTime + duration + 0.1);
        } catch {
            // Audio context error fallback
        }
    }

    private scheduleNextNote() {
        if (!this.isPlaying) return;

        const note = this.melodyNotes[this.noteIndex];
        this.playTone(note.freq, note.duration);

        this.noteIndex = (this.noteIndex + 1) % this.melodyNotes.length;

        // Schedule next note with a little breathing room
        this.timerId = window.setTimeout(() => {
            this.scheduleNextNote();
        }, note.duration * 1000 + 150);
    }
}

export const ambientPlayer = new AmbientMusicPlayer();
