import '@/styles/globals.css'
import Layout from '@/components/layout'
import { useEffect } from 'react'
import { Work_Sans, Karla } from 'next/font/google'

const worksans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-worksans',
  weight: ['400','500','600','700'],
})

const karla = Karla({
  subsets: ['latin'],
  variable: '--font-karla',
  weight: ['500', '700', '800'],
})

export default function App({ Component, pageProps }) {
  // dark/light mode check
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, []);

  return (
    // <ThemeProvider enableSystem={true} attribute='class'>
      <main className={[karla.className, worksans.className]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    // </ThemeProvider>
  )
}
