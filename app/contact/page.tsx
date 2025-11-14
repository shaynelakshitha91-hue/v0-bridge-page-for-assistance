'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Moon, Sun, Shield, ArrowLeft, Mail, MessageSquare } from 'lucide-react'
import { Card } from '@/components/ui/card'

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

        <h1 className="text-4xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
          Have questions about our services or need assistance? We're here to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-950 rounded-full">
                <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">Email Support</h2>
              <p className="text-muted-foreground">
                Send us an email and we'll get back to you as soon as possible.
              </p>
              <a
                href="mailto:support@aidnow.us"
                className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                support@aidnow.us
              </a>
            </div>
          </Card>

          <Card className="p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-4 bg-blue-100 dark:bg-blue-950 rounded-full">
                <MessageSquare className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-2xl font-semibold">General Inquiries</h2>
              <p className="text-muted-foreground">
                Questions about our services, partnerships, or how we can help.
              </p>
              <p className="text-sm text-muted-foreground">
                We typically respond within 1-2 business days.
              </p>
            </div>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Important Reminders</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Not a Government Agency:</strong> We are an independent platform that connects users with assistance programs and partner services.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>No Eligibility Guarantees:</strong> We help you explore options, but we cannot guarantee eligibility for any specific program.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Privacy Concerns:</strong> For questions about how we handle your data, please review our Privacy Policy or email us directly.
              </span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            For accessibility issues or technical support, please include details about your device and browser in your email.
          </p>
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
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
