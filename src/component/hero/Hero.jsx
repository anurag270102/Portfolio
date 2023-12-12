/* eslint-disable react/no-unescaped-entities */
import './hero.css';
const Skill = () => {
    return ([
        <div key={1212}>
            <div className="flex flex-col lg:flex-row mt-10 w-[9/12] lg:px-10 px-5  ">
                {/* right */}
                <div className=" flex flex-col gap-5 item-center justify-center text-gray-800 lg:pl-9 ">
                    <h1 className="text-[20px] md:text-3xl lg:text-[33px] font-bold font-PlayfairDisplaySC mb-2">I'm <span className=" text-transparent bg-clip-text bg-gradient-to-br from-[#31bcbe] to-sky-900">Anurag Dalsaniya</span></h1>
                    <h2 className="text-xl md:text-4xl lg:text-4xl font-bold  typewriter"></h2>
                    <div className="text-lg mb-4">
                        <p className="mb-2 text-gray-800 w-full text-[15px] lg:text-[17px] font-sen">An  adept Full Stack Developer specializing in the <span className='italic font-bold'>MERN stack</span>.</p>
                         {/* <p className="mb-2 text-gray-300  text-[15px] lg:text-[20px]">Proficient in crafting responsive user interfaces with React, I excel in server-side development using Node.js and Express.js.</p> */}
                    </div>
                </div>
                {/* left */}
                <div className="flex mx-auto items-end justify-between ">
                    <img src="/assets/Bookwor_s_Delight.-removebg-preview.png" alt="cover image" />
                </div>
            </div>

        </div>
    ])
}
export default Skill;