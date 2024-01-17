import { useEffect} from 'react'
import Hero from '@/components/homePage/Hero'
import About from '@/components/homePage/About'
import Testimonials from '@/components/homePage/Testimonials'
import Conclusion from '@/components/homePage/Conclusion'

import { useWindowHeight } from '@react-hook/window-size'

export default function Home() {

    const height = useWindowHeight()

    useEffect(() => {
        console.log(`
_                       
|_)  _   _  o  _       _ 
|_) (_) | | | (_) |_| |  
           _|            
     \\_________/
     
`)
    }, [])

    return (
        <main className="home-main">
            <Hero height={height}/>
            <About height={height}/>
            <Testimonials />
            <Conclusion />
        </main>
    )
}
