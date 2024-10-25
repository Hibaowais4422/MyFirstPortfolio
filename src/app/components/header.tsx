import Link from 'next/link';

const Navbar = () => {
  return (
   
    
    <nav className="bg-black text-white p-2 flex justify-between items-center shadow-yellow-700 shadow-lg ">
      <h1 className="text-5xl font-bold ">
        <img src={"/logo2.jpg"} alt=" logo" width={80} height={80}/>
      </h1>
      <ul className="flex space-x-8">
        <li className="hover:text-green-500 font-bold text-center "><Link href="/home">Home
        </Link></li>
        <li className="hover:text-green-500  font-bold "><Link href="/About">About</Link></li>
        <li className="hover:text-green-500  font-bold"><Link href="/Contact">Contact</Link></li>
      </ul>
    </nav>
      
  
  );
}

export default Navbar;


