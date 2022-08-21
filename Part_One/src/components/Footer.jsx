import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import Logo from '../icons/Logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] mt-6 pt-10 px-6 lg:px-32">
      <div className="lg:flex lg:flex-row">
        <div className="lg:self-start flex content-center lg:w-[50%] lg:pt-12">
          <span className="inline-block w-[20%] self-center">
            <img className="w-[100%]" src={Logo} alt="" />
          </span>
          <span className="pl-4 lg:self-center">
            <h1 className="text-[#1a1a1a] text-[32px] lg:font-bold">Meals</h1>
          </span>
        </div>
        <div className="w-[70%] lg:w-[30%] flex flex-row justify-between pt-10">
          <div className="">
            <ul>
              <li className="text-[#1a1a1a] font-bold">Company</li>
              <li className="text-[#666]">Blog</li>
              <li className="text-[#666]">About us</li>
              <li className="text-[#666]">Contact us</li>
            </ul>
          </div>
          <div className="">
            <ul>
              <li className="text-[#1a1a1a] font-bold">Services</li>
              <li className="text-[#666]">FAQs</li>
              <li className="text-[#666]">Our Menu</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-links w-[60%] lg:w-[20%] justify-around flex py-8 lg:translate-y-24 lg:translate-x-[400%]">
        <div>
          <BsFacebook style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
        <div>
          <BsInstagram style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
        <div>
          <BsTwitter style={{ fontSize: '20px', cursor: 'pointer' }} />
        </div>
      </div>
      <hr />
      <div className="text-[12px] text-[#333] py-8">
        <p>© 2022 Meals. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
