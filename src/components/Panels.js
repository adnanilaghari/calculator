import {useState} from "react";
import Image from 'next/image';
const Panels = () => {
  const [showHealth, setShowHealth] = useState(false);
  const [showUsher, setShowUsher] = useState(false);
  const [showZakat, setShowZakat] = useState(false);
  const [showConversion, setShowConversion] = useState(false);
  const [showBodyIndex, setBodyMassIndex] = useState(false);
  const [showScientific, setShowScientific] = useState(false);
  return (
    <div className="flex flex-wrap w-full justify-center ">
      {/* Panel Cards */}

      {/* Health  */}
      <div>
      <div className="card bg-red-500 px-20 py-4 rounded flex justify-center box-border w-full max-w-xl mb-4 " onClick={() => setShowHealth(true)}>
        <div className="icon mr-auto w-10">
          {/* <BsFillHeartPulseFill size={30} /> */}
          <Image src="/cardiogram.png" alt="Cardiogram Icon" width={50} height={50} className=" mr-7" />
        </div>
        <p className="text text-white text-xl ml-3">Health</p>
      </div>
      {showHealth && <Health />}
    </div>


      {/* Usher  */}
      <div>
      <div className="card bg-slate-700 px-20 py-4 rounded flex justify-center box-border w-full max-w-xl mb-4" onClick={()=> setShowUsher(true)}>
          <div className="icon mr-auto w-10">
            {/* <GiField size={30} /> */}
            <Image src="/usher.png" alt="Usher Icon" width={50} height={50} className=" mr-7" />
          </div>
          <p className="text text-white text-xl ml-3">Usher</p>
        </div>
        {showUsher && <Usher />}
        </div>

      {/* Zakart */}
      <div>
      <div className="card bg-slate-700 px-20 py-4 rounded flex justify-center box-border w-full max-w-xl mb-4" onClick={()=> setShowZakat(true)}>
          <div className="icon mr-auto w-10">
            {/* <FaDonate size={30} /> */}
            <Image src="/zakat.png" alt="Zakat Icon" width={50} height={50} className=" mr-7" />
          </div>
          <p className="text text-white text-xl ml-3">Zakat</p>
        </div>
        {showZakat && <Zakat />}
        </div>

      {/* Number Conversion  */}
      <div>
        <div className="card bg-green-600 px-14 py-4 rounded flex justify-center box-border w-full max-w-xl mb-4" onClick={()=> setShowConversion(true)}>
          <div className="icon mr-auto w-10">
            {/* <SiConvertio size={30} /> */}
            <Image src="/good-conversion-rate.png" alt="Good Conversion" width={50} height={50} className=" mr-7" />
          </div>
          <p className="text text-white text-xl ml-3">Conversion</p>
        </div>
        {showConversion && <Conversion />}
        </div>

      {/* BMI Conversion  */}
      <div>
        <div className="card bg-emerald-900 px-9 py-4 rounded flex justify-center box-border w-full max-w-xl mb-4"onClick={()=> setBodyMassIndex(true)}>
          <div className="icon mr-auto w-9">
            {/* <GiBodyHeight size={30} /> */}
            <Image src="/body-mass-index.png" alt="Good Conversion" width={50} height={50} className=" mr-7" />
          </div>
          <p className="text text-white text-xl ml-3">Body Mass Index</p>
        </div>
        {showBodyIndex && <BodyMassIndex />}
        </div>
      {/* Scientific Conversion  */}
      <div>
        <div className="card bg-emerald-900 px-16 py-4 rounded flex justify-center box-border w-full max-w-xl mb-4" onClick={()=> setShowScientific(true)}>
          <div className="icon mr-auto w-9">
            {/* <CiCalculator1 size={30} /> */}
            <Image src="/microscope.png" alt="Good Conversion" width={50} height={50} className=" mr-7" />
          </div>
          <p className="text text-white text-xl ml-3">Scientific</p>
        </div>
        {showScientific && <Scientific />}
        </div>
    </div>
  );
};

export default Panels;
