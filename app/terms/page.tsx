'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Shield, ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'true') {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', String(newMode))
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg flex items-center gap-2 hover:text-blue-600 transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Find Resources USA
          </Link>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Disclaimer Badge */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-100 rounded-full text-xs font-bold tracking-wider border border-amber-300 dark:border-amber-800">
            <Shield className="h-4 w-4" />
            NOT A GOVERNMENT SITE
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Use</h1>

        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-sm text-muted-foreground mb-8">Last Updated: January 2025</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing or using Find Resources USA ("the Site"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Not a Government Site</h2>
            <p className="text-muted-foreground mb-4">
              Find Resources USA is not affiliated with, endorsed by, or operated by any government agency. We are an independent platform that aggregates information about public assistance programs and connects users with partner services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. No Guarantee of Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              The eligibility check provided on this Site is for informational purposes only. We do not guarantee that you will qualify for any specific program or benefit. Final eligibility determinations are made by the respective program administrators or partners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Third-Party Contacts</h2>
            <p className="text-muted-foreground mb-4">
              By using the Site and clicking the eligibility check button, you consent to being contacted by our partners via phone, email, or text message regarding available programs and resources. You may receive marketing communications from third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Affiliate Relationships</h2>
            <p className="text-muted-foreground mb-4">
              We may receive compensation when you click on certain links or engage with partner offers. This does not affect the information we provide but helps us maintain the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Information Accuracy</h2>
            <p className="text-muted-foreground mb-4">
              While we strive to provide accurate and up-to-date information, we make no warranties or representations about the accuracy, completeness, or timeliness of the content on the Site. Program availability and requirements may change.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. User Conduct</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use the Site only for lawful purposes and in accordance with these Terms. You may not use the Site in any way that could damage, disable, or impair the Site or interfere with any other party's use of the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              To the fullest extent permitted by law, Find Resources USA and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site or any linked services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Modifications</h2>
            <p className="text-muted-foreground mb-4">
              We reserve the right to modify these Terms at any time. Continued use of the Site after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms, please contact us at:{' '}
              <a href="mailto:support@aidnow.us" className="text-blue-600 dark:text-blue-400 hover:underline">
                support@aidnow.us
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              © 2025 Find Resources USA. Not affiliated with any government agency.
            </p>
            <div className="mt-4 flex justify-center gap-6 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
