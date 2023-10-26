import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface Props {
    icon: number
}

export default function Tile(props:Props) {
    return ( 
        <a className='rounded-full border border-black p-0.5 border-opacity-20 aspect-square w-full flex items-center justify-center'>
            <Image src={'/icon/social'+props.icon+'.png'} alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: 'auto', height: '30px' }} 
            ></Image>
        </a>
    )
  }
  