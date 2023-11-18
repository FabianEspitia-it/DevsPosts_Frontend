import React from "react"

import { useState } from "react"
import { useEffect } from "react";

import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";

export function CreatePost(){

    const [title, setTitle] = useState("")
    const [technology, setTechnology] = useState("")
    const [content, setContent] = useState("")
    const navigate = useNavigate()

    async function sendData() {

        event.preventDefault();

        let data = {
            "title": title,
            "technology": technology,
            "content": content, 
            "user": jwtDecode(localStorage.getItem("user_token")).username
        }
        try {
            console.log(data)
            const response = await fetch("http://127.0.0.1:8000/posts/create-post/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.status === 201) {
                return navigate("/posts")

            } else {
                alert("something wrong")
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("user_token");
    
        if (!token) {
          navigate("/login");
        }
      }, [])

        return (
            <main className="flex flex-col items-center text-center h-screen font-source-code-pro bg-white">
            <h1 className="font-bold text-purple-600 text-5xl mt-5 ">Create your post</h1>
            <form className="flex flex-col items-center justify-center bg-white rounded shadow-lg p-8 mt-5" onSubmit={sendData}>
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <label className="font-semibold text-lg" htmlFor="title">Title</label>
                        <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="flex flex-col mx-4">
                        <label className="font-semibold text-lg" htmlFor="technology">Technology</label>
                        <select className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name="technology" onChange={(e) => setTechnology(e.target.value)} value={technology}>
                            <option value="Django">Django</option>
                            <option value="GO">GO</option>
                            <option value="Python">Python</option>
                            <option value="AI">AI</option>
                            <option value="React">React</option>
                            <option value="JavaScript">JavaScript</option>
                            <option value="Tailwind">Tailwind</option>
                        </select>
                    </div>
                </div>
                <label className="font-semibold text-lg mt-3" htmlFor="content">Content</label>
                <textarea className=" bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" name="content" rows="10" cols="50" value={content} onChange={(e) => setContent(e.target.value) }></textarea>
                <div className="flex">
                    <button className="h-12 px-6 w-64 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-8 rounded font-semibold text-sm hover:text-yellow-300 duration-300">Create</button>
                    <a href="/posts" className="h-12 px-6 w-full md:w-64 pt-3 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-8 mx-4 rounded font-semibold text-sm hover:text-yellow-300 duration-300"> Posts </a>
                </div>
            </form>
        </main>
        )



   

}