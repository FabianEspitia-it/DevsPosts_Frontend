export function HomePost({title, content}){
    return(
        <section className="bg-purple-500 rounded-lg w-60 h-80 mt-4 shadow-xl border-1 border-black text-center hover:shadow-sm duration-300 hover:bg-yellow-300">
                <h3 className="font-bold pt-2">{title}</h3>
                <p className="px-4">
                    {content}
                </p>
        </section>
    )
}