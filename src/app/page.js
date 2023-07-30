import Image from "next/image";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import CircularDivs from "./Components/RotatingCircles";
import RotatingCircles from "./Components/RotatingCircles";
export default function Home() {
  return (
    <>
      <About />
      <RotatingCircles />
    </>
  );
}
