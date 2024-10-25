import Link from 'next/link';
import { SiNextdotjs } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaJs} from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { FaMicrosoft } from 'react-icons/fa';
import { FaInstagram ,FaTwitter,FaFacebookF ,FaWhatsapp,FaTiktok,FaMediumM } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

 const portfolio = () => {
  return (
    <div>
        {/* navbar section */}
    <nav className="bg-black text-white p-2 flex flex-wrap justify-between items-center shadow-yellow-700 shadow-lg ">
       
      
       <h1 className="text-5xl font-bold ">
         <img src={"/logo2.jpg"} alt=" logo" width={80} height={80}/>
       </h1>
       <ul className="flex space-x-8">
         <li className="hover:text-green-500 font-bold "><Link href="/home">Home</Link></li>
         <li className="hover:text-green-500  font-bold"><Link href="/About">About</Link></li>
         <li className="hover:text-green-500  font-bold"><Link href="/Contact">Contact</Link></li>
       </ul>
     </nav>
       
       {/* home section */}

       <section className="h-screen flex items-center justify-between bg-black text-white p-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold">Hello,</h1>
        <h2 className="text-6xl font-bold mt-4">I'm <span className="text-yellow-600">HibaOwais</span></h2>
        <h3 className="text-4xl mt-2">Frontend Developer</h3>
        <p className="mt-4 text-lg text-gray-400">
          I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        </p>
      </div>
      <div>
        {/* Add an image here */}
        <img src="/picme3.jpg" alt="Profile Image" className="rounded-full shadow-sm border-hidden opacity-70 shadow-yellow-500  w-72 h-auto" />
      </div>
      </section>


        {/* About section */}
        
      {/* Main Content */}
      <section className=' bg-yellow-300'>
      <div className="  z-10 relative text-center  flex-grow flex flex-col items-center justify-center">
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

      <div className="flex items-center justify-cente mt-8   space-x-8 text-6xl pl-96">
      <FaHtml5 className="text-orange-600 mb-10   " />
      <FaCss3Alt className="text-blue-600 mb-10" />
      <FaJs className="text-yellow-500 mb-10" />
      <SiTypescript className="text-blue-600 mb-10" />
      <FaMicrosoft className="text-green-600 mb-10" />  
      <FaMicrosoft className="text-blue-600 mb-10" />   
      <SiNextdotjs className="text-black mb-10" />
</div>
</section>
            {/* contact section */}

            <section className="bg-black min-h-screen flex items-center justify-center p-10">
      <div className="bg-yellow-500 p-6 rounded-lg shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-5">Get in Touch</h2>
          <form className="space-y-5">

            <div>
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Your Email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                className="w-full border border-gray-300 p-3 rounded-lg"
                placeholder="Your Message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

        {/*Social Media Icons */}
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-3xl font-bold text-center mb-5">Follow Us</h2>

          {/* Social Media Links */}
          <div className="flex flex-col space-y-5">
            <a href="https://www.Instagram.com/owais-hiba" target="_blank" className="flex items-center space-x-3 text-xl hover:text-pink-700 transition">
              <FaInstagram /> <span>Instagram</span>
            </a>

            <a href="https://www.twitter.com" target="_blank" className="flex items-center space-x-3 text-xl hover:text-blue-800 transition">
              <FaTwitter /> <span>Twitter</span>
            </a>

            <a href="mailto:hibaowais0903@gmail.com" className="flex items-center space-x-3 text-xl hover:text-red-700 transition">
              <MdEmail /> <span>Gmail</span>
            </a>

            <a href="https://hibaowais.com" target="_blank" className="flex items-center space-x-3 text-xl hover:text-green-900 transition">
              <FaWhatsapp /> <span>WhatsApp</span>
            </a>

         <a href="https://www.facebook.com/Hina Owais" target="_blank" className="flex items-center space-x-3 text-xl hover:text-blue-600 transition">
              <FaFacebookF /> <span>Facebook</span> 
            </a>

            <a href="https://www.TikTok.com/hibaowais12" target="_blank" className="flex items-center space-x-3 text-xl hover:text-black transition">
              <FaTiktok /> <span>TikTok</span>
            </a>

            <a href="https://medium.com" target="_blank" className="flex items-center space-x-3 text-xl hover:text-green-900 transition">
              <FaMediumM /> <span>Medium</span>
            </a>

          </div>
        </div>
      </div>
    </section>

            {/* footer */}

            <footer className="bg-black text-white py-4 text-center">
           <p>&copy; 2024 HIBA OWAIS. All rights reserved.</p>

           <p className="hover:text-blue-400">Email: hibaowais0903@gmail.com</p>

        <div className="flex justify-center space-x-4">
          <a  href="https://github.com/HibaOwais4422" target="_blank" className="hover:text-slate-950">
           <FontAwesomeIcon icon={faGithub} size="3x" /> {/* GitHub Icon */}
          </a>
         
          <a href="https://linkedin.com/in/HibaOwais" target="_blank" className="hover:text-blue-400 ">
           <FontAwesomeIcon icon={faLinkedin} size="3x" /> {/* LinkedIn Icon */}
          </a>
      </div>
      </footer>
    </div>
  )
}
 export default portfolio