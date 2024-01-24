import { useEffect} from 'react'
import Hero from '@/components/homePage/hero/Hero'
import About from '@/components/homePage/about/About'
import Testimonials from '@/components/homePage/testimonials/Testimonials'
import Conclusion from '@/components/conclusion/Conclusion'

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
