import type { Metadata } from 'next';
import { Prompt } from 'next/font/google';
import './globals.css';

const prompt = Prompt({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-prompt',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: {
    default: 'ไข่ต้มแก่น เจ๊ทุเรียน หลวงพ่อโสธร',
    template: '%s | ไข่ต้มแก่น เจ๊ทุเรียน หลวงพ่อโสธร'
  },
  description:
    'ไข่ต้มแก่นและชุดถวายคุณภาพดี ส่งทั่วไทย พร้อมบริการสำหรับงานบุญ การถวาย และของฝากพรีเมียม',
  keywords: [
    'ไข่ต้มแก่น',
    'ไข่ต้มถวาย',
    'หลวงพ่อโสธร',
    'ของถวาย',
    'ของฝาก',
    'ส่งทั่วไทย'
  ],
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'ไข่ต้มแก่น เจ๊ทุเรียน หลวงพ่อโสธร',
    description:
      'Landing page สำหรับไข่ต้มแก่นและชุดถวาย โฟกัส SEO และประสบการณ์มือถือ',
    type: 'website',
    locale: 'th_TH',
    url: 'https://example.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={prompt.variable}>
      <body className={prompt.className}>{children}</body>
    </html>
  );
}
