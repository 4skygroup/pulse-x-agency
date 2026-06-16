"use client"
import { Phone, Mail } from "lucide-react";
import { useState } from "react";

const FORMSPREE = ""; // Your Formspree URL goes here

type Tab = "callback" | "message";

const timeSlots = [
    "09:30 AM – 10:30 AM",
    "10:30 AM – 11:30 AM",
    "11:30 AM – 12:30 PM",
    "02:00 PM – 03:00 PM",
    "03:00 PM – 04:00 PM",
    "04:00 PM – 05:00 PM",
    "05:00 PM – 06:00 PM",
];

const subjects = [
    "Modeling",
    "Talent Representation",
    "Content Marketing",
    "Brand Partnership",
    "Other Inquiry",
];

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState<Tab>("callback");

    return (
        <div className="rounded-2xl border border-white/10 bg-pulse-burgundy p-1">
            {/* Tab switcher */}
            <div className="mb-1 grid grid-cols-2 rounded-xl bg-white/5 p-1">
                <button
                    onClick={() => setActiveTab("callback")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${activeTab === "callback"
                            ? "bg-white text-black shadow"
                            : "text-white/50 hover:text-white"
                        }`}
                >
                    <Phone className="w-4 h-4" />
                    Get a Call
                </button>
                <button
                    onClick={() => setActiveTab("message")}
                    className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${activeTab === "message"
                            ? "bg-white text-black shadow"
                            : "text-white/50 hover:text-white"
                        }`}
                >
                    <Mail className="w-4 h-4" />
                    Send a Message
                </button>
            </div>

            {/* Form body */}
            <div className="p-5">
                {activeTab === "callback" ? <CallbackForm /> : <MessageForm />}
            </div>
        </div>
    );
}

function CallbackForm() {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");
    const [timeSlot, setTimeSlot] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch(FORMSPREE, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ lastName, firstName, phone, subject, timeSlot }),
        });

        if (res.ok) {
            setStatus("sent");
            setLastName("");
            setFirstName("");
            setPhone("");
            setSubject("");
            setTimeSlot("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="First Name" placeholder="John" value={firstName} onChange={setFirstName} />
                <Field label="Last Name" placeholder="Doe" value={lastName} onChange={setLastName} />
            </div>
            <Field label="Phone Number" placeholder="+1 234 567 8900" type="tel" value={phone} onChange={setPhone} />
            <SelectField label="Subject" options={subjects} value={subject} onChange={setSubject} />
            <SelectField label="Preferred Time" options={timeSlots} value={timeSlot} onChange={setTimeSlot} />

            {status === "sent" && (
                <p className="text-sm text-green-400 text-center">Request sent successfully!</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-400 text-center">An error occurred. Please try again.</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
            >
                <Phone className="w-4 h-4" />
                {status === "sending" ? "Sending…" : "Request a Call"}
            </button>
        </form>
    );
}

function MessageForm() {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        const res = await fetch(FORMSPREE, {
            method: "POST",
            headers: { "Content-Type": "application/json", Accept: "application/json" },
            body: JSON.stringify({ lastName, firstName, email, subject, message }),
        });

        if (res.ok) {
            setStatus("sent");
            setLastName("");
            setFirstName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } else {
            setStatus("error");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="First Name" placeholder="John" value={firstName} onChange={setFirstName} />
                <Field label="Last Name" placeholder="Doe" value={lastName} onChange={setLastName} />
            </div>
            <Field label="Email" placeholder="john@example.com" type="email" value={email} onChange={setEmail} />
            <SelectField label="Subject" options={subjects} value={subject} onChange={setSubject} />

            <div className="flex flex-col gap-1.5">
                <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                    Message
                </label>
                <textarea
                    rows={4}
                    placeholder="Tell us how we can help you..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
                />
            </div>

            {status === "sent" && (
                <p className="text-sm text-green-400 text-center">Message sent successfully!</p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-400 text-center">An error occurred. Please try again.</p>
            )}

            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-t5 font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
            >
                <Mail className="w-4 h-4" />
                {status === "sending" ? "Sending…" : "Send Message"}
            </button>
        </form>
    );
}

function Field({ label, placeholder, type = "text", value, onChange, }: {
    label: string;
    placeholder: string;
    type?: string;
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
            />
        </div>
    );
}

function SelectField({ label, options, value, onChange, }: {
    label: string;
    options: string[];
    value: string;
    onChange: (v: string) => void;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
                {label}
            </label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white outline-none transition focus:border-white/30 focus:bg-white/8"
            >
                <option value="" disabled className="bg-[#111] text-white/50">
                    Select…
                </option>
                {options.map((o) => (
                    <option key={o} value={o} className="bg-[#111] text-white">
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}