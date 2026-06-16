export default function LegalMentions() {
    return (
        <main className="w-full min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Legal Mentions
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Publisher</h2>
                        <p>
                            The <strong>Pulse X Management</strong> website is published by <strong>Play To Sky Group (4 Sky Group)</strong>.<br />
                            Headquarters: Paris, France.<br />
                            Publication Director: <em>Robbin-James Agoh</em>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Hosting</h2>
                        <p>
                            This website is hosted by : <strong>OVH</strong><br />
                            Address: <em>56, rue de Monceau<br/>
                                Paris, France</em>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Intellectual Property</h2>
                        <p>
                            All content on this website, including texts, graphics, logos, and images, is the property of Play To Sky Group or its content suppliers and is protected by international copyright laws. Unauthorized use or reproduction is strictly prohibited.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}