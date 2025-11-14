import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Check Eligibility for Local Assistance | Find Resources USA',
  description: 'Begin a quick check to explore programs and resources that may support your household needs. Independent platform aggregating public resources and partner offers.',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <!-- Default Statcounter code for aidnow.us
        https://aidnow.us/ -->
        <script type="text/javascript">
        var sc_project=13183265; 
        var sc_invisible=1; 
        var sc_security="c683260e"; 
        </script>
        <script type="text/javascript"
        src="https://www.statcounter.com/counter/counter.js"
        async></script>
        <noscript><div class="statcounter"><a title="Web Analytics
        Made Easy - Statcounter" href="https://statcounter.com/"
        target="_blank"><img class="statcounter"
        src="https://c.statcounter.com/13183265/0/c683260e/1/"
        alt="Web Analytics Made Easy - Statcounter"
        referrerPolicy="no-referrer-when-downgrade"></a></div></noscript>
        <!-- End of Statcounter Code -->
      </body>
    </html>
  )
}
