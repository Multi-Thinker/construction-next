import '../src/styles.css';

export const metadata = {
  title: 'Home Remodeling Contractor South Florida | Top Construction',
  description: 'Top Construction and Design is a licensed, BBB-accredited remodeling contractor serving Fort Lauderdale, Broward, Miami-Dade, and Palm Beach.',
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }) {
  return <html lang="en-US" suppressHydrationWarning><body>{children}</body></html>;
}
