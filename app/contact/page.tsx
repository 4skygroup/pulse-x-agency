import { Metadata } from "next";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with PulseX Management. We are always looking to connect with visionary talents, creators, and innovative brand partners.",
};

export default function Contact() {

    return (
        <div className="w-full min-h-[calc(90vh-100px)] bg-linear-to-b from-pulse-pink via-pulse-pink/90 to-pulse-pink/40 py-3 px-4 md:px-8 flex items-center justify-center border-t border-b border-white">

            {/* Cadre principal arrondi de la maquette */}
            <div className="max-w-6xl w-full mx-auto bg-white/10 backdrop-blur-md p-4 md:p-6 shadow-sm border border-white mt-6 relative">

                {/* Titre de la page */}
                {/* <h1 className="text-3xl md:text-4xl text-center uppercase tracking-wide mb-2 text-white drop-shadow-sm">
                    Contact us
                </h1> */}

                <p className="text-2xl md:text-3xl text-right mb-2 tracking-wide text-white drop-shadow-sm">
                    Let&apos;s start your strategy !
                </p>

                {/* Grille : Logo à gauche / Formulaire à droite */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* CÔTÉ GAUCHE : Énorme Logo textuel centré verticalement */}
                    <div className="md:col-span-5 flex justify-center items-center p-4">
                        <Image
                            src="/logo-pulse-x-management.png"
                            alt="Logo Pulse X Management"
                            width={350}
                            height={150}
                            priority
                            className="w-full max-w-70 md:max-w-full h-auto object-contain drop-shadow-sm"
                        />
                    </div>

                    {/* CÔTÉ DROIT : Le Formulaire complet */}
                    <ContactForm />

                </div>
            </div>

        </div>
    );
}