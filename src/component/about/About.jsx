import Education from "../Education/Education";
import Experience from "../Experience/Experience";

const About = () => {
    return ([
        <div key={1212} className="mt-10 w-full flex flex-col justify-center bg-inherit">
            <div className="bg-gradient-to-t from-white to-[#cecece]  p-5 rounded-[30px] w-full">
                <h2 className="font-PlayfairDisplaySC font-bold mx-auto items-center text-center text-black text-4xl mt-5 ">Education</h2>
                <div className="flex flex-row flex-wrap justify-between lg:justify-evenly ">
                    <Education
                        title={'Collage'}
                        time={'OCT 2021 - PRESENT'}
                        per={'9.37 CGPA'}
                        name1={'CHAROTAR UNIVERSITY  '}
                        city={'ANAND,INDIA'}
                    >
                    </Education>
                    <Education
                        title={'Higher Secondary'}
                        time={'JUN 2019 - MAR 2021'}
                        per={'85.61%'}
                        name1={'SHAKTI HIGHER SECONDARY SCHOOL  '}
                        city={'RAJKOT,INDIA'}
                    >
                    </Education>
                    <Education title={'Secondary'}
                        time={'JUN 2017 - MAR 2019'}
                        per={'87.33%'}
                        name1={'SMT. R.M. TILVA MADHYAMIIK VIDHYALAY  '}
                        city={'JAMNAGAR,INDIA'}
                    >
                    </Education>
                </div>
            </div>
            <h2 className="font-PlayfairDisplaySC font-bold mx-auto items-center text-center text-black text-4xl mt-5 ">Experience</h2>

            <div className="bg-white flex flex-row flex-wrap  justify-between lg:justify-evenly">
                
                <Experience
                    name1={'AUGMETIC INFINITE LLP '}
                    time={'MAY 2023 - JUN 2023'}
                    title={'Internship'}
                    city={'AHMEDABAD,INDIA'}
                    tech={'HTML,CSS,JS,REACT JS'}
                    desc={'During my internship, I applied my acquired skills in various technologies, including React JS, HTML5, CSS3, Bootstrap, and NPM, surpassing expectations in both depth and breadth of application. I also extended my proficiency to UI/UX design, incorporating tools like Material UI and utilizing command prompt styling with packages such as chalk.'}>
                </Experience>
            </div>
        </div>
    ])
}
export default About;