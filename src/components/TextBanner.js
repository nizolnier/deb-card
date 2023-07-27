const TextBanner = ({subtitle, title}) => {
    return <div className="h-[18em] w-full bg-[#A0D9FF] flex flex-col justify-center pt-6 cursor-default lg:pl-[5em] pl-4">
        <h3 className="text-zinc-900 lg:text-xl text-base font-medium">{subtitle}</h3>
        <h1 className="text-zinc-900 lg:text-[4rem] text-[2rem] font-medium">{title}</h1>
    </div>
}

export default TextBanner