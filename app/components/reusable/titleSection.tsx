

export const TitleSection = ({
    firstTitleSpanish,
    secondTitleSpanish,
    firstTitleEnglish,
    secondTitleEnglish,
    subTitleSpanish,
    subTitleEnglish,
    color,
    spanish,
    nightMode
} : {
    firstTitleSpanish: string
    secondTitleSpanish: string
    firstTitleEnglish: string
    secondTitleEnglish: string
    subTitleSpanish: string
    subTitleEnglish: string
    color: string
    spanish: boolean
    nightMode: boolean
}) => {
    return (
        <div>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? subTitleSpanish
                    : subTitleEnglish
                }
            </p>
                
            <h1 className={`${nightMode ? 'text-zinc-300' : 'text-zinc-700'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? firstTitleSpanish : firstTitleEnglish}{" "}
                <span className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
                    {spanish ? secondTitleSpanish : secondTitleEnglish}
                </span>
            </h1>
        </div>
    )
}