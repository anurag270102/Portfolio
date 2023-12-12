
import Hero from '../../component/hero/Hero';
import Skill from '../../component/skill/Skill';
import About from '../../component/about/About';
import Project from '../../component/project/Project';
import Contact from '../../component/contact/Contact';
import './home.css';
const Home = () => {
    return ([
        <div key={2323}>
            <div className='app rounded-[30px]' id='hero'>
                <Hero></Hero>
            </div>
            <div id='skill'>
                <Skill></Skill>
            </div>
            <div id='about'>
                <About></About>
            </div>
            <div id='project'>
                <Project></Project>
            </div>
            <div id='contact'>
                <Contact></Contact>
            </div>
        </div>
    ]);
}
export default Home;