'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Moon, Sun, Shield, Zap, List, Info, CheckCircle, ChevronRight, FileText } from 'lucide-react'

export default function EligibilityPage() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    // Load dark mode preference from localStorage
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
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-lg"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-semibold text-lg">Find Resources USA</div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            <a
              href="#privacy"
              className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Disclaimer Badge */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-950 text-amber-900 dark:text-amber-100 rounded-full text-xs font-bold tracking-wider border border-amber-300 dark:border-amber-800">
            <Shield className="h-4 w-4" />
            NOT A GOVERNMENT SITE
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Check Eligibility for Local Assistance
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 text-balance">
            Begin a quick check to explore programs and resources that may support your household needs.
          </p>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto mb-8">
            Not a government site — independent platform aggregating public resources and partner offers.
          </p>

          {/* Credibility Row */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Trusted by people looking for assistance</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Privacy-minded process</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span>Fast, simple start</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="max-w-xl mx-auto">
            <a
              href="https://offerlnks.com/aff_c?offer_id=3200&aff_id=139288"
              target="_blank"
              rel="noopener noreferrer"
              data-utm-source="bridgepage"
            >
              <Button
                size="lg"
                className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Start Eligibility Check
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <div className="mt-4 text-xs text-muted-foreground text-center space-y-1">
              <p>
                By continuing, you agree to our Privacy Policy and may be contacted about available resources and partner offers.
              </p>
              <p>
                You may receive calls or texts from partners about relevant programs.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Why Start Here?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-full">
                  <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg">Explore possible rent & utility support</h3>
                <p className="text-sm text-muted-foreground">Short line</p>
              </div>
            </Card>
            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-full">
                  <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg">Fast, simple process</h3>
                <p className="text-sm text-muted-foreground">Start in seconds</p>
              </div>
            </Card>
            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-full">
                  <List className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg">Organized list of potential programs</h3>
                <p className="text-sm text-muted-foreground">See options for your area</p>
              </div>
            </Card>
            <Card className="p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-950 rounded-full">
                  <Info className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-lg">No government affiliation</h3>
                <p className="text-sm text-muted-foreground">Independent platform to help you explore resources</p>
              </div>
            </Card>
          </div>
        </section>

        {/* Steps Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center mb-4 text-xl">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2">Answer a few short questions</h3>
                <p className="text-sm text-muted-foreground">Helps match you with programs</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center mb-4 text-xl">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2">View programs in your area</h3>
                <p className="text-sm text-muted-foreground">See options that may help with costs</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-bold flex items-center justify-center mb-4 text-xl">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2">You may be contacted</h3>
                <p className="text-sm text-muted-foreground">Partners can help with next steps</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16" id="faq">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">How does this work?</AccordionTrigger>
                <AccordionContent>
                  This page connects you to a quick eligibility check that helps match you with possible programs and partner offers based on your situation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">Is this a government website?</AccordionTrigger>
                <AccordionContent>
                  No. This site is not affiliated with any government agency. It aggregates public programs and partner offers so you can explore potential resources.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">Will I qualify for assistance?</AccordionTrigger>
                <AccordionContent>
                  There are no guarantees. This process helps identify programs that you may be eligible for — final eligibility is determined by the program or partner.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">Will I be contacted after I click?</AccordionTrigger>
                <AccordionContent>
                  You may receive emails, calls, or texts from partners who can provide information or next steps about available resources.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">Does it cost anything to check?</AccordionTrigger>
                <AccordionContent>
                  There is no cost to begin the eligibility check. You are only exploring options and information.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">What information is required?</AccordionTrigger>
                <AccordionContent>
                  You'll answer a few short questions when you continue. All data is handled per our Privacy Policy.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12" id="privacy">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#privacy" className="hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-foreground transition-colors">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">About</h3>
              <p className="text-sm text-muted-foreground">
                Find Resources USA — independent platform that aggregates public programs and partner offers to help users explore local assistance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <p className="text-sm text-muted-foreground">
                For accessibility or questions:
              </p>
              <a
                href="mailto:support@findresourcesusa.com"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                support@findresourcesusa.com
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-8">
            <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
              Not affiliated with any government agency. Information provided for general guidance only. By clicking the button you agree you may be contacted about relevant programs and offers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
