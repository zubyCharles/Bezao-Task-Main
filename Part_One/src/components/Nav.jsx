import {
  BsXLg,
  BsHouseDoor,
  BsShop,
  BsCart2,
  BsClipboardMinus,
} from 'react-icons/bs';

const Nav = ({ showSideBar, setSideBar }) => {
  return (
    <div
      className={`navbar ${
        showSideBar ? 'active' : null
      } absolute lg:block z-50 bg-white lg:bg-[transparent] w-[100vw] lg:w-fit lg:h-auto h-[100vh] py-12 lg:py-0 px-8 top-0 `}
    >
      <div
        className="lg:hidden cancel float-right"
        onClick={() => setSideBar(false)}
      >
        <BsXLg style={{ color: '#666', transform: 'scale(1.75)' }} />
      </div>
      <div className="ctos w-[90%] lg:w-[55%] mx-auto flex justify-between pt-16 lg:pt-0 pb-8 lg:absolute lg:top-3 lg:left-[75vw]">
        <button className="bg-[#da3743] text-white text-sm py-[14px] px-[24px] lg:p-[10px] rounded-[30px]">
          Create Account
        </button>
        <button className="bg-transparent text-[#da3743] text-sm py-[14px] px-[24px] lg:p-[10px] rounded-[30px] border lg:border-none border-[#da3743]">
          Sign In
        </button>
      </div>
      <div className="nav-links lg:translate-x-[24vw]">
        <ul className="lg:flex flex-row">
          <li className="flex py-6 text-2xl lg:text-base lg:px-5 content-center">
            <span className="self-center">
              <BsHouseDoor />
            </span>
            <span className="text-xl lg:text-base pl-8 lg:pl-1">Home</span>
          </li>
          <li className="flex py-6 text-2xl lg:text-base lg:px-5 content-center">
            <span className="self-center">
              <BsShop />
            </span>
            <span className="text-xl lg:text-base pl-8 lg:pl-1">Menu</span>
          </li>
          <li className="lg:hidden flex py-6 text-3xl lg:text-base lg:px-4 content-center">
            <span className="self-center">
              <BsCart2 />
            </span>
            <span className="text-xl lg:text-base pl-8 lg:pl-1">My Tray</span>
          </li>
          <li className="flex py-6 text-2xl lg:text-base lg:px-6 content-center">
            <span className="self-center">
              <BsClipboardMinus />
            </span>
            <span className="text-xl lg:text-base pl-8 lg:pl-1">
              Meal Plans
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
