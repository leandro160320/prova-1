import Image from 'next/image'
import Tile from '../components/Tile'
import { Source_Sans_3 } from 'next/font/google'
import Card from '../components/Card'
import Social from '../components/Social'
const sans = Source_Sans_3({ subsets: ['latin'], weight: ["300", '700'] })

export default function Home() {
  return <div className={` bg-white text-black min-h-screen px-24 ${sans.className} font-light max-w-[1440px]`}>
    <main>
      <section>
      </section>
      <section>
      </section>
    </main>
    <footer>
    </footer>
  </div>
}
