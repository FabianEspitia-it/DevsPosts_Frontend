export function NavBar({to1, title1, action, to2, title2, to3, title3}){
   return(
    <nav className="bg-purple-600 text-white font-bold h-9 font-source-code-pro text-lg">
        <ul className="flex flex-row gap-x-64 justify-center pt-1">
            <li>
                <a href={to1} onClick={action} className="hover:text-yellow-200 duration-300">{title1}</a>
            </li>

            <li>
                <a href={to2} className="hover:text-yellow-200 duration-300 ">{title2}</a>
            </li>

            <li>
                <a href={to3} className="hover:text-yellow-200 duration-300">{title3}</a>
            </li>
        </ul>

    </nav>
   )
}