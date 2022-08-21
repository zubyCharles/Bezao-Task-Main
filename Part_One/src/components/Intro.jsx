import { FaSearch } from 'react-icons/fa';
// import Dish from '../assets/Dish.png';
import Jollof from '../icons/Jollof.png';

const Intro = () => {
  return (
    <div className="intro bg-[#da3743] lg:bg-white py-8 px-4 lg:px-24 lg:flex">
      <div className="w-[100%] lg:pt-28 lg:pr-10">
        <h1 className="text-[28px] lg:text-[56px] lg:leading-[4rem] py-2 lg:py-3 text-white lg:text-[#1a1a1a]">
          Delicious meals at your convinience
        </h1>
        <p className="text-[14px] lg:text-[16px] lg:text-[#132548] lg:opacity-70 lg:pr-60 text-white">
          Order your meals from us and we will have it delivered at your
          doorstep.
        </p>
        <div>
          <p className="pt-8 pb-4 text-white lg:text-[#132548]">
            Instant Order
          </p>
          <span className="w-[100%] flex content-center">
            <span className="self-center translate-x-4 relative z-20">
              <FaSearch style={{ color: '#aaa', transform: 'scale(1.35)' }} />
            </span>
            <span className="w-[100%] -translate-x-4 justify-self-start">
              <input
                className="p-[15px] pl-[3rem] w-[100%] lg:bg-[#ebcf12] outline-none"
                type="text"
                placeholder="Search for meal"
              />
            </span>
          </span>
        </div>
      </div>
      <div className="img w-[80%] my-8 mx-auto">
        <img className="w-[100%]" src={Jollof} alt="a dish of rice" />
      </div>
    </div>
  );
};

export default Intro;
