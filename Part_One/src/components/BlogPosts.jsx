import Avatar from '../icons/Avatar.png';
import KungPao from '../icons/Kung-Pao.png';

const BlogPosts = () => {
  return (
    <>
      <div className="px-6 py-10 bg-[#f9e1e3] lg:px-32">
        <div className="lg:flex flex-row ">
          <div>
            <h1 className="text-[24px] lg:text-[42px] text-[#363a40] py-2 lg:py-4 pr-12 lg:pr-40 lg:leading-[3rem]">
              What our customers say about us
            </h1>
            <p className="text-[12px] lg:text-base text-[#67758d] pr-12 lg:pr-40 pb-8">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum.
            </p>
          </div>
          <div className="bg-white lg:w-[50%]  p-6 rounded-lg">
            <div className="flex w-[100%]">
              <div className="avatar">
                <img className="lg:w-[100%]" src={Avatar} alt="" />
              </div>
              <div className="flex flex-col pl-4">
                <span className="text-[#363a40]">John Samson</span>
                <span className="text-[10px] text-[#67758d]">
                  Enugu, Nigeria
                </span>
              </div>
              <h1 className="text-[#da3743] text-[50px] self-center -translate-y-5 pl-24 lg:translate-x-24">
                "
              </h1>
            </div>
            <div>
              <p className="text-[#67758d] text-[12px]">
                White dwarf a still more glorious dawn awaits tingling of the
                spine emerged into consciousness Vangelis shores of the cosmic
                ocean.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className="dots w-[30%] lg:w-[10%] flex justify-between my-12 mx-auto">
          {[1, 2, 3, 4, 5].map((num) => (
            <div
              key={num}
              className="bg-[#fff] w-[8px] h-[8px] rounded-[50%]"
            ></div>
          ))}
        </div>
      </div>

      <div className="bg-white px-6 lg:px-32 py-10">
        <h1 className="text-[24px] lg:text-[32px] text-[#030303] pb-2 text-center">
          Blog Our Latest News
        </h1>
        <p className="text-[14px] text-[#0a244e] lg:w-[30%] lg:mx-auto opacity-70 text-center pb-8">
          Have you ever browsed food blogs like mine and wondered how to start a
          food blog of your very own?{' '}
        </p>
        <div className="lg:flex lg:flex-row">
          {[1, 2, 3].map((num) => (
            <div key={num} className="kung-pao py-10 px-6 lg:mx-2">
              <div className="img w-[70%] mx-auto pb-4">
                <img src={KungPao} alt="dish of spiced chicken" />
              </div>
              <div className="flex">
                <span className="text-[#da3743] text-xs font-semibold pr-2">
                  Design
                </span>
                <span className="text-[#556480] text-xs">01 October 2019</span>
              </div>
              <p className="text-[#333] py-2">
                Better Than Takeout Kung Pao Chicken
              </p>
              <p className="text-[#666] text-[14px] opacity-70">
                This spicy, tangy, and sweet better than takeout no peanut kung
                pao chicken stir fry recipe
              </p>
              <p className="text-[#da3743] text-[14px] pt-2">READ MORE</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
