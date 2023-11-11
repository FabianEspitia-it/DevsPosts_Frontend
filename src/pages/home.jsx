import { NavBar } from "../components/navbar"
import { Logo } from "../assets/image"
import { HomePost } from "../components/home_posts"

export function Home(){
    return(
        <>
            <header>
                <NavBar/>
            </header>

            <main className="flex justify-between font-source-code-pro">
                <section className="mt-4 ml-4">
                    <h1 className="font-bold inline-block text-7xl text-purple-600 ">DevsPosts</h1> 
                    <p className="text-2xl text-gray-700 font-bold pt-2">
                    Welcome to DevsPosts, where you will find ideas, new learnings, and more! Explore a diverse range of programming concepts, stay updated on the latest tech trends, and connect with a vibrant community of developers eager to share their knowledge.    
                    </p>
                    <section className="flex flex-row gap-6">
                        <HomePost title= "Django is awesome" content= "Django is indeed an extraordinary framework that continues to captivate developers with its versatility and robust features. Whether you're building a complex web application or simple, Django provides an elegant and efficient solution." />
                        <HomePost title="React is awesome" content="React is truly an exceptional JavaScript library that has revolutionized the way we build user interfaces. Its declarative syntax, component-based architecture, etc. Make it a powerful tool for creating web applications"/>
                        <HomePost title="Software is awesome" content="Software is truly awesome, serving as the backbone of our digital age. From powering the devices we use daily to driving complex systems that streamline our lives, software plays an indispensable role. "/>
                    </section>
                </section>
                <figure className="flex justify-end">
                        <Logo></Logo>    
                </figure>               
                            
            </main>
        </>
        
    )       
    
}