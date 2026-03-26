import './globals.css'

export const metadata = {
  title: 'Kashif Mehmood — Full Stack Developer',
  description: 'Full Stack Web Developer | MERN Stack | Open to Junior Roles & Internships',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}