import Image from 'next/image'

interface Props {
    header?: string
    img: string;
    children: React.ReactNode
}

export default function Tile(props:Props) {
    return ( 
        <div>
            <div>
                {props.header ? <h1>UTF</h1> : <h2>{props.header}</h2>}
                <p>props</p>
            </div>
            <Image src={props.img} alt="" width={0} height={0}></Image>
        </div>
    )
  }
  