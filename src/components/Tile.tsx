import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface Props {
    icon: number
    title: string
}

export default function Tile(props:Props) {
    return ( 
        <div className='px-10 flex flex-col items-center text-center py-10'>
            <div className='border border-black border-opacity-20 rounded-full aspect-square flex items-center justify-center p-2'>
                <Image src={'/icon/icon'+props.icon+'.png'} alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: 'auto', height: '30px' }} 
                ></Image>
            </div>
           <h3 className='py-4'>{props.title}</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dui turpis, cursus eget orci amet aliquam congue semper. Etiam eget ultrices risus nec tempor elit.</p>
        </div>
    )
  }
  