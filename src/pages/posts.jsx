import { React, useState } from "react"
import { useEffect } from "react"
import { NavBar } from "../components/navbar"

export function Posts(){

    const [posts, usePosts] = useState([])
    const [users, useUsers] = useState([])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/posts/')
        .then(response => response.json())
        .then(data => usePosts(data))
        
    }, [])

    useEffect(() => {
        fetch('http://127.0.0.1:8000/user-info/')
        .then(response => response.json())
        .then(data => useUsers(data))
        
    }, [])






    return (
        <>
        <header>
            <NavBar to1={"/"} title1={"Logout"} to2={"/posts/create"} title2={"CreatePost"} to3={"/user"} title3={"Profile"}/>
        </header>
        
        <main className="font-source-code-pro flex justify-between">
        <aside className="text-center bg-purple-500 w-60">
                <h1 className="font-bold">Most liked posts</h1>
                {posts.map(function(post){
                    return(
                        <section className="bg-purple-200 mt-3 mx-3 rounded-lg hover:bg-purple-50 duration-100">
                            <p className="font-bold">{post.title}</p>
                        </section>
                    )
                })}
            </aside>
            <section className="flex flex-col items-center justify-center">
                {posts.map(function(post){
                    return(
                        <section className="bg-white rounded-lg shadow-lg text-center w-96 mt-7 hover:shadow-sm duration-300">
                            <h1 className="font-bold">{post.title}</h1>
                            <p>{post.content}</p>
                        </section>
                    );
                })}
            </section>
            <aside className="text-center bg-purple-500 w-60">
                <h1 className="font-bold">Meet devs</h1>
                
                {users.map(function(user){
                    return(
                        <section className="bg-purple-200 mt-3 mx-3 rounded-lg hover:bg-purple-50 duration-100">
                            <p className="font-bold"> <span>UserName:</span> {user.username}</p>
                            <p> <span>Country:</span> {user.country}</p>
                            <p> <span>Email:</span> {user.email}</p>
                        </section>
                    )
                })}
            </aside>
        </main>
    </>
    )
}