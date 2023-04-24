import { useCallback, useEffect, useState } from "react";
import useStore from "../app/store";
import { data } from "../data/data";
import isItemExistOnCart from "../lib/isItemExistOnCart";

const RightGrid: React.FC = () => {
    const [filter, setFilter] = useState<string>("Foods");
    const [search, setSearch] = useState<string>("");
    const [items, setItems] = useState(data);
    const { addToCart } = useStore((state) => state);

    const handleSearch = useCallback(() => {
        if (search) {
            setItems(
                data.filter((item) => {
                    return item.name.toLowerCase().includes(search.toLowerCase()) && item.category === filter;
                })
            );
        } else {
            setItems(data);
        }
    }, [search, filter]);

    useEffect(() => {
        handleSearch();
    }, [search, filter, handleSearch]);

    return (
        <div>
            <h1 className="text-[#9EA4AF] text-[32.04px] leading-[39.25px] font-gilroy font-extrabold">Ursu SHOP</h1>
            <p className="font-poppins font-medium text-[15px] leading-[23px] opacity-[0.36] text-white">
                Lorem Ipsum is simply dummy text of the print.
            </p>

            <div className="mt-[18px] border-[1.5px] border-[#FFFFFF12] rounded-[7.29px] px-5 xl:px-[40px] py-[25px]">
                {/* search */}
                <div>
                    <input
                        type="search"
                        className="py-[7px] px-[14px] w-full outline-none bg-[#FFFFFF0A] rounded-[3.65px] placeholder:text-[#FFFFFF45] font-poppins text-sm leading-[22px] text-[#9EA4AF] appearance-none"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* categories */}
                <div className="flex items-center justify-between mt-3">
                    <div className=" text-[10px] leading-[13px] font-gilroy font-extrabold flex gap-x-3 xl:gap-x-[34px]">
                        <button
                            className={`px-2 pb-1.5 border-b-[1.13px]  ${
                                filter === "Foods" ? "text-[#38CD9E] border-[#4DD6AA]" : "text-[#FFFFFF63] border-transparent"
                            }`}
                            onClick={() => setFilter("Foods")}
                        >
                            Foods
                        </button>

                        <button
                            className={`px-2 pb-1.5 border-b-[1.13px]  ${
                                filter === "Drinks" ? "text-[#38CD9E] border-[#4DD6AA]" : "text-[#FFFFFF63] border-transparent"
                            }`}
                            onClick={() => setFilter("Drinks")}
                        >
                            Drinks
                        </button>

                        <button
                            className={`px-2 pb-1.5 border-b-[1.13px]  ${
                                filter === "Electric" ? "text-[#38CD9E] border-[#4DD6AA]" : "text-[#FFFFFF63] border-transparent"
                            }`}
                            onClick={() => setFilter("Electric")}
                        >
                            Electric
                        </button>

                        <button
                            className={`px-2 pb-1.5 border-b-[1.13px]  ${
                                filter === "Others" ? "text-[#38CD9E] border-[#4DD6AA]" : "text-[#FFFFFF63] border-transparent"
                            }`}
                            onClick={() => setFilter("Others")}
                        >
                            Others
                        </button>
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
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-max gap-x-2 gap-y-4 h-[50vh] overflow-y-auto pt-[26px] customScrollbar">
                    {items
                        .filter((item) => item.category === filter)
                        .map((item) => (
                            <div
                                key={item.id}
                                className={`border-[0.92px]  rounded-[1.94px] px-[5px] py-[3px] bg-[rgba(217,217,217,0.04)] h-[106px] ${
                                    isItemExistOnCart({
                                        ...item,
                                        quantity: 0,
                                    })
                                        ? "border-[#FBCE02AD]"
                                        : "border-[#6D6D6D]"
                                }`}
                            >
                                <div className=" flex justify-center relative ">
                                    <div
                                        className={`absolute -top-[10px] px-[7.5px] py-[2.5px]   font-semibold text-[5.44px] leading-[8.17px] text-center  rounded-[1.29px] ${
                                            isItemExistOnCart({
                                                ...item,
                                                quantity: 0,
                                            })
                                                ? "bg-[#FBCE02] text-[#111B33]"
                                                : "bg-[#9E9E9E] text-[#323232]"
                                        }`}
                                    >
                                        {item.name}
                                    </div>
                                </div>

                                <div className="flex justify-center mt-[14px]">
                                    <img src={item.image} alt="pineapple" className="w-[71.23px] h-[64.42px]" />
                                </div>

                                <div
                                    className={`mt-[5px] flex p-[1.22px] rounded-[1.94px] ${
                                        isItemExistOnCart({
                                            ...item,
                                            quantity: 0,
                                        })
                                            ? "bg-[#FBCE02]"
                                            : "bg-[#9E9E9E]"
                                    }`}
                                >
                                    <button
                                        className={`text-[4.46px] leading-[6.7px] font-poppins font-semibold italic px-1 py-[2.5px]  rounded-[1.94px]  ${
                                            isItemExistOnCart({
                                                ...item,
                                                quantity: 0,
                                            })
                                                ? "text-[#FFFFFFE0] bg-[#0C111B]"
                                                : "text-[#9E9E9E] bg-[#323232]"
                                        }`}
                                        onClick={() =>
                                            addToCart({
                                                ...item,
                                                quantity: 1,
                                            })
                                        }
                                    >
                                        Add To Cart
                                    </button>
                                    <div
                                        className={` font-gilroy font-extrabold text-[7.14px] leading-[8.75px] flex  items-center  mx-auto ${
                                            isItemExistOnCart({
                                                ...item,
                                                quantity: 0,
                                            })
                                                ? "text-[#0C111B] "
                                                : "text-[#323232]"
                                        }`}
                                    >
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
