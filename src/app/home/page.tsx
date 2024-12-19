import Navbar from '../components/header';
import Footer from '../components/footer';
import Image from 'next/image';

const Home = () => {
    return (
      <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <section className="h-screen flex items-center justify-between bg-black text-white p-8">
      <div className="max-w-xl">
        <h1 className="text-5xl font-bold">Hello,</h1>
        <h2 className="text-6xl font-bold mt-4">Im <span className="text-yellow-600">HibaOwais</span></h2>
        <h3 className="text-4xl mt-2">Frontend Developer</h3>
        <p className="mt-4 text-lg text-gray-400">
          I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites.
        </p>
      </div>
      <div>
        {/*  image here */}
        <Image src="/picme3.jpg" alt="Profile Image"
        width={288}
        height={288}
        className="rounded-full shadow-sm border-hidden opacity-70 shadow-yellow-500  w-72 h-auto" />
      </div>
    </section>
        <Footer/>
      </div>
    );
  }
  
  export default Home;