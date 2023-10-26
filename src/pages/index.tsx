import Image from 'next/image'
import Tile from '../components/Tile'
import { Source_Sans_3 } from 'next/font/google'
import Card from '../components/Card'
import Social from '../components/Social'
const sans = Source_Sans_3({ subsets: ['latin'], weight: ["300", '700'] })

export default function Home() {
  return <div className={` bg-white text-black min-h-screen px-24 ${sans.className} font-light max-w-[1440px]`}>
    <main>
      <section className='mb-24'>
        <Card img='/image/IMAGE1.png' invert buttonText="GET STARTED" >
          A (modular, highly tweakable) responsive one-page template designed by UTFPR  and released for free under the <u>Creative Commons.</u>
        </Card>
        <Card header='Magna etiam feugiat' img='/image/IMAGE2.png'/>
        <Card header='Tempus adipiscing' img='/image/IMAGE3.png' invert/>
        <Card header='Pharetra etiam nulla' img='/image/IMAGE4.png'/>
      </section>
      <section className='text-center'>
        <h2 className='mb-4'>Ipsum sed consequat</h2>
        <p className='mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum.</p>
        <div className='grid grid-cols-3 divide-x-2 divide-y-2 border-r-2 border-b-2 mx-10'>
          <Tile icon={1} title='Lorem'></Tile>
          <Tile icon={2} title='Ipsum'></Tile>
          <Tile icon={3} title='Dolor'></Tile>
          <Tile icon={4} title='Amet'></Tile>
          <Tile icon={5} title='Magna'></Tile>
          <Tile icon={6} title='Tempus'></Tile>
          <Tile icon={7} title='Aliquam'></Tile>
          <Tile icon={8} title='Elit'></Tile>
          <Tile icon={9} title='Morbi'></Tile>
          <Tile icon={10} title='Turpis'></Tile>
          <Tile icon={11} title='Ultrices'></Tile>
          <Tile icon={12} title='Risus'></Tile>
        </div>
      </section>
    </main>
    <footer className='flex flex-col mx-auto justify-center items-center py-32'>
      <div className='flex space-x-4 py-6'>
        <Social icon={1}></Social>
        <Social icon={2}></Social>
        <Social icon={3}></Social>
        <Social icon={4}></Social>
        <Social icon={5}></Social>
      </div>
      <p className='font-bold text-sm'>© Untitled. Design: ALUNOS WEB.</p>
    </footer>
  </div>
}
