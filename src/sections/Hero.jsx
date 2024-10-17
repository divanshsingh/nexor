import { useRef, useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";
import { Suspense } from 'react'
import { Canvas, useFrame} from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Jordan from "../components/threeD/Jordan"
import Pegsus from "../components/threeD/Pegsus";
import Boots from "../components/threeD/Boots";

const RotatingModel = ({ selectedModel }) => {
  const modelRef = useRef();

  // Rotate model on the Z axis continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Adjust rotation speed here
    }
  });

  // Conditionally render the selected model
  return (
    <mesh ref={modelRef}>
      {selectedModel === "Jordan" && <Jordan />}
      {selectedModel === "Pegsus" && <Pegsus />}
      {selectedModel === "Boots" && <Boots />}
    </mesh>
  );
};

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  const [selectedModel, setSelectedModel] = useState("Pegsus"); // Default model

  // Function to change model based on the clicked shoe
  const handleShoeClick = (shoe, modelName) => {
    setBigShoeImg(shoe);
    setSelectedModel(modelName); // Update the selected model
  };

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center gap-10 min-h-screen max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28 px-8">
        <p className="text-xl font-montserrat text-coral-red">
          Our Premium Collection
        </p>
        <h1 className="z-10 mt-9 font-palanquin text-8xl max-sm:text-[72px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nexor</span> Shoes
        </h1>
        <p className="font-montserrat leading-8 text-slate-gray text-lg mt-6 mb-14 sm:max-w-sm">
          Discover stylish Noxer arrivals, quality comfort, and innovation for
          your active life{" "}
        </p>
        <a href="#products">
        <Button lable="Show now" iconUrl={arrowRight} />
        </a>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="font-palanquin text-3xl font-bold">{stat.value}</p>
              <p className="font-montserrat text-slate-gray text-lg leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-[#F6F6F6]  bg-cover bg-center">
        <Canvas>
          <ambientLight />
          <OrbitControls enableZoom={false}/>
          <Suspense fallback={null}>
            <RotatingModel selectedModel={selectedModel} />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
        <div className="flex absolute -bottom-[5%] gap-4 sm:gap-6 max-sm:px-6 sm:left-[10%]">
          {/* Render ShoeCards and map them to the corresponding models */}
          <div className={`border-2 rounded-xl ${
              selectedModel === "Pegsus" ? "border-coral-red" : "border-transparent"
            }`}>
            <ShoeCard
              imgUrl={shoes[0]} // First shoe image
              changeBigShoeImage={() => handleShoeClick(shoes[0], "Pegsus")} // Change to Jordan model
              bigShoeImg={bigShoeImg}
            />
          </div>
          <div className={`border-2 rounded-xl ${
              selectedModel === "Jordan" ? "border-coral-red" : "border-transparent"
            }`}>
            <ShoeCard
              imgUrl={shoes[1]} // Second shoe image
              changeBigShoeImage={() => handleShoeClick(shoes[1], "Jordan")} // Change to Model
              bigShoeImg={bigShoeImg}
            />
          </div>
          <div className={`border-2 rounded-xl ${
              selectedModel === "Boots" ? "border-coral-red" : "border-transparent"
            }`}> 
            <ShoeCard
              imgUrl={shoes[2]} // Third shoe image
              changeBigShoeImage={() => handleShoeClick(shoes[2], "Boots")} // Change to Boots model
              bigShoeImg={bigShoeImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
