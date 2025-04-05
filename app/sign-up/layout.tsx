import "@/app/globals.css";
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
export const runtime = process.env.NEXT_PUBLIC_RUNTIME || 'edge';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
