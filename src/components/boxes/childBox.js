const ChildBox = ({headline,value}) => {
    return(
        <div className='flex flex-col bg-[#0F182B] md:px-4 px-1'>
            <div className="font-semibold text-white md:text-2xl md:pt-4 pt-1">
                {headline}
            </div>

            <div className="font-bold text-white md:text-3xl md:py-4 py-1">
                {value}
            </div>
        </div>
    )
}

export default ChildBox