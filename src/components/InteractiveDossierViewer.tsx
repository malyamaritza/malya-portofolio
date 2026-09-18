"use client";

import { useState, useRef, useEffect } from 'react';
import { ProjectTab } from '../types';

interface InteractiveDossierViewerProps {
    tab: ProjectTab;
}

export default function InteractiveDossierViewer({ tab }: InteractiveDossierViewerProps) {
    // State for Damakara Module Inspector
    const [selectedModule, setSelectedModule] = useState<number>(0);

    // State for Clevago Flow
    const [activeStep, setActiveStep] = useState<number>(0);

    // State for HOWL pod booking simulator
    const [selectedPod, setSelectedPod] = useState<'Pod A (Soundproof)' | 'Pod B (Creative Desk)' | 'Pod C (Collab Zone)'>('Pod A (Soundproof)');
    const [bookedPods, setBookedPods] = useState<string[]>(['Pod A (Soundproof)']);

    // State for GOCAMP Webhook
    const [webhookSent, setWebhookSent] = useState(false);
    const [rentalDays, setRentalDays] = useState(3);

    // State for EduLMS
    const [completedPercent, setCompletedPercent] = useState(75);

    // State for ELO loop
    const [activeLoopStep, setActiveLoopStep] = useState(0);
    const [eloXp, setEloXp] = useState(140);

    // State and canvas ref for Frontyard Volleyball Game
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [scores, setScores] = useState({ p1: 8, p2: 6 });
    const [gameActive, setGameActive] = useState(false);

    // Volleyball mini canvas game physics loop
    useEffect(() => {
        if (tab.interactiveType !== 'volleyball_game' || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        let ballX = canvas.width / 2 - 20;
        let ballY = 40;
        let ballVx = 1.6;
        let ballVy = 0.8;
        const gravity = 0.08;
        const netX = canvas.width / 2;
        const netH = 45;

        let catY = canvas.height - 24;
        let dogY = canvas.height - 24;
        let catJumping = false;
        let dogJumping = false;

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Lawn background
            ctx.fillStyle = '#ebf3e7';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Grass strip
            ctx.fillStyle = '#758D6B';
            ctx.fillRect(0, canvas.height - 12, canvas.width, 12);

            // Net pole
            ctx.fillStyle = '#414F3D';
            ctx.fillRect(netX - 2, canvas.height - 12 - netH, 4, netH);
            ctx.strokeStyle = '#ffffff';
            ctx.setLineDash([2, 2]);
            ctx.strokeRect(netX - 2, canvas.height - 12 - netH, 4, netH);
            ctx.setLineDash([]);

            // Ball physics
            ballVy += gravity;
            ballX += ballVx;
            ballY += ballVy;

            // Net collision
            if (Math.abs(ballX - netX) < 8 && ballY > canvas.height - 12 - netH) {
                ballVx = -ballVx * 0.8;
            }

            // Ground collision
            if (ballY >= canvas.height - 22) {
                ballY = canvas.height - 22;
                ballVy = -ballVy * 0.75;
                if (Math.abs(ballVy) < 0.3) {
                    // Point scored
                    if (ballX < netX) {
                        setScores((prev) => ({ ...prev, p2: prev.p2 + 1 }));
                    } else {
                        setScores((prev) => ({ ...prev, p1: prev.p1 + 1 }));
                    }
                    // Reset ball
                    ballX = netX + (ballX < netX ? 30 : -30);
                    ballY = 30;
                    ballVx = ballX < netX ? 1.5 : -1.5;
                    ballVy = 0.5;
                }
            }

            // Wall collision
            if (ballX <= 10) {
                ballX = 10;
                ballVx = Math.abs(ballVx);
            } else if (ballX >= canvas.width - 10) {
                ballX = canvas.width - 10;
                ballVx = -Math.abs(ballVx);
            }

            // Draw Volleyball
            ctx.beginPath();
            ctx.arc(ballX, ballY, 7, 0, Math.PI * 2);
            ctx.fillStyle = '#FAF7EE';
            ctx.fill();
            ctx.lineWidth = 1.5;
            ctx.strokeStyle = '#C86D51';
            ctx.stroke();

            // Draw Cat (Player 1) on Left
            ctx.font = '20px serif';
            ctx.textAlign = 'center';
            const catX = 50;
            ctx.fillText('🐱', catX, catY);

            // Draw Dog (Player 2) on Right
            const dogX = canvas.width - 50;
            ctx.fillText('🐶', dogX, dogY);

            // Simple AI / Interactive hit logic
            if (ballX < 90 && ballY > catY - 20) {
                ballVy = -3.2;
                ballVx = 1.8 + Math.random() * 0.6;
            }
            if (ballX > canvas.width - 90 && ballY > dogY - 20) {
                ballVy = -3.2;
                ballVx = -(1.8 + Math.random() * 0.6);
            }

            animId = requestAnimationFrame(render);
        };

        animId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animId);
        };
    }, [tab.interactiveType]);

    // Handle damakara schema
    if (tab.interactiveType === 'damakara_schema') {
        const modules = tab.interactiveData?.modules || [];
        return (
            <div className="border-2 border-dashed border-garden-sage rounded-xl p-4 bg-garden-sand/40 text-left font-mono text-xs">
                <div className="text-garden-sage font-bold mb-2.5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                        <span>⚙️</span>
                        <span>SCHEMA // DAMAKARA_CORE_MODULES</span>
                    </span>
                    <span className="text-[10px] bg-garden-pastel text-garden-dark px-2 py-0.5 rounded font-bold">
                        STATUS: VERIFIED
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-[11px]">
                    {modules.map((m: any, idx: number) => {
                        const isSelected = selectedModule === idx;
                        return (
                            <button
                                key={m.number}
                                type="button"
                                onClick={() => setSelectedModule(idx)}
                                className={`text-left p-2.5 rounded border transition cursor-pointer ${isSelected
                                        ? 'bg-garden-pastel/70 border-garden-sage ring-2 ring-garden-moss/40 font-bold shadow-sm'
                                        : 'bg-white border-garden-sage/40 hover:bg-garden-cream'
                                    }`}
                            >
                                <div className="flex items-center justify-between font-bold text-garden-dark">
                                    <span>{m.number}. {m.name}</span>
                                    {isSelected && <span className="text-garden-sage text-[10px]">● Active</span>}
                                </div>
                                <div className="text-stone-600 mt-1 font-normal text-[10.5px] leading-relaxed">
                                    {m.desc}
                                </div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-3 pt-2.5 border-t border-garden-sage/30 text-[10px] text-stone-500 flex items-center justify-between">
                    <span>Target Database: PostgreSQL 3NF</span>
                    <span className="text-garden-sage font-bold">✓ Zero SKU redundancy</span>
                </div>
            </div>
        );
    }

    // Handle clevago flow
    if (tab.interactiveType === 'clevago_flow') {
        const pipeline = tab.interactiveData?.pipeline || [
            { step: 'Customer Order Input', desc: 'Mobile & Web Booking Form' },
            { step: 'Automated Triage', desc: 'Service Routing & SLA Check' },
            { step: 'Field Crew App', desc: 'Task Acceptance & GPS Log' },
            { step: 'QA & Completion', desc: 'Checklist Verification & Invoice' },
        ];

        return (
            <div className="border-2 border-dashed border-garden-sage rounded-xl p-4 bg-garden-sand/40 text-left font-mono text-xs">
                <div className="text-garden-sage font-bold mb-2.5 flex items-center justify-between">
                    <span>SERVICE_DISPATCH_TREE :: CLEVAGO</span>
                    <span className="text-[10px] text-stone-500">Tap step to inspect</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10.5px]">
                    {pipeline.map((item: any, idx: number) => {
                        const isCurrent = activeStep === idx;
                        return (
                            <button
                                key={item.step}
                                type="button"
                                onClick={() => setActiveStep(idx)}
                                className={`p-2 rounded border transition cursor-pointer ${isCurrent
                                        ? 'bg-garden-pastel border-garden-sage font-bold text-garden-dark shadow-sm ring-2 ring-garden-moss/30'
                                        : 'bg-white border-garden-sage/50 text-stone-700 hover:bg-garden-cream'
                                    }`}
                            >
                                <div className="font-bold">{item.step}</div>
                                <div className="text-[9.5px] text-stone-500 mt-1">{item.desc}</div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-3 p-2 bg-white rounded border border-garden-sage/40 text-[11px] text-stone-700">
                    <span className="font-bold text-garden-sage">Stage {activeStep + 1} Selected:</span>{' '}
                    {pipeline[activeStep]?.desc} — Optimized for minimal latency dispatch.
                </div>
            </div>
        );
    }

    // Handle howl relations
    if (tab.interactiveType === 'howl_relations') {
        const tables = tab.interactiveData?.tables || [];
        return (
            <div className="border-2 border-dashed border-garden-sage rounded-xl p-4 bg-garden-sand/40 text-left font-mono text-xs">
                <div className="text-garden-sage font-bold mb-2.5 flex items-center justify-between">
                    <span>HOWL_DATA_RELATIONS (SQL_3NF)</span>
                    <span className="text-[10px] bg-garden-cream border border-garden-sage/40 px-2 py-0.5 rounded">
                        DB ENGINE: POSTGRESQL
                    </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[10px] text-center mb-3">
                    {tables.map((t: any) => (
                        <div key={t.name} className="bg-white p-2 rounded border border-garden-sage text-left">
                            <span className="font-bold text-garden-dark block">{t.name}</span>
                            <span className="text-garden-terracotta text-[9.5px] block font-bold">{t.key}</span>
                            <span className="text-stone-500 text-[9px] block mt-0.5">{t.fields}</span>
                        </div>
                    ))}
                </div>

                {/* Live Pod Booking Simulator */}
                <div className="bg-white p-2.5 rounded border border-garden-sage/50">
                    <div className="font-bold text-garden-dark text-[11px] mb-1.5 flex justify-between items-center">
                        <span>Live Pod Reservation Tester:</span>
                        <span className="text-[10px] text-garden-sage font-bold">
                            {bookedPods.includes(selectedPod) ? '● Reserved' : '○ Available'}
                        </span>
                    </div>
                    <div className="flex gap-2">
                        {(['Pod A (Soundproof)', 'Pod B (Creative Desk)', 'Pod C (Collab Zone)'] as const).map(
                            (pod) => (
                                <button
                                    key={pod}
                                    type="button"
                                    onClick={() => setSelectedPod(pod)}
                                    className={`text-[10px] px-2 py-1 rounded border transition cursor-pointer ${selectedPod === pod
                                            ? 'bg-garden-sage text-garden-cream font-bold'
                                            : 'bg-garden-sand text-garden-dark border-garden-sage/40'
                                        }`}
                                >
                                    {pod}
                                </button>
                            )
                        )}
                    </div>
                    <button
                        type="button"
                        onClick={() => {
                            if (bookedPods.includes(selectedPod)) {
                                setBookedPods(bookedPods.filter((p) => p !== selectedPod));
                            } else {
                                setBookedPods([...bookedPods, selectedPod]);
                            }
                        }}
                        className="mt-2 text-[10px] font-bold bg-garden-pastel hover:bg-garden-moss hover:text-white text-garden-dark px-3 py-1 rounded transition cursor-pointer"
                    >
                        {bookedPods.includes(selectedPod) ? 'Cancel Reservation' : 'Confirm Book Pod'}
                    </button>
                </div>
            </div>
        );
    }

    // Handle empact tree
    if (tab.interactiveType === 'empact_tree') {
        const nodes = tab.interactiveData?.nodes || [];
        return (
            <div className="border-2 border-dashed border-garden-pond rounded-xl p-4 bg-garden-pondLight/30 text-left font-mono text-xs">
                <div className="flex items-center justify-between text-slate-800 font-bold mb-2">
                    <span>REACT_TREE // &lt;EmpactApp /&gt;</span>
                    <span className="text-[10px] bg-white border border-garden-pond px-2 py-0.5 rounded">
                        BUNDLE: 42KB GZIP
                    </span>
                </div>
                <div className="text-[11px] text-slate-700 space-y-1 bg-white/70 p-3 rounded border border-garden-pond/40">
                    {nodes.map((node: string, i: number) => (
                        <div key={i} className="hover:text-garden-dark font-medium">
                            {node}
                        </div>
                    ))}
                </div>
                <div className="mt-2.5 text-[10px] text-slate-600 flex justify-between">
                    <span>Lighthouse Performance: 98</span>
                    <span className="text-emerald-700 font-bold">✓ Accessible (WCAG AA)</span>
                </div>
            </div>
        );
    }

    // Handle gocamp sheets
    if (tab.interactiveType === 'gocamp_sheets') {
        return (
            <div className="border-2 border-dashed border-garden-pond rounded-xl p-4 bg-garden-pondLight/30 text-left font-mono text-xs">
                <div className="text-slate-800 font-bold mb-2 flex justify-between items-center">
                    <span>FLOW: CLIENT_BROWSER → APPS_SCRIPT → SHEETS</span>
                    <span className="text-[10px] text-garden-sage font-bold">Serverless</span>
                </div>

                <div className="bg-white p-2.5 rounded border border-slate-300 text-[10.5px] text-slate-700 space-y-1.5">
                    <div className="text-stone-500 font-mono text-[9.5px]">
                        POST /macros/s/...exec payload:
                    </div>
                    <div className="text-[10px] bg-garden-sand/60 p-1.5 rounded text-stone-800 break-all">
                        {`{ customer: "Malya M. R.", rentalDays: ${rentalDays}, cart: ["Tent 4P", "Cookset"], total: Rp${(rentalDays * 65000).toLocaleString()} }`}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] text-stone-600">Rental Days:</span>
                            <button
                                type="button"
                                onClick={() => setRentalDays(Math.max(1, rentalDays - 1))}
                                className="w-5 h-5 bg-stone-200 rounded flex items-center justify-center font-bold"
                            >
                                -
                            </button>
                            <span className="font-bold">{rentalDays}</span>
                            <button
                                type="button"
                                onClick={() => setRentalDays(rentalDays + 1)}
                                className="w-5 h-5 bg-stone-200 rounded flex items-center justify-center font-bold"
                            >
                                +
                            </button>
                        </div>
                        <button
                            type="button"
                            onClick={() => {
                                setWebhookSent(true);
                                setTimeout(() => setWebhookSent(false), 2500);
                            }}
                            className="bg-[#658a97] hover:bg-[#54737f] text-white text-[10px] px-2.5 py-1 rounded font-bold transition cursor-pointer"
                        >
                            {webhookSent ? 'Syncing...' : 'Test Webhook Push'}
                        </button>
                    </div>

                    <div className="text-emerald-600 font-bold mt-1 text-[10px]">
                        {webhookSent ? '⚡ Sending order to Google Sheets...' : '✓ Status 200 OK — Row appended & Mail Triggered'}
                    </div>
                </div>
            </div>
        );
    }

    // Handle edulms progress
    if (tab.interactiveType === 'edulms_progress') {
        return (
            <div className="border-2 border-dashed border-garden-pond rounded-xl p-4 bg-garden-pondLight/30 text-left font-mono text-xs">
                <div className="flex justify-between items-center text-slate-800 font-bold mb-2">
                    <span>MODULE: IS_ARCHITECTURE_WEEK_04</span>
                    <span className="text-xs text-garden-sage font-bold">{completedPercent}% Complete</span>
                </div>

                <div className="w-full bg-white h-2.5 rounded-full overflow-hidden border border-slate-300">
                    <div
                        className="bg-garden-pond h-full transition-all duration-300"
                        style={{ width: `${completedPercent}%` }}
                    ></div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px]">
                    <span className="text-slate-600">Simulate Module Progress:</span>
                    <div className="flex gap-1.5">
                        {[25, 50, 75, 100].map((val) => (
                            <button
                                key={val}
                                type="button"
                                onClick={() => setCompletedPercent(val)}
                                className={`px-2 py-0.5 rounded border transition cursor-pointer ${completedPercent === val
                                        ? 'bg-garden-pond text-white font-bold'
                                        : 'bg-white text-slate-700'
                                    }`}
                            >
                                {val}%
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-2 text-[10px] text-slate-600 bg-white p-2 rounded border border-slate-200">
                    Upcoming: Assignment 02 - Normalization Case Study (Due Friday)
                </div>
            </div>
        );
    }

    // Handle elo loop
    if (tab.interactiveType === 'elo_loop') {
        const steps = tab.interactiveData?.loop || [
            { num: '1', label: 'Daily Quest', icon: '🌱' },
            { num: '2', label: 'Proof Upload', icon: '📸' },
            { num: '3', label: 'XP + Tree Growth', icon: '⭐' },
            { num: '4', label: 'Real Reward', icon: '🎁' },
        ];

        return (
            <div className="border-2 border-dashed border-garden-terracotta rounded-xl p-4 bg-garden-peachLight text-left font-mono text-xs">
                <div className="text-garden-terracotta font-bold mb-2 flex items-center justify-between">
                    <span>GAMIFICATION_LOOP :: USER_ENGAGEMENT</span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-garden-peach font-bold">
                        Total XP: {eloXp}
                    </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[10px]">
                    {steps.map((s: any, idx: number) => {
                        const isSelected = activeLoopStep === idx;
                        return (
                            <button
                                key={s.num}
                                type="button"
                                onClick={() => {
                                    setActiveLoopStep(idx);
                                    setEloXp((prev) => prev + 15);
                                }}
                                className={`p-2 rounded border transition cursor-pointer ${isSelected
                                        ? 'bg-garden-peach text-stone-900 font-bold border-garden-terracotta shadow-sm'
                                        : 'bg-white text-stone-700 border-garden-peach hover:bg-garden-peachLight'
                                    }`}
                            >
                                <div className="text-base mb-0.5">{s.icon}</div>
                                <div>{s.num}. {s.label}</div>
                            </button>
                        );
                    })}
                </div>

                <div className="mt-3 p-2 bg-white rounded border border-garden-peach text-[10px] text-stone-700 flex justify-between items-center">
                    <span>
                        Current Action: <strong>{steps[activeLoopStep]?.label}</strong> completed!
                    </span>
                    <span className="text-garden-terracotta font-bold">+15 Eco XP awarded</span>
                </div>
            </div>
        );
    }

    // Handle volleyball mini canvas game
    if (tab.interactiveType === 'volleyball_game') {
        return (
            <div className="border-2 border-dashed border-garden-terracotta rounded-xl p-4 bg-garden-peachLight text-left font-mono text-xs">
                <div className="flex justify-between items-center text-garden-terracotta font-bold mb-2">
                    <span className="flex items-center gap-1.5">
                        <span>🎮</span>
                        <span>CANVAS_ENGINE // 60_FPS</span>
                    </span>
                    <span className="text-[10px] bg-white px-2 py-0.5 rounded border border-garden-peach font-bold">
                        Cat: {scores.p1} | Dog: {scores.p2}
                    </span>
                </div>

                {/* 2D Physics Canvas */}
                <div className="rounded border border-garden-moss overflow-hidden shadow-inner relative">
                    <canvas
                        ref={canvasRef}
                        width={380}
                        height={110}
                        className="w-full h-28 block bg-[#ebf3e7]"
                    />
                </div>

                <div className="flex items-center justify-between text-[10px] text-stone-600 mt-2">
                    <span>Cat (Left) vs Dog (Right) • 2D Physics Loop</span>
                    <button
                        type="button"
                        onClick={() => setScores({ p1: 0, p2: 0 })}
                        className="text-[9.5px] bg-white px-2 py-0.5 rounded border border-stone-300 hover:bg-garden-sand cursor-pointer font-bold"
                    >
                        Reset Score
                    </button>
                </div>
            </div>
        );
    }

    return null;
}
