export function Login(){
    return (
    <main className="flex flex-col items-center text-center h-screen font-source-code-pro bg-white">
        <a href="/"className="font-bold text-7xl mt-9 text-purple-600 pt-0">DevsPosts</a>
        <form className="flex flex-col items-center justify-center bg-white rounded shadow-lg p-8 w-96 mt-12" action="POST">
            <label className="font-semibold text-xs" htmlFor="usernameField">Email</label>
            <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text"/>
            <label className="font-semibold text-xs mt-3" htmlFor="passwordField">Password</label>
            <input className="h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
            <button className="h-12 px-6 w-64 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-8 rounded font-semibold text-sm hover:text-yellow-300 duration-300">Login</button>
            <a className="h-12 px-6 w-64 pt-3 text-black bg-gradient-to-br from-purple-600 to-purple-500 mt-4 rounded font-semibold text-sm hover:text-yellow-300 duration-300" href="/register">Register</a>
        </form>
    </main>
    )
}