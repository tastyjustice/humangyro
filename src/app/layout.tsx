import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

// -----------------------------------------------------------------------------
// Site-wide metadata
// Vercel and search engines read this automatically.
// -----------------------------------------------------------------------------
export const metadata: Metadata = {
  title: {
    default: "Human Gyroscope | Thrilling Rides for Events",
    template: "%s | Human Gyroscope",
  },
  description:
    "Rent the Human Gyroscope for your next event — corporate parties, festivals, birthdays, and more. Serving the Bay Area.",
  keywords: ["human gyroscope", "gyroscope rental", "event rides", "bay area"],
  openGraph: {
    siteName: "Human Gyroscope",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

// -----------------------------------------------------------------------------
// RootLayout wraps every page.
// Think of it like a Spring interceptor that injects header/footer into every
// response — except it's just a React component.
// -----------------------------------------------------------------------------
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
