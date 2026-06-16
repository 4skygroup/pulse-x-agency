import { Metadata } from "next";
import Contact from "../components/Contact/Contact"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with PulseX Management. We are always looking to connect with visionary talents, creators, and innovative brand partners.",
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        title: "Contact Us | PulseX Management",
        description: "Get in touch with PulseX Management. We are always looking to connect with visionary talents, creators, and innovative brand partners.",
        url: "/contact",
    },
    twitter: {
        title: "Contact Us | PulseX Management",
        description: "Get in touch with PulseX Management. We are always looking to connect with visionary talents, creators, and innovative brand partners.",
    },
};


export default function ContactPage() {

    return (
        <Contact />
    );
}