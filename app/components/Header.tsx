import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 md:px-12 py-6 w-full mx-auto text-white z-50">
            <div className="shrink-0">
                <Image
                    src="/Logo-Pulse-X-agency-bg.png"
                    alt="PulseX Agency Logo"
                    width={110}
                    height={35}
                    className="object-contain w-auto h-auto"
                />
            </div>

            <nav className="hidden md:flex gap-8 text-xs uppercase tracking-wider font-light">
                <Link href="#" className="hover:text-black transition-colors">The Group</Link>
                <Link href="/careers" className="hover:text-black transition-colors">Careers</Link>
                <Link href="/about" className="hover:text-black transition-colors">About</Link>
                <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
            </nav>
        </header>
    );
}