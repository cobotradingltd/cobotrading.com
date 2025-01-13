import { type Metadata } from 'next'

import { RootLayout } from '@/components/layout/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - COBO TRADING',
    default: 'COBO TRADING - Professional Trading Company Based in Hong Kong',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full bg-neutral-950 text-base antialiased"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
