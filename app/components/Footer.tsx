import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full bg-linear-to-b from-pulse-pink to-pulse-burgundy text-white pt-12 pb-6 px-6 md:px-12 mt-auto">            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/20 pb-8 text-sm font-light">

                {/* Colonne 1: Branding & Réseaux */}
                <div className="flex flex-col gap-4">
                    <Image
                        src="/Logo-Pulse-x-management.png"
                        alt="PulseX Agency Logo"
                        width={120}
                        height={40}
                        className="w-auto h-auto max-w-30"
                    />
                    <p className="text-white/90 font-medium">Influence Agency</p>

                    {/* Icônes Réseaux (Simulées avec du texte stylisé ou cercles) */}
                    <div className="flex gap-3 mt-2">
                        {['in', 'ig', 'tk', 'be'].map((network) => (
                            <span key={network} className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-xs font-semibold cursor-pointer hover:bg-white hover:text-pulse-pink transition-colors">
                                {network}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Policy */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-base mb-1">Politique</h3>
                    <Link href="#" className="hover:underline text-white/80">Mentions légales</Link>
                    <Link href="#" className="hover:underline text-white/80">Confidentialité</Link>
                </div>

                {/* Nos entités */}
                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-base mb-1">Nos entités</h3>
                    {['Visuance', 'Snackly', 'Seofy', 'Pulse X', 'CyberSky', 'Drox 360', 'Sky To Be Media', 'Play to sky production'].map((entity) => (
                        <Link key={entity} href="#" className="hover:underline text-white/80 text-xs">
                            {entity}
                        </Link>
                    ))}
                </div>

                {/* Services */}
                <div className="flex flex-col gap-3">
                    <h3 className="font-bold text-base mb-1">Services</h3>
                    <Link href="#" className="hover:underline text-white/80">Social Ads</Link>
                    <Link href="#" className="hover:underline text-white/80">Brand Content</Link>
                    <Link href="#" className="hover:underline text-white/80">Influence</Link>
                </div>

            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-white/60 mt-6 font-light">
                © 2026 Pulse X Agency- Une entité Play To Sky Group
            </div>
        </footer>
    );
}