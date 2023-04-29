"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { darkTheme } from "./theme/themes"
import { ThemeProvider, CssBaseline } from "@mui/material"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interview Request',
  description: 'Teacher Interview Request App',
}

export default function RootLayout({ children,}: {
  children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="interview, request" />
        <meta name="author" content="Mr. Coxall" />
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
