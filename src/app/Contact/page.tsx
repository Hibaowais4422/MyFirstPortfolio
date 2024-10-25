import Navbar from '../components/header';
import Footer from '../components/footer'
import { FaInstagram ,FaTwitter,FaFacebookF ,FaWhatsapp,FaTiktok,FaMediumM } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';


const Contact = () => {
    return (
      <div className="p-1  bg-black flex-grow flex flex-col min-h-screen">
        <Navbar/>
        <section className="bg-black min-h-screen flex items-center justify-center p-10">
      <div className="bg-yellow-500 p-6 rounded-lg shadow-lg w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/*Contact Form */}
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

        {/*  Social Media Icons */}
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
 

        <Footer/>
      </div>
    );
  }
  
  export default Contact;
  