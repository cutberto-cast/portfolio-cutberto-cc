import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'Cutberto Colohua — Desarrollador Frontend';

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#000000',
                    backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(220,38,38,0.35), transparent 60%)',
                }}
            >
                <div style={{ fontSize: 72, fontWeight: 700, color: '#ffffff', letterSpacing: -1 }}>
                    Cutberto Colohua
                </div>
                <div
                    style={{
                        marginTop: 24,
                        fontSize: 34,
                        fontWeight: 500,
                        color: '#f87171',
                        letterSpacing: 4,
                        textTransform: 'uppercase',
                    }}
                >
                    Desarrollador Frontend
                </div>
                <div style={{ marginTop: 36, fontSize: 22, color: 'rgba(255,255,255,0.6)' }}>
                    React · Angular · Next.js · Java
                </div>
            </div>
        ),
        { ...size }
    );
}
