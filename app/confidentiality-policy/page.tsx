export default function ConfidentialityPolicy() {
    return (
        <main className="w-full min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Confidentiality Policy
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <p className="text-sm italic text-slate-500">
                        Last updated: {new Date().toLocaleDateString('en-US')}
                    </p>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">1. Data Collection</h2>
                        <p>
                            We collect personal data when you interact with our website, such as when you fill out a contact form or apply to be a creator. This may include your name, email address, social media handles, and IP address.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">2. Use of Data</h2>
                        <p>
                            The information collected is used exclusively to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li>Process your application or inquiries.</li>
                            <li>Improve our agency services and website performance.</li>
                            <li>Communicate updates regarding Pulse X Management.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">3. User Rights</h2>
                        <p>
                            Under the GDPR, you have the right to access, rectify, or erase your personal data. To exercise these rights, please contact us at: <strong>contact@playtosky.com</strong>.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}