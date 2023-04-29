"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { darkTheme } from "./theme/themes"
import { ThemeProvider, CssBaseline } from "@mui/material"

const inter = Inter({ subsets: ['latin'] })
/*

export const metadata = {
  title: 'Interview Request',
  description: 'Teacher Interview Request App',
}
*/

export default function RootLayout({ children,}: {
  children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="keywords" content="interview, request" />
        <meta name="author" content="Mr. Coxall" />
        <meta name="description" content="Teacher Interview Request App" />
        <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
        <link rel="manifest" href="site.webmanifest" />
        <title>Interview Request</title>
      </head>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  )
}
