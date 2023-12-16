import ProjectCard from "../ProjectCard/ProjectCard";
const Project = () => {
  return ([
    <div key={1212}>
      <h2 className="font-PlayfairDisplaySC font-bold mx-auto items-center text-center text-black text-4xl mt-5 ">Projects</h2>
      <div className="flex flex-wrap gap-5 w-[10/12] md:p-5 py-4 px-3 md:px-0 lg:px-0  items-center justify-center">
        <ProjectCard 
        title={'Fiverr Clone'}
        desc={`The "Fiverr Clone" project, built on a modern technology stack that MERN Stack, is designed to provide freelancers and clients with a secure, user-friendly freelance marketplace. Its key features encompass seamless communication, a diverse range of freelance services, gig creation, secure payment processing, realtime work management, instant notifications, and a one-client review policy.`}
        src={'/assets/Bookwor_s_Delight.-removebg-preview.png'}
        code={'https://github.com/anurag270102/fiverr-clone'}
        ></ProjectCard>
        <ProjectCard 
        title={'Portfalio Website'}
        desc={''}
        src={'/assets/Bookwor_s_Delight.-removebg-preview.png'}
        code={'https://github.com/anurag270102/Portfolio'}
        tech={'[ReactJS,EmailJS,TailwindCSS,]'}
        ></ProjectCard>
        <ProjectCard 
        title={'Simon Game'}
        desc={`The Simon Game is a classic electronic memory game designed to test and improve a player's memory and concentration skills. This project report outlines the development process, implementation, and features of the web-based Simon Game using HTML, CSS, and JavaScript. The game is responsive, ensuring a seamless user experience on various devices.`}
        src={'/assets/Bookwor_s_Delight.-removebg-preview.png'}
        code={'https://github.com/anurag270102/Simon_game'}
        ></ProjectCard>
        <ProjectCard 
        title={'Weather Forcast'}
        desc={'The Weather API Webpage project is a dynamic web application that fetches weather data from an external API and displays it to users.The webpage features a background change based on the user’s weather conditions, enhancing the user experience'}
        src={'/assets/Bookwor_s_Delight.-removebg-preview.png'}
        code={'https://github.com/anurag270102/WeatherApi'}

        ></ProjectCard>
        <ProjectCard 
        title={'DRUM-kit'}
        desc={`The Drum Kit project is an interactive web application designed to simulate a digital drum set. Built using HTML, CSS, and JavaScript, this project aims to provide users with an enjoyable drumming experience while ensuring responsive design for seamless usage across various devices.`}
        src={'/assets/Bookwor_s_Delight.-removebg-preview.png'}
        code={'https://github.com/anurag270102/DRUM-kit'}

        ></ProjectCard>
      </div>
    </div>
  ])
}
export default Project;