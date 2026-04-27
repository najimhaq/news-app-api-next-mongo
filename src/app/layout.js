import './globals.css';
import { Montserrat, Poppins } from 'next/font/google';
import { HeroThemeProvider } from './provider/HeroThemeProvider';
import ToastProvider from './provider/ToastProvider';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});
export const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: 'Dragon News ',
  description: 'Your one-stop destination for the latest news and updates.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={` ${poppins.variable} ${montserrat.variable} min-h-screen flex flex-col bg-background text-foreground`}
      >
        <HeroThemeProvider>
          <main className='flex-1'>{children}</main>
          <ToastProvider />
        </HeroThemeProvider>
      </body>
    </html>
  );
}
