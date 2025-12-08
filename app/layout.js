import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Toaster } from "sonner";

// Disable automatic preload for the Inter font to avoid unused font preload warnings
const inter = Inter({ subsets: ["latin"], preload: false });

export const metadata = {
  title: "Wealth",
  description: "One Stop Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster richColors />
        <Footer />
      </body>
    </html>
    </ClerkProvider>
  );
}
