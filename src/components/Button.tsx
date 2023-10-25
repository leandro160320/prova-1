export default function Button(props: React.PropsWithChildren) {
   return <button className="">
    {props.children || "Learn More"}
   </button>    
}