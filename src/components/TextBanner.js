const TextBanner = ({subtitle, title}) => {
    return <div className="h-[18em] w-full bg-[#A0D9FF] flex flex-col justify-center pt-6 cursor-default pl-[5em]">
        <h3 className="text-zinc-900 text-xl font-medium">{subtitle}</h3>
        <h1 className="text-zinc-900 text-[4rem] font-medium">{title}</h1>
    </div>
}

export default TextBanner