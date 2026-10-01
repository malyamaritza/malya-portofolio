/**
 * Static asset map — resolves @/assets/... paths used in JSON data files
 * into proper module URLs that Next.js/Webpack can process at build time.
 *
 * Add any new asset used in JSON files here.
 */

// Profile
import profilePhoto from '../assets/profile_photo.jpg';

// Thumbnails (projects)
import thumbnailDamakara from '../assets/thumbnail_damakara.png';
import thumbnailClevago from '../assets/thumbnail_clevago.png';
import thumbnailHowl from '../assets/thumbnail_howl.png';
import thumbnailFilmint from '../assets/thumbnail_filmint.png';
import thumbnailEatventory from '../assets/thumbnail_eatventory.png';
import thumbnailEduLms from '../assets/thumbnail_edulms.png';
import thumbnailElo from '../assets/thumbnail_elo.png';
import thumbnailGocamp from '../assets/thumbnail_gocamp.png';
import thumbnailVolleygame from '../assets/thumbnail_volleygame.png';

// Certificates
import certificateDigcofest from '../assets/certificate_digcofest.png';
import certificateGem from '../assets/certificate_gem.jpg';
import certificateLogicodix from '../assets/certificate_logicodix.png';
import certificateNbpc2025 from '../assets/certificate_nbpc2025.png';

// Organization logos
import logoHimasif from '../assets/logo_himasif.png';
import logoOnelish from '../assets/logo_onelish.png';
import logoOnebycode from '../assets/logo_onebycode.png';

// Journey / story images
import thumbnailEmpact from '../assets/thumbnail_empact.png';

type ImageSource = { src: string } | string;

function toSrc(img: ImageSource): string {
    if (typeof img === 'string') return img;
    return img.src;
}

/**
 * Maps the string values used in JSON (e.g. "@/assets/thumbnail_damakara.png")
 * to the resolved module URL.
 */
const IMAGE_MAP: Record<string, string> = {
    // profile
    '@/assets/profile_photo.jpg': toSrc(profilePhoto),
    '@assets/profile_photo.jpg': toSrc(profilePhoto),

    // thumbnails
    '@/assets/thumbnail_damakara.png': toSrc(thumbnailDamakara),
    '@assets/thumbnail_damakara.png': toSrc(thumbnailDamakara),
    '@/assets/thumbnail_clevago.png': toSrc(thumbnailClevago),
    '@assets/thumbnail_clevago.png': toSrc(thumbnailClevago),
    '@/assets/thumbnail_howl.png': toSrc(thumbnailHowl),
    '@assets/thumbnail_howl.png': toSrc(thumbnailHowl),
    '@/assets/thumbnail_filmint.png': toSrc(thumbnailFilmint),
    '@assets/thumbnail_filmint.png': toSrc(thumbnailFilmint),
    '@/assets/thumbnail_eatventory.png': toSrc(thumbnailEatventory),
    '@assets/thumbnail_eatventory.png': toSrc(thumbnailEatventory),
    '@/assets/thumbnail_edulms.png': toSrc(thumbnailEduLms),
    '@assets/thumbnail_edulms.png': toSrc(thumbnailEduLms),
    '@/assets/thumbnail_elo.png': toSrc(thumbnailElo),
    '@assets/thumbnail_elo.png': toSrc(thumbnailElo),
    '@/assets/thumbnail_gocamp.png': toSrc(thumbnailGocamp),
    '@assets/thumbnail_gocamp.png': toSrc(thumbnailGocamp),
    '@/assets/thumbnail_volleygame.png': toSrc(thumbnailVolleygame),
    '@assets/thumbnail_volleygame.png': toSrc(thumbnailVolleygame),

    // certificates
    '@/assets/certificate_digcofest.png': toSrc(certificateDigcofest),
    '@assets/certificate_digcofest.png': toSrc(certificateDigcofest),
    '@/assets/certificate_gem.jpg': toSrc(certificateGem),
    '@assets/certificate_gem.jpg': toSrc(certificateGem),
    '@/assets/certificate_logicodix.png': toSrc(certificateLogicodix),
    '@assets/certificate_logicodix.png': toSrc(certificateLogicodix),
    '@/assets/certificate_nbpc2025.png': toSrc(certificateNbpc2025),
    '@assets/certificate_nbpc2025.png': toSrc(certificateNbpc2025),

    // org logos
    '@/assets/logo_himasif.png': toSrc(logoHimasif),
    '@assets/logo_himasif.png': toSrc(logoHimasif),
    '@/assets/logo_onelish.png': toSrc(logoOnelish),
    '@assets/logo_onelish.png': toSrc(logoOnelish),
    '@/assets/logo_onebycode.png': toSrc(logoOnebycode),
    '@assets/logo_onebycode.png': toSrc(logoOnebycode),

    // journey
    '@/assets/thumbnail_empact.png': toSrc(thumbnailEmpact),
    '@assets/thumbnail_empact.png': toSrc(thumbnailEmpact),
};

/**
 * Resolves a JSON image path string.
 * If it's an @/assets/... or @assets/... alias, returns the compiled asset URL.
 * Otherwise returns the original string (e.g. an external URL).
 */
export function resolveImage(path: string | undefined | null): string {
    if (!path) return '';
    return IMAGE_MAP[path] ?? path;
}

export { profilePhoto };
