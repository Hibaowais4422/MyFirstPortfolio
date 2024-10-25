import Navbar from '../components/header';
import { SiNextdotjs } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="relative p-1 bg-yellow-300 flex-grow flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="relative  z-10"> 
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="z-10 relative text-center  flex-grow flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mt-6 text-black font-serif">About Me</h1>
        <p className="text-lg font-sans  text-black mt-2 max-w-3xl mx-auto">
        My name is <b>HIBA OWAIS</b>, and I am a Frontend developer with a passion for creating creative solutions using modern web technologies. I specialize in frontend development, particularly with React.js and Next.js, where I design dynamic and engaging websites.
        I have strong skills in HTML, CSS, JavaScript,TypeScript and React. Additionally, I have a good understanding of backend technologies like Node.js.
        In the future, I aim to further enhance my skills in full-stack development and take on new challenges. I believe in continuously learning and upgrading my skills every day.
        If you're interested in my work or would like to discuss a project or job opportunity, feel free to reach out.

         </p>
      </div>
     <br />
     <h1 className="text-5xl font-bold text-black font-serif text-center mx-auto">My Skills</h1>
            {/* skill icons  */}
      <div className="flex items-center justify-center mt-8 mb-6 space-x-8 text-6xl">
      <FaHtml5 className="text-orange-600  " />
      <FaCss3Alt className="text-blue-600" />
      <FaJs className="text-yellow-500" />
      <SiTypescript className="text-blue-600" />
      <FaMicrosoft className="text-green-600" />  
      <FaMicrosoft className="text-blue-600" />   
      <SiNextdotjs className="text-black" />
</div>
<Footer/>
</div>
  );
}

export default About;
