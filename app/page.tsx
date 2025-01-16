import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Result from "./components/Result";
import Contact from "./components/Contact";



export default function Home() {
  return (
    <main className='font-poppins'>
      <div className="p-1">
        <Navbar/>
        <Hero/>
      </div>
      <div className='bg-black p-1'>
        <Form/>
        <Result/>
        <Contact/>
      </div>
    </main>
  );
}
