import Card from "./Card";
import ".././App.css"
import { useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";

function HorizpntalScrollCard({ data = [], heading ,trending,media_type}) {
    const containerref=useRef()
    const handleNext=()=>{
        containerref.current.scrollLeft +=300
    }
    const handlePrev=()=>{
        containerref.current.scrollLeft -=300
    }
  return (
    <>
      <div className="container mx-auto px-3 my-10">
        <h2 className="text-lg lg:text-2xl font-bold mb-3 text-white">
          {heading}
        </h2>
        <div className=" relative">
          <div ref={containerref} className=" grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-x-scroll overflow-hidden relative z-10 scroll-smooth transition-all scrolbar-none ">
            {data.map((data, index) => {
              return (
                <Card
                  key={data.id+"heading"+index}
                  data={data}
                  index={index + 1}
                  trending={trending}
                  media_type={media_type}
                />
              );
            })}
          </div>
          <div className="absolute top-0 hidden  lg:flex justify-between w-full h-full items-center">
            <button onClick={handlePrev} className="bg-white p-1  text-black rounded-full -ml-1 z-10"><FaAngleLeft/></button>
            <button onClick={handleNext} className="bg-white p-1  text-black rounded-full -mr-1 z-10"><FaAngleRight/></button>

          </div>
        </div>
      </div>
    </>
  );
}

export default HorizpntalScrollCard;
