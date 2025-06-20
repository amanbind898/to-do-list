"use client";
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from "next-themes";

export default function AuthSessionProvider({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
}
