export default function CookiePolicy() {
    return (
        <main className="w-full min-h-screen bg-gray-50 py-20 px-6">
            <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-sm rounded-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
                    Cookie Policy
                </h1>

                <div className="space-y-8 text-slate-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">1. What are cookies?</h2>
                        <p>
                            Cookies are small text files stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the owners of the site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">2. How we use cookies</h2>
                        <p>
                            Pulse X Management uses the following types of cookies:
                        </p>
                        <ul className="list-disc pl-6 mt-2 space-y-1">
                            <li><strong>Essential Cookies:</strong> Necessary for the website to function properly. They cannot be switched off in our systems.</li>
                            <li><strong>Performance Cookies:</strong> Allow us to count visits and traffic sources to measure and improve the performance of our site (e.g., Google Analytics).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-slate-800 mb-3">3. Managing Cookies</h2>
                        <p>
                            You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}