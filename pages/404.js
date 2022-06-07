import Link from "next/link";
import { useEffect } from "react";
import {useRouter} from 'next/router'

const NotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            console.log('ran');
            router.push('/');
        },3000)
    },[])

    return (  
        <div  className="not-found">
            <h1>Oooops...</h1>
            <h2>That page cannot found.</h2>
            <p>Go back to the <Link  href="/"><a>HomePage</a></Link> </p>
        </div>
    );
}
 
export default NotFound;
<div  className="not-found">
    <h1></h1>
</div>