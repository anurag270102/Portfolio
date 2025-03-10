import ProjectCard from "../ProjectCard/ProjectCard";
const Project = () => {
  const Portfalio_tech = ['ReactJS', 'EmailJS', 'TailwindCSS'];
  const Weather_tech = ['HTML', 'CSS', 'JS'];
  const Simon_tech = ['HTML', 'CSS', 'JQuery', 'JS'];
  const Drumkit_tech = ['HTML', 'CSS', 'JS'];
  const Fiverrclone_tech = ['MERN', 'SCSS', 'Cloudinary', 'Stripe'];
  const CodeEditor_tech=['ReactJS','Socket.io','NodeJS','Codemirror','CSS'];
  const Blogblaze_tech=['MERN','Cloudinary','TailwindCSS'];
  const Expressume_tech=['ReactJS','React Query','Firebase','TailwindCSS'];
  return ([
    <div key={1212}>
      <h2 className="font-PlayfairDisplaySC font-bold mx-auto items-center text-center text-black text-4xl mt-5 ">Projects</h2>
      <div className="flex flex-wrap gap-5 w-[10/12] md:p-5 py-4 px-3 md:px-0 lg:px-0  items-center justify-center">
        <ProjectCard
          title={'Fiverr Clone'}
          desc={`The "Fiverr Clone" project, built on a modern technology stack that MERN Stack, is designed to provide freelancers and clients with a secure, user-friendly freelance marketplace. Its key features encompass seamless communication, a diverse range of freelance services, gig creation, secure payment processing, realtime work management, instant notifications, and a one-client review policy.`}
          src={'/assets/fiverr.png'}
          code={'https://github.com/anurag270102/fiverr-clone'}
          tech={Fiverrclone_tech}
        ></ProjectCard>
        <ProjectCard
          title={'Blog Blaze'}
          desc={`BlogBlaze is a dynamic blogging platform built with the MERN stack and enhanced with Cloudinary for seamless image management, Tailwind CSS for beautiful and responsive design, and Date-fns for efficient date manipulation.`}
          src={'assets/Colorful Modern Concept Free B Logo.png'}
          code={'https://github.com/anurag270102/blogblaze'}
          tech={Blogblaze_tech}
        ></ProjectCard>

        <ProjectCard 
        title={'Code Stream'}
        desc={`Stream Code is a powerful and intuitive code editor application designed for seamless real-time collaboration among developers. Built with cutting-edge technologies including React, Node.js, Express.js, Socket.io, and CSS, Stream Code enables multiple users to code together simultaneously, making it ideal for remote teams, pair programming sessions`}
        src={'/assets/codeeditor.png'}
        code={'https://github.com/anurag270102/Code-Editor'}
        tech={CodeEditor_tech}
        ></ProjectCard>

        <ProjectCard 
        title={'Expressume'}
        desc={'Expressume is a web-based resume builder created to streamline the resume-making process for students, professionals, and job seekers. Leveraging React.js, React Query, and Tailwind CSS, the platform offers a highly responsive and intuitive interface with real-time data management powered by Firebase.'}
        src={'/assets/Expreesume.png'}
        code={'https://github.com/anurag270102/Expressume'}
        tech={Expressume_tech}
        ></ProjectCard>

        <ProjectCard
          title={'Portfalio Website'}
          desc={'Crafted with precision using React and Tailwind CSS, my portfolio website showcases a seamless blend of modern design and functionality. With a user-friendly interface and dynamic animations, it not only reflects my technical expertise but also integrates seamlessly with EmailJS for efficient communication. Explore my work and skills in a visually appealing and interactive environment'}
          src={'/assets/portfalio.png'}
          code={'https://github.com/anurag270102/Portfolio'}
          tech={Portfalio_tech}
        ></ProjectCard>
        <ProjectCard
          title={'Simon Game'}
          desc={`The Simon Game is a classic electronic memory game designed to test and improve a player's memory and concentration skills. This project report outlines the development process, implementation, and features of the web-based Simon Game using HTML, CSS, and JavaScript. The game is responsive, ensuring a seamless user experience on various devices.`}
          src={'/assets/simon.jpeg'}
          code={'https://github.com/anurag270102/Simon_game'}
          tech={Simon_tech}
        ></ProjectCard>
        <ProjectCard
          title={'Weather Forcast'}
          desc={'The Weather API Webpage project is a dynamic web application that fetches weather data from an external API and displays it to users.The webpage features a background change based on the user’s weather conditions, enhancing the user experience'}
          src={'/assets/weather.png'}
          code={'https://github.com/anurag270102/WeatherApi'}
          tech={Weather_tech}
        ></ProjectCard>
        <ProjectCard
          title={'DRUM-kit'}
          desc={`The Drum Kit project is an interactive web application designed to simulate a digital drum set. Built using HTML, CSS, and JavaScript, this project aims to provide users with an enjoyable drumming experience while ensuring responsive design for seamless usage across various devices.`}
          src={'/assets/drumkit.png'}
          code={'https://github.com/anurag270102/DRUM-kit'}
          tech={Drumkit_tech}
        ></ProjectCard>
      </div>
    </div>
  ])
}
export default Project;