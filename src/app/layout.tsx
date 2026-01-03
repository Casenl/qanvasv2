import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const titilliumWeb = Titillium_Web({
    subsets: ['latin'],
    weight: ['200', '300', '400', '600', '700', '900']
})

export const metadata: Metadata = {
    title: 'Qanvas v2',
    description: 'Business Architecture Canvas',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn(titilliumWeb.className, "antialiased min-h-screen")}>{children}</body>
        </html>
    )
}
