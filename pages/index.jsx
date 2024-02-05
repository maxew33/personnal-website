import { useEffect} from 'react'
import Hero from '@/components/homePage/hero/Hero'
import About from '@/components/homePage/about/About'
import Testimonials from '@/components/homePage/testimonials/Testimonials'
import Conclusion from '@/components/conclusion/Conclusion'

import { useWindowSize} from '@react-hook/window-size'

export default function Home() {

    const [width, height] = useWindowSize()

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
            <Hero height={height} width={width}/>
            <About height={height}/>
            <Testimonials />
            <Conclusion />
        </main>
    )
}
