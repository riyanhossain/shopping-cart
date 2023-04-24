import useStore from "../app/store";
import { data } from "../data/data";

const RightGrid: React.FC = () => {
    const { addToCart, cart } = useStore((state) => state);

    console.log(cart);
    return (
        <div>
            <h1 className="text-[#9EA4AF] text-[32.04px] leading-[39.25px] font-gilroy font-extrabold">Ursu SHOP</h1>
            <p className="font-poppins font-medium text-[15px] leading-[23px] opacity-[0.36] text-white">
                Lorem Ipsum is simply dummy text of the print.
            </p>

            <div className="mt-[18px] border-[1.5px] border-[#FFFFFF12] rounded-[7.29px] px-[40px] py-[25px]">
                {/* search */}
                <div>
                    <input
                        type="search"
                        className="py-[7px] px-[14px] w-full outline-none bg-[#FFFFFF0A] rounded-[3.65px] placeholder:text-[#FFFFFF45] font-poppins text-sm leading-[22px] text-[#9EA4AF] appearance-none"
                        placeholder="Search"
                    />
                </div>

                {/* categories */}
                <div className="flex items-center justify-between mt-3">
                    <div className=" text-[10px] leading-[13px] font-gilroy font-extrabold flex gap-x-[34px]">
                        <button className="text-[#38CD9E] px-2 pb-1.5 border-b-[1.13px] border-[#4DD6AA]">Foods</button>

                        <button className="text-[#FFFFFF63] px-2 pb-1.5 border-b-[1.13px] border-transparent">Drinks</button>

                        <button className="text-[#FFFFFF63] px-2 pb-1.5 border-b-[1.13px] border-transparent">Electric</button>

                        <button className="text-[#FFFFFF63] px-2 pb-1.5 border-b-[1.13px] border-transparent">Others</button>

                        <button className="text-[#FFFFFF63] px-2 pb-1.5 border-b-[1.13px] border-transparent">Others</button>
                    </div>

                    {/* filter icon */}
                    <div>
                        <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M6.17781 10.3415H9.41892V8.72097H6.17781V10.3415ZM0.505859 0.618195V2.23875H15.0909V0.618195H0.505859ZM2.93669 6.29014H12.66V4.66958H2.93669V6.29014Z"
                                fill="white"
                                fillOpacity="0.37"
                            />
                        </svg>
                    </div>
                </div>

                {/* items */}
                <div className="mt-[26px] grid grid-cols-5 gap-x-2 gap-y-4">
                    {data
                        .filter((item) => item.category === "Foods")
                        .map((item) => (
                            <div
                                key={item.id}
                                className="border-[0.92px] border-[#6D6D6D]  rounded-[1.94px] px-[5px] py-[3px] bg-[rgba(217,217,217,0.04)]"
                            >
                                <div className=" flex justify-center relative ">
                                    <div className="absolute -top-[10px] px-[7.5px] py-[2.5px]  text-[#323232] font-semibold text-[5.44px] leading-[8.17px] text-center bg-[#9E9E9E] rounded-[1.29px]">
                                        {item.name}
                                    </div>
                                </div>

                                <div className="flex justify-center mt-[14px]">
                                    <img src={item.image} alt="pineapple" className="w-[71.23px] h-[64.42px]" />
                                </div>

                                <div className="mt-[5px] bg-[#9E9E9E] flex p-[1.22px] rounded-[1.94px]">
                                    <button
                                        className="text-[4.46px] leading-[6.7px] font-poppins font-semibold italic px-1 py-[2.5px] bg-[#323232] rounded-[1.94px] text-[#9E9E9E]"
                                        onClick={() =>
                                            addToCart({
                                                ...item,
                                                quantity: 1,
                                            })
                                        }
                                    >
                                        Add To Cart
                                    </button>
                                    <div className="text-[#323232] font-gilroy font-extrabold text-[7.14px] leading-[8.75px] flex  items-center  mx-auto">
                                        ${item.price}
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default RightGrid;

// {
//     /* item */
// }
// <div className="border-[0.92px] border-[#FBCE02AD]  rounded-[1.94px] px-[5px] py-[3px] bg-[rgba(217,217,217,0.04)]">
//     <div className=" flex justify-center relative ">
//         <div className="absolute -top-[10px] px-[7.5px] py-[2.5px]  text-[#111B33] font-semibold text-[5.44px] leading-[8.17px] text-center bg-[#FBCE02] rounded-[1.29px]">
//             pineapple
//         </div>
//     </div>

//     <div className="flex justify-center mt-[14px]">
//         <img src={pineapple} alt="pineapple" className="w-[71.23px] h-[64.42px]" />
//     </div>

//     <div className="mt-[5px] bg-[#FBCE02] flex p-[1.22px] rounded-[1.94px]">
//         <button className="text-[4.46px] leading-[6.7px] font-poppins font-semibold italic px-1 py-[2.5px] bg-[#0C111B] rounded-[1.94px] text-[#FFFFFFE0]">
//             Add To Cart
//         </button>
//         <div className="text-[#0C111B] font-gilroy font-extrabold text-[7.14px] leading-[8.75px] flex  items-center  mx-auto">
//             $566
//         </div>
//     </div>
// </div>;
