import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the YouTube downloader application
export const metadata = {
  title: "YouTube Video Downloader",
  description: "Download your favorite YouTube videos easily and quickly.",
  openGraph: {
    title: "YouTube Video Downloader",
    description: "A simple tool to download YouTube videos in various formats.",
    url: "https://yourwebsite.com", // Replace with your actual URL
    siteName: "YouTube Video Downloader",
    images: [
      {
        url: "https://yourwebsite.com/path/to/image.jpg", // Replace with your image URL
        width: 800,
        height: 600,
        alt: "YouTube Video Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Video Downloader",
    description: "Download your favorite YouTube videos easily and quickly.",
    image: "https://yourwebsite.com/path/to/image.jpg", // Replace with your image URL
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Open Graph Tags */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
