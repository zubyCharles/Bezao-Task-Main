import { NavLink } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { useMenu } from '../store';

const Home = () => {
  const { menu } = useMenu();

  return (
    <main className="bg-[#f0b91e] h-[100%] overflow-x-hidden">
      <nav className="w-full py-8 px-16 flex flex-row justify-between content-center">
        <div className="text-white text-lg">Cooks</div>
        <ul className="w-[40%] flex flex-row justify-between">
          <li>Home</li>
          <li>Resturants</li>
          <li>Home Chefs</li>
          <li>Offers</li>
          <li>About Us</li>
        </ul>
        <div className="self-center">
          <NavLink to="/admin">
            <button className="text-white py-1 px-4 rounded-[30px] border border-white">
              Admin
            </button>
          </NavLink>
        </div>
      </nav>

      <div className="menu-display py-[22%] "></div>
      <div className="menu-container absolute w-[100vw] flex flex-row top-[20%]">
        {menu.map(({ name, desc, prep, price, img }) => (
          <div key={name} className={`w-[300%]  bg-[url(${img})] pl-44 pr-32`}>
            <div className="flex flex-row justify-between content-center">
              <div className="self-center">
                <h1 className="text-[56px] font-bold text-white">
                  ENJOY DELICIOUS MEALS
                </h1>
                <p className="left text-white">
                  Meals delivered to your doorstep.
                </p>
              </div>
              <div className="w-[570px] -translate-x-36 mx-auto">
                <img src={img} alt={name} />
              </div>

              <button className="w-[10%] border self-center border-white translate-x-20">
                {/* <span className="text-white text-sm font-bold">
                  Click To Scroll
                </span> */}
                <span>
                  <BsArrowRight className="text-3xl text-center w-fit mx-auto text-white" />
                </span>
              </button>
            </div>
            <div className="w-[100%] flex flex-row justify-between py-16 mx-auto">
              <div>
                <p>PRICE</p>
                <p>{price}</p>
              </div>
              <div className="pl-12">
                <p>{name}</p>
                <p>{desc}</p>
              </div>
              <div>
                <p>PREPARATION</p>
                <p>{prep}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
