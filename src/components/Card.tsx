import Image from 'next/image'
import Button from './Button'

interface Props {
    img: string;
    header?: string
    buttonText?: string
    invert?: boolean
    children?: React.ReactNode
}

export default function Card(props:Props) {
    return ( 
        <div className='grid grid-cols-1 md:grid-cols-2 xl:gap-36 text-center md:text-left'>
            <Image src={props.img} alt="" width={0} height={0} sizes="100vw" 
            className={`w-full h-auto aspect-square object-cover ${props.invert && 'md:order-2'}`}></Image>
            <div className='py-20 md:py-10 px-5 flex items-center'>
              <div className=''>
                {props.header ? <h2 className='tracking-widest md:tracking-normal'>{props.header}</h2> : <h1 className='tracking-widest md:tracking-normal'>UTF</h1>}
                <p className='mt-5 mb-8'>{props.children || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus, pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum dolor sit amet."}</p>
                <Button>{props.buttonText || 'LEARN MORE'}</Button>
              </div>
            </div>
        </div>
    )
  }
  