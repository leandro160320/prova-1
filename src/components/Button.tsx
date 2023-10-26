export default function Button(props: React.PropsWithChildren) {
   return <button className="border border-black rounded-full px-8 py-3">
    {props.children || "Learn More"}
   </button>    
}