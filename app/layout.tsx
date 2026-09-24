import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WayMart Careers — კარიერა SOCAR-ის სადგურებთან",
  description:
    "თანამედროვე კარიერის გვერდი WayMart-ის გუნდისთვის: გარემო, პირობები, ლოკაციები, პროდუქტი და განაცხადის მარტივი გზა.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ka">
      <body className="antialiased">{children}</body>
    </html>
  );
}

