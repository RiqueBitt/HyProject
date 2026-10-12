/**
 * Shared color constants for the application
 */

/** Color palette for accent colors used throughout the UI (12 colors). */
// Project Club: o dourado (#FACC15) é o acento padrão do HyProject; o laranja Hytale continua disponível.
export const ACCENT_COLORS = [
    '#FACC15', // Dourado Project Club (padrão)
    '#FFA845', // Orange
    '#FF6B6B', // Red
    '#FF85C0', // Pink
    '#B37FEB', // Purple
    '#5C7CFA', // Blue
    '#339AF0', // Light Blue
    '#22B8CF', // Cyan
    '#20C997', // Teal
    '#51CF66', // Green
    '#94D82D', // Lime
    '#FFFFFF', // White
];

/** Default accent color (dourado Project Club). Equals the first entry in {@link ACCENT_COLORS}. */
export const DEFAULT_ACCENT_COLOR = ACCENT_COLORS[0];

/**
 * Paleta escura compartilhada por todos os apps do Project Club.
 * Mantida aqui para uso em estilos inline (os mesmos valores estão no tailwind.config.js como `pc-*`).
 */
export const PC_COLORS = {
    bg: '#1E1F24',        // primário: cards/painéis
    bgSecondary: '#17181C', // secundário: sidebar
    bgWindow: '#131417',  // fundo da janela
    bgDeep: '#0E0F12',    // mais profundo
    border: '#2E3038',
    borderSecondary: '#3A3D47',
    control: '#343742',   // botões/controles
    text: '#F0F5FA',
    textSecondary: '#A9AEBB',
    accent: '#FACC15',
    accentLight: '#FDE047',
    accentDark: '#CA8A04',
    accentText: '#0E0F12', // texto sobre o acento
} as const;
