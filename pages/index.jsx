import { useEffect } from 'react'
import Hero from '@/components/homePage/Hero'
import About from '@/components/homePage/About'
import Testimonials from '@/components/homePage/Testimonials'
import Conclusion from '@/components/homePage/Conclusion'

export default function Home() {
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
            <Hero />
            <About />
            <Testimonials />
            <Conclusion />
        </main>
    )
}
