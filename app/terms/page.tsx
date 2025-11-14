'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Shield, FileText } from 'lucide-react'

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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Find Resources USA
          </Link>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Disclaimer Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-100 rounded-full text-xs font-bold tracking-wider border border-amber-300 dark:border-amber-800">
            <Shield className="h-4 w-4" />
            NOT A GOVERNMENT SITE
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-1">Last Updated: January 2025</p>
          <p className="text-sm text-muted-foreground">This site is not affiliated with any government agency.</p>
        </div>

        {/* Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6" />
              SECTION 1 — Acceptance of Terms
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              By using this website ("Site"), you agree to these Terms & Conditions ("Terms"). If you do not agree, discontinue use. These Terms apply to all visitors.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 2 — Purpose of This Site</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Site helps users explore publicly available programs and partner-supported offers. This is not a government website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 3 — No Government Affiliation</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Site is privately owned and not affiliated with any government agency.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 4 — No Guarantees</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not guarantee outcomes, eligibility, approval, or financial results.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 5 — User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users agree to lawful use and may not misuse the Site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 6 — Third-Party Partners</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users may be redirected to partner sites. Their policies apply independently.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 7 — Communication Consent</h2>
            <p className="text-muted-foreground leading-relaxed">
              Partners may contact users with emails, calls, or texts. This Site does not directly contact users.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 8 — Privacy Policy Reference</h2>
            <p className="text-muted-foreground leading-relaxed">
              Use of this Site is also governed by our <Link href="/privacy-policy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 9 — Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content is protected. No redistribution without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 10 — Limitations of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Use of this Site is at your own risk.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 11 — Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update these Terms. Continued use means acceptance.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 12 — Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may limit access for abuse or violations.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 13 — Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              Governed by laws of the Site owner's state.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">SECTION 14 — Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              Email: <a href="mailto:support@aidnow.us" className="text-blue-600 dark:text-blue-400 hover:underline">support@aidnow.us</a>
            </p>
          </section>
        </article>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12 mt-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-foreground transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-foreground transition-colors">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground text-center leading-relaxed">
              Not affiliated with any government agency. Information provided for general guidance only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
