import Banner from '../assets/images/banner.png'
const HeroBanner = () => {
  return (
    <div className=' min-h-screen  w-full' >
    <div className="flex  flex-col justify-center md:justify-start items-center gap-6 md:flex-row" >
        <div className="flex flex-col px-4 items-center md:items-start sm:px-20  mt-24 text-center sm:text-start sm:mt-32 ">
            <span className="text-3xl leading-normal font-mono font-semibold text-red-500 " >
            Fitness Club
            </span>
            <span className="font-extrabold text-[36px] sm:text-[44px]" >
                Sweat,Smile <br />
                and repeat
            </span>
            <span className="text-2xl text-black opacity-60">
                check out our most effective excercises
            </span>
            <button className="p-4 w-3/4 sm:w-1/2 mt-8 text-[20px] rounded-sm bg-red-700 text-white font-bold shadow-gray-300 shadow-lg"  >Explore</button>
        </div>
            
            <span className='xl:text-[180px] hidden xl:inline absolute -bottom-5 left-[10%] opacity-15 text-gray-700 font-bold' >EXCERCISES</span>
        <div className='z-10'>
            <img src={Banner} className='max-w-[500px] overflow-hidden xl:w-[600px]  hidden lg:block xl:right-24  absolute top-0' alt="" />
            <img src={Banner} className='max-w-[300px] h-[400px]  lg:hidden' alt="" />
        </div>
    </div>
    </div>
  )
}

export default HeroBanner
