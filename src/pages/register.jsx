import React from "react"

import { useState } from "react"

import { useNavigate } from "react-router-dom";


export function Register(){

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [userpassword, setUserPassword] = useState("")
    const [confirmpassword, setConfirmpassword] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const navigate = useNavigate()

    async function SendData(){


        event.preventDefault();

        let data = {
            "username": username,
            "email": email,
            "country": country,
            "phone": phone,
            "userpassword": userpassword,
            "confirmpassword": confirmpassword
        }

        const response = await fetch('http://127.0.0.1:8000/register/', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        if (response.status === 201){
            navigate("/login")
        }else{
            alert("Something wrong")
        }
    }


    return ( 
        <main className="flex flex-col items-center text-center h-screen font-source-code-pro bg-white">
        <a href="/" className="font-bold text-7xl mt-9 text-purple-600 pt-0">DevsPosts</a>
        <form id="form" className="flex flex-col items-center justify-center bg-white rounded shadow-lg p-8" onSubmit={SendData}>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <label className="font-semibold text-xs" htmlFor="usernameField">Username</label>
                    <input  required className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="flex flex-col ml-7">
                    <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
                    <input required className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <label className="font-semibold text-xs mt-1" htmlFor="passwordField">Country</label>
                    <input required className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="flex flex-col ml-7">
                    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Phone</label>
                    <input className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </div>
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
                    <input required className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="userpassword" value={userpassword} onChange={(e) => setUserPassword(e.target.value)} />
                </div>
                <div className="flex flex-col ml-7">
                    <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Confirm Password</label>
                    <input required className="h-12 px-4 w-full bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                </div>
            </div>
            <button className="h-12 px-6 w-full md:w-64 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-8 rounded font-semibold text-sm hover:text-yellow-300 duration-300">Register</button>
            <a className="h-12 px-6 w-full md:w-64 pt-3 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-4 rounded font-semibold text-sm hover:text-yellow-300 duration-300" href="/login">Login</a>
        </form>
    </main>
    )
}