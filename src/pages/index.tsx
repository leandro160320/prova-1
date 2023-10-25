import Image from 'next/image'
import { Source_Sans_3 } from 'next/font/google'

const sans = Source_Sans_3({ subsets: ['latin'] })

export default function Home() {
  return <>
    <main
      className={`flex flex-col min-h-screen items-center justify-between p-24 ${sans.className}`}
    >
    <section>
    </section>
    <section>
      
    </section>
    </main>
    <footer>

    </footer>
  </>
}
