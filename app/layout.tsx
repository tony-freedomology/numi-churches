import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tony-freedomology.github.io/numi-churches"),
  title: {
    default: "Numi for Churches | Shepherd your flock beyond Sunday",
    template: "%s | Numi for Churches",
  },
  description:
    "Numi is an SMS discipleship companion for pastors and church leaders, helping congregations apply Sunday sermons all week.",
  openGraph: {
    title: "Numi for Churches | Shepherd your flock beyond Sunday",
    description:
      "Numi is an SMS discipleship companion for pastors and church leaders, helping congregations apply Sunday sermons all week.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/images/hero-monday.png",
        width: 1200,
        height: 630,
        alt: "Numi for Churches discipleship companion",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Numi for Churches | Shepherd your flock beyond Sunday",
    description:
      "Numi is an SMS discipleship companion for pastors and church leaders, helping congregations apply Sunday sermons all week.",
    images: ["/images/hero-monday.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, "font-sans")}>{children}</body>
    </html>
  );
}
