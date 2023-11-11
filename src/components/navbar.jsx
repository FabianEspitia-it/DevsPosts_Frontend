export function NavBar(){
   return(
    <nav className="bg-purple-600 text-white font-bold h-9 font-source-code-pro text-lg">
        <ul className="flex flex-row gap-x-64 justify-center pt-1">
            <li>
                <a href="/register" className="hover:text-yellow-300 duration-300">Register</a>
            </li>

            <li>
                <a href="" className="hover:text-yellow-300 duration-300 ">DevsPosts</a>
            </li>

            <li>
                <a href="/login" className="hover:text-yellow-300 duration-300">Login</a>
            </li>
        </ul>

    </nav>
   )
}