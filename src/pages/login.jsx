import React from "react"

import { useState } from "react"

import { useNavigate } from "react-router-dom";

export function Login(){

    const [email, setEmail] = useState("")
    const [userpassword, setUserPasword] = useState("")
    const navigate = useNavigate()
    const [showErrorToast, setShowErrorToast] = useState(false);

    async function sendData() {

        event.preventDefault();

        let data = {
            "email": email,
            "userpassword": userpassword
        }
        try {
            const response = await fetch("http://127.0.0.1:8000/login/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (response.status === 202) {
                const responseData = await response.json();
                localStorage.setItem("user_token", responseData.token)
                return navigate("/posts")

            } else {
                alert("Invalid credentials")
            }
        } catch (error) {
            console.error("Error during login:", error);
        }
    }


    return (
    <main className="flex flex-col items-center text-center h-screen font-source-code-pro bg-white">
        <a href="/"className="font-bold text-7xl mt-9 text-purple-600 pt-0">DevsPosts</a>
        <form className="flex flex-col items-center justify-center bg-white rounded shadow-lg p-8 w-96 mt-12" onSubmit={sendData}>
            <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
            <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
            <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="userpassword" required value={userpassword} onChange={(e) => setUserPasword(e.target.value)} />
            <button className="h-12 px-6 w-64 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-8 rounded font-semibold text-sm hover:text-yellow-300 duration-300">Login</button>
            <a className="h-12 px-6 w-64 pt-3 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-4 rounded font-semibold text-sm hover:text-yellow-300 duration-300" href="/register">Register</a>
        </form>
    </main>
    )
}