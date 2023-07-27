const Info = ({ icon, title, text }) => {
    return <div className="flex justify-between items-center lg:ml-[5em]">
        <div className="flex justify-start items-start my-3">
            <div className="w-[50px] h-[50px] bg-gray-200 rounded-[100px] justify-center items-center lg:mr-6 mr-2 inline-flex">
                <img className="w-[50%]" src={icon} />
            </div>
            <div>
                <h1 className="text-left text-zinc-900 lg:text-lg text-sm font-medium">{title}</h1>
                <p className="text-left text-zinc-900 text-opacity-50 text-sm font-medium">{text}</p>
            </div>
        </div>
    </div>
}

export default Info