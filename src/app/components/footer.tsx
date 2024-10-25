import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';


const Footer = () => {
    return (
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
    
    
    );
  };
  
  export default Footer;