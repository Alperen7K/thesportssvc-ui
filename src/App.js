import "./App.css";
import logo from "./thesportssvc-logo.jpg";

function App() {
 return (
  <div className="bg-[#202429] w-screen h-screen text-white flex flex-col md:flex-row items-center justify-evenly md:justify-around p-4">
   <div className="flex items-center justify-center">
    <img
     src={logo}
     className="h-[40vh] md:h-fit md:w-[30vw] rounded-[50px] mx-auto shadow-md shadow-[#deb9846f]"
    />
   </div>
   <div className="h-[40vh] md:h-fit md:w-[30vw] flex flex-col items-center justify-center gap-y-[5vh]">
    <h1 className="text-[40px] md:text-[50px] text-center ">
     Only <b>sportstech</b> <br />
     startups can apply.
    </h1>
    <a
     className="text-[24px] md:text-[36px] px-4 py-2 rounded-[20px] shadow-md hover:shadow-lg duration-300   hover:shadow-[#deb9846f]  shadow-[#deb9846f]  bg-[#202429] "
     href="mailto:info@thesportsvc.com"
    >
     info@<b>thesportsvc</b>.com
    </a>
   </div>
  </div>
 );
}

export default App;
