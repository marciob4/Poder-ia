import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Poder IA',
  description: 'Sua inteligência artificial avançada para marketing digital.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <main className="min-h-screen bg-gray-50 text-gray-900 p-4">
          {children}
        </main>
      </body>
    </html>
  )
}
