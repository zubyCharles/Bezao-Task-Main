import { BsFillChatRightDotsFill, BsCart2 } from 'react-icons/bs';
import menu from '../menu.json';

const { menuList } = menu;

const Menu = () => {
  return (
    <div className="menu w-[100%] lg:bg-[#fafafa] py-20 lg:py-14 px-6 lg:px-24">
      <div className="w-16 h-16 grid rounded-[50%] bg-[#da3743] float-right pb-5">
        <BsFillChatRightDotsFill
          style={{
            color: '#fff',
            placeSelf: 'center',
            transform: 'scale(1.55) translateY(8px)',
          }}
        />
      </div>
      <div className="clear-right lg:pl-8 lg:translate-y-14">
        <p className="text-[#da3743] font-bold">Menu</p>
        <p className="font-bold text-[24px] py-2">Current menu</p>
      </div>
      <div className="w-[100%] lg:w-[30%] py-6 lg:float-right lg:-translate-x-12">
        <ul className="w-[inherit] lg:w-[100%] flex justify-between border border-slate-200 rounded-md">
          {['All', 'Rice', 'Beans', 'Fries', 'Swallow', 'Others'].map(
            (item) => (
              <li key={item} className="py-1 px-2 text-sm text-[#333]">
                {item}
              </li>
            )
          )}
        </ul>
      </div>
      <div className="menu-grid lg:clear-right lg:w-[100%] mx-auto">
        {menuList.map(({ title, content, price, src }, i) => {
          return (
            <div key={i} className="lg:p-8">
              <div>
                <img src={src} alt={title} />
              </div>
              <p className="text-[#4d4d4d] py-2">{title}</p>
              <small className="text-[#999]">{content}</small>
              <h1 className="flex justify-between content-center text-[#666] py-3">
                <span className="self-center">{price}</span>
                <span className="grid bg-[#da3743] self-center w-7 h-7 rounded-lg">
                  <BsCart2
                    style={{
                      color: '#fff',
                      placeSelf: 'center',
                    }}
                  />
                </span>
              </h1>
            </div>
          );
        })}
      </div>
      <div className="w-fit pt-28 lg:pt-16 my-4 mx-auto">
        <button className="text-white bg-[#da3743] py-3 px-6 rounded-[30px]">
          Full Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
