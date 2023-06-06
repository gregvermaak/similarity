"use client"

import { FC, ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { SessionProvider } from "next-auth/react"

const clerk_pub_key = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export default Providers
