import { Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";

const cards = [
  {
    icon: <Mail className="w-5 h-5 text-white" />,
    label: "Email",
    value: "contact@playtosky.com",
  },
  {
    icon: <Phone className="w-5 h-5 text-white" />,
    label: "Phone",
    value: "+33 1 23 45 67 89",
  },
  {
    icon: <Clock className="w-5 h-5 text-white" />,
    label: "Business Hours",
    value: "Mon–Fri · 09:30 AM–07:00 PM",
  },
];

export default function ContactInfoCards() {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center gap-4 rounded-xl bg-black/5 px-5 py-4"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
            {card.icon}
          </div>
          <div>
            <p className="text-t6 font-medium uppercase tracking-widest text-white/40">
              {card.label}
            </p>
            <p className="mt-0.5 text-t5 font-medium text-white">
              {card.value}
            </p>
          </div>
        </div>
      ))}

      <div className="mt-2 flex items-center gap-3">
        <Image
          src="/logo-pulse-x-management.webp"
          alt="Pulse X Management Logo"
          width={80}
          height={28}
          unoptimized
          className="h-8 w-auto object-contain"
          style={{ filter: "brightness(0) invert(1)" }}
        />
        <p className="text-t6 md:text-t5 leading-relaxed text-white/40">
          Empowering creators and brands to reach new heights through strategic
          management.
        </p>
      </div>
    </div>
  );
}
