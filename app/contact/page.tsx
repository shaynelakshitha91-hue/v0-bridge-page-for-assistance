'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Shield, Mail, CheckCircle, XCircle } from 'lucide-react'

export default function ContactPage() {
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
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg text-muted-foreground mb-1">We're here to help with Site-related questions.</p>
          <p className="text-sm text-muted-foreground">This site is not affiliated with any government agency.</p>
        </div>

        {/* Content */}
        <article className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Mail className="h-6 w-6" />
              SECTION 1 — Purpose of This Page
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              This page is for questions about this Site only. We cannot provide assistance program advice or eligibility decisions.
            </p>
          </section>

          <section className="mb-8 bg-blue-50 dark:bg-blue-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mb-4">SECTION 2 — Support Email</h2>
            <p className="text-muted-foreground mb-4">General Support:</p>
            <a 
              href="mailto:support@aidnow.us" 
              className="text-xl font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              support@aidnow.us
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Typical response time: 1–3 business days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              SECTION 3 — We Can Help With
            </h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>Website questions</li>
              <li>Broken links</li>
              <li>Clarifications about Terms or Privacy Policy</li>
              <li>User experience feedback</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              SECTION 4 — We Cannot Help With
            </h2>
            <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2 ml-4">
              <li>Program eligibility</li>
              <li>Program applications</li>
              <li>Legal or financial advice</li>
              <li>Contacting agencies</li>
              <li>Filling forms on partner websites</li>
            </ul>
          </section>

          <section className="mb-8 bg-amber-50 dark:bg-amber-950/30 p-6 rounded-xl border border-amber-200 dark:border-amber-800">
            <h2 className="text-2xl font-bold mb-4">SECTION 5 — Important Note</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users should not send sensitive data such as SSNs, bank information, or government IDs.
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
