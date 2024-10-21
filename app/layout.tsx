import localFont from "next/font/local";

const pixel = localFont({
  src: [
    {
      path: "./fonts/exepixelperfect.medium.ttf",
      weight: "700",
    }
  ],
  variable: "--font-pixel",
});

export const metadata = {
  title: 'The tech stack quiz',
  description: 'Who wants to be a developer?',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={pixel.variable}>
      <body>{children}</body>
    </html>
  )
}
