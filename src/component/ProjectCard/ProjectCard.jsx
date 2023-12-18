import { Link } from 'react-router-dom';
import './Project.css';
const ProjectCard = (props) => {
    console.log(props);
    return ([
        <div key={2223}>
            <div id="container" className='w-[320px] h-[500px] lg:w-[645px]  lg:h-[300px]  flex lg:flex-row flex-col-reverse  md:gap-5 sm:gap-10  shadow-md'>
                <div className="product-details w-full lg:w-[50%] max-h-[300px] flex flex-col lg:p-3 pb-4 gap-5 px-2">
                    <h1 className='font-sen font-bold text-[18px] lg:text-[25px] text-left'>{props.title}</h1>
                    <p className=" font-sen text-justify  scroll-smooth max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#cecece]">
                        {props.desc}
                    </p>
                    <Link to={props.code} >
                        <button className='bg-[#cecece] text-white w-fit p-2 rounded-md font-sen text-xl hover:bg-gray-400'>
                            <div className='flex gap-1 items-center justify-center '>
                                code
                                <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' width="32" height="32" viewBox="0 0 32 32" id="right-arrow"><path d="M13.8 24.196a1 1 0 0 0 1.414 0L21.7 17.71a.992.992 0 0 0 .292-.71.997.997 0 0 0-.292-.71l-6.486-6.486a1 1 0 0 0-1.414 1.414L19.582 17 13.8 22.782a1 1 0 0 0 0 1.414z"></path></svg>
                            </div>
                        </button>
                    </Link>
                </div>
                <div className="product-image max-w-[374px] lg:w-[47%] ">
                    <img
                        src={props.src}
                        alt="demo image"
                        loading='lazy'
                    />
                    <div className="info font-sen  text-white text-left ">
                        <h2 className='font-sen font-bold text-left'>TECHNOLOGIES</h2>
                        <ul className=' overflow-scroll scroll-smooth pl-2 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-[1px] [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#cecece]'>
                            <li>
                                {
                                    props.tech.map((item,index)=><li key={index}>{item}</li>)
                                }
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    ])
}
export default ProjectCard;