export function HomePost({title, content}){
    return(
        <section className="bg-purple-400 rounded-lg w-60 h-80 mt-4 shadow-xl border-1 border-black text-center hover:shadow-sm duration-300 hover:bg-yellow-200">
                <h3 className="font-bold pt-2">{title}</h3>
                <p className="px-4 text-gray-700">
                    {content}
                </p>
        </section>
    )
}