// import Nav from './Nav';
import { FaBars } from 'react-icons/fa';
import { BsCart2 } from 'react-icons/bs';
import Logo from '../icons/Logo.png';

const Header = ({ showSideBar, setSideBar }) => {
  return (
    <>
      <div className="header flex justify-between w-[100%] px-8 lg:px-12 py-6  bg-white lg:bg-none ">
        <div className="w-[35%] lg:w-[10%] justify-between content-center site-logo flex">
          <img className="w-[40%]" src={Logo} alt="" />
          <h1 className="text-xl font-bold pl-[1px]">Meals</h1>
        </div>
        <div className="flex flex-row justify-between content-center w-[20%]">
          <BsCart2
            className="lg:absolute lg:top-6 lg:left-[70vw]"
            style={{ color: '#666', transform: 'scale(1.75)' }}
          />
          <FaBars
            className="lg:hidden"
            style={{ color: '#666', transform: 'scale(1.65)' }}
            onClick={() => setSideBar(true)}
          />
        </div>
      </div>
      {/* <Nav showSideBar={showSideBar} setSideBar={setSideBar} /> */}
    </>
  );
};

export default Header;
