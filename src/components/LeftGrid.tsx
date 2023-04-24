import useStore from "../app/store";

const LeftGrid: React.FC = () => {
    const { bank_acc, cash, cart, cart_total, history, removeAllFromCart, removeFromCart, addToCart } = useStore((state) => state);

    //
    return (
        <div className="relative z-10">
            <h1 className="text-[#9EA4AF] text-[32.04px] leading-[39.25px] font-gilroy font-extrabold">Shopping Cart</h1>
            <p className="font-poppins font-medium text-[15px] leading-[23px] opacity-[0.36] text-white">Lorem Ipsum is simply.</p>
            <div className="mt-[18px] border-[1.5px] border-[#FFFFFF12] rounded-[7.29px] px-[26px] py-[20px]">
                <p className="text-[#239D7F] font-gilroy font-extrabold text-base leading-[20px]">Financial Information</p>

                {/* money info container */}
                <div className="space-y-3 pb-8 border-b-[1.2px] border-[#FFFFFF14]">
                    <div className="mt-[28px] flex justify-between items-center">
                        <p className="text-base text-[#FFFFFF42] leading-[25px] font-poppins">Bank Account</p>

                        <p className="text-base text-[#FFFFFFA1] leading-[25px] font-poppins font-semibold">
                            <span className="text-[#38CD9E]">$</span>
                            {bank_acc}
                        </p>
                    </div>

                    <div className="mt-[28px] flex justify-between items-center">
                        <p className="text-base text-[#FFFFFF42] leading-[25px] font-poppins">Cash</p>

                        <p className="text-base text-[#FFFFFFA1] leading-[25px] font-poppins font-semibold">
                            <span className="text-[#38CD9E]">$</span>
                            {cash}
                        </p>
                    </div>
                </div>

                <p className="py-[14px] text-base leading-[20px] font-gilroy font-extrabold text-[#239D7F]">Your Cart</p>
                {/* cart container */}
                <div className="space-y-2.5 pb-[18px] border-b-[1.2px] border-[#FFFFFF14] customScrollbar overflow-y-auto h-80">
                    {cart.map((item, index) => (
                        <div key={index} className="p-1.5 flex justify-between items-center bg-[#38CD9E1F] rounded-[3.65px]">
                            <div className="flex items-center">
                                <img src={item.image} alt="pineapple" className="w-[45.45px] h-[41.11px]" />

                                {/* svg */}
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M27.2744 14.0269L23.06 9.81254C21.9732 8.72572 20.2112 8.72572 19.1243 9.81254L14.9099 14.0269C13.8231 15.1138 13.8231 16.8758 14.9099 17.9626L19.1243 22.1771C20.2111 23.2639 21.9732 23.2639 23.06 22.1771L27.2744 17.9626C28.3613 16.8758 28.3613 15.1138 27.2744 14.0269Z"
                                        stroke="url(#paint0_radial_0_238)"
                                        strokeWidth="1.1927"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <g filter="url(#filter0_d_0_238)">
                                        <path
                                            d="M22.3049 14.027L18.0905 9.81256C17.0037 8.72574 15.2416 8.72574 14.1548 9.81256L9.94036 14.027C8.85354 15.1138 8.85354 16.8759 9.94036 17.9627L14.1548 22.1771C15.2416 23.2639 17.0037 23.2639 18.0905 22.1771L22.3049 17.9627C23.3917 16.8759 23.3917 15.1138 22.3049 14.027Z"
                                            stroke="url(#paint1_radial_0_238)"
                                            strokeWidth="1.1927"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <filter
                                            id="filter0_d_0_238"
                                            x="0.577574"
                                            y="0.44977"
                                            width="31.0901"
                                            height="31.0901"
                                            filterUnits="userSpaceOnUse"
                                            colorInterpolationFilters="sRGB"
                                        >
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix
                                                in="SourceAlpha"
                                                type="matrix"
                                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                                result="hardAlpha"
                                            />
                                            <feOffset />
                                            <feGaussianBlur stdDeviation="3.97566" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.207843 0 0 0 0 1 0 0 0 0 0.576471 0 0 0 1 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_238" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_238" result="shape" />
                                        </filter>
                                        <radialGradient
                                            id="paint0_radial_0_238"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(28.4472 16.5911) rotate(176.82) scale(10.7508)"
                                        >
                                            <stop stopColor="#35FF93" />
                                            <stop offset="1" stopColor="#35FF93" stopOpacity="0" />
                                        </radialGradient>
                                        <radialGradient
                                            id="paint1_radial_0_238"
                                            cx="0"
                                            cy="0"
                                            r="1"
                                            gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(23.4776 16.5912) rotate(176.82) scale(10.7508)"
                                        >
                                            <stop stopColor="#35FF93" />
                                            <stop offset="1" stopColor="#35FF93" stopOpacity="0" />
                                        </radialGradient>
                                    </defs>
                                </svg>

                                <p className="font-poppins font-semibold text-[15px] leading-[22px] text-[#FFFFFF80] ml-3">{item.name}</p>
                            </div>

                            <div className="flex items-center gap-x-4">
                                <div className="flex items-center gap-x-2">
                                    <button
                                        className="w-[14.59px] h-[14.59px] rounded-full bg-[#35FF931F] flex items-center justify-center"
                                        onClick={() => addToCart(item)}
                                    >
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M0.79797 4.92107C0.84832 4.97148 0.908116 5.01148 0.973936 5.03877C1.03976 5.06606 1.11031 5.0801 1.18157 5.0801C1.25282 5.0801 1.32337 5.06606 1.38919 5.03877C1.45501 5.01148 1.51481 4.97148 1.56516 4.92107L4.27735 2.20575L6.98955 4.92107C7.0399 4.97148 7.09969 5.01148 7.16551 5.03877C7.23133 5.06606 7.30189 5.0801 7.37314 5.0801C7.44439 5.0801 7.51495 5.06606 7.58077 5.03877C7.64659 5.01148 7.70639 4.97148 7.75674 4.92107C7.8585 4.81913 7.91565 4.68098 7.91565 4.53695C7.91565 4.39292 7.8585 4.25477 7.75674 4.15284L4.68798 1.08096C4.63448 1.02721 4.57028 0.985317 4.49953 0.958004C4.42879 0.930692 4.35309 0.91857 4.27735 0.922425C4.20162 0.91857 4.12592 0.930692 4.05518 0.958004C3.98443 0.985317 3.92023 1.02721 3.86673 1.08096L0.79797 4.15284C0.585901 4.3649 0.585901 4.709 0.79797 4.92107Z"
                                                fill="#35FF93"
                                            />
                                        </svg>
                                    </button>

                                    <p className="font-poppins font-semibold text-[15px] leading-[22px] text-[#C9C9C9]">{item.quantity}x</p>

                                    <button
                                        className="w-[14.59px] h-[14.59px] rounded-full bg-[#FF35591F] flex items-center justify-center"
                                        onClick={() => removeFromCart(item)}
                                    >
                                        <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M7.38895 0.784059C7.3386 0.733642 7.2788 0.693645 7.21298 0.666356C7.14716 0.639067 7.07661 0.62502 7.00536 0.62502C6.9341 0.62502 6.86355 0.639067 6.79773 0.666356C6.73191 0.693645 6.67211 0.733642 6.62176 0.784059L3.90957 3.49937L1.19737 0.784058C1.14702 0.733641 1.08723 0.693645 1.02141 0.666355C0.955587 0.639066 0.885033 0.62502 0.813779 0.62502C0.742526 0.62502 0.671971 0.639066 0.606151 0.666355C0.54033 0.693645 0.480535 0.733641 0.430184 0.784058C0.328425 0.885993 0.271271 1.02414 0.271271 1.16817C0.271271 1.31221 0.328425 1.45035 0.430184 1.55229L3.49894 4.62417C3.55244 4.67792 3.61664 4.71981 3.68739 4.74712C3.75813 4.77443 3.83383 4.78655 3.90957 4.7827C3.9853 4.78655 4.061 4.77443 4.13174 4.74712C4.20249 4.71981 4.26669 4.67792 4.32019 4.62417L7.38895 1.55229C7.60102 1.34022 7.60102 0.996128 7.38895 0.784059Z"
                                                fill="#FF3559"
                                            />
                                        </svg>
                                    </button>
                                </div>

                                {/* delete button */}
                                <button onClick={() => removeAllFromCart(item)}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1.5477 3.22554H2.31544C1.99875 3.57936 1.80091 4.04122 1.80091 4.55237V11.2115C1.80091 12.3162 2.69897 13.2142 3.80297 13.2142H10.4614C11.5661 13.2142 12.4642 12.3162 12.4642 11.2122V4.55237C12.4642 4.04122 12.2657 3.57936 11.9496 3.22487H12.7174C12.9037 3.22487 13.055 3.07361 13.055 2.88725C13.055 2.70089 12.9037 2.54963 12.7174 2.54963H8.92596C8.76728 1.70357 8.02452 1.06007 7.13254 1.06007C6.24056 1.06007 5.4978 1.70357 5.33913 2.55031H1.5477C1.36133 2.55031 1.21008 2.70156 1.21008 2.88793C1.21008 3.07429 1.36066 3.22554 1.5477 3.22554ZM11.7889 4.55237V11.2115C11.7889 11.9428 11.1934 12.5383 10.4614 12.5383H3.80297C3.07102 12.5383 2.47547 11.9428 2.47547 11.2115V4.55237C2.47547 3.82042 3.07102 3.22487 3.80297 3.22487H10.4621C11.1941 3.22554 11.7889 3.82042 11.7889 4.55237ZM7.13254 1.73531C7.65112 1.73531 8.09002 2.079 8.23452 2.55031H6.03056C6.17506 2.079 6.61396 1.73531 7.13254 1.73531Z"
                                            fill="#FF3559"
                                            fillOpacity="0.7"
                                        />
                                        <path
                                            d="M7.13254 6.60778C6.94618 6.60778 6.79492 6.75903 6.79492 6.94539V10.7956C6.79492 10.9819 6.94618 11.1332 7.13254 11.1332C7.3189 11.1332 7.47016 10.9819 7.47016 10.7956V6.94539C7.47016 6.75903 7.3189 6.60778 7.13254 6.60778Z"
                                            fill="#FF3559"
                                            fillOpacity="0.7"
                                        />
                                        <path
                                            d="M1.5477 3.40785H1.95047C1.74205 3.73941 1.6186 4.13017 1.6186 4.55237V11.2115C1.6186 12.4168 2.59824 13.3966 3.80297 13.3966H10.4614C11.6668 13.3966 12.6465 12.4169 12.6465 11.2122V4.55237C12.6465 4.12984 12.5225 3.73897 12.3141 3.40718H12.7174C13.0044 3.40718 13.2373 3.1743 13.2373 2.88725C13.2373 2.6002 13.0044 2.36732 12.7174 2.36732H9.07133C8.84201 1.51137 8.06129 0.877761 7.13254 0.877761C6.20373 0.877761 5.423 1.51145 5.19372 2.368H1.5477C1.26065 2.368 1.02777 2.60087 1.02777 2.88793C1.02777 3.17474 1.25973 3.40785 1.5477 3.40785ZM11.6066 4.55237V11.2115C11.6066 11.842 11.0928 12.356 10.4614 12.356H3.80297C3.17165 12.356 2.65778 11.842 2.65778 11.2115V4.55237C2.65778 3.92111 3.17171 3.40718 3.80297 3.40718H10.4619C11.0934 3.40776 11.6066 3.92114 11.6066 4.55237ZM7.13254 1.91762C7.47635 1.91762 7.77904 2.09732 7.95138 2.368H6.3137C6.48604 2.09732 6.78873 1.91762 7.13254 1.91762ZM7.13254 6.42546C6.84549 6.42546 6.61261 6.65834 6.61261 6.94539V10.7956C6.61261 11.0826 6.84549 11.3155 7.13254 11.3155C7.41959 11.3155 7.65247 11.0826 7.65247 10.7956V6.94539C7.65247 6.65834 7.41959 6.42546 7.13254 6.42546Z"
                                            stroke="#FF3559"
                                            strokeOpacity="0.7"
                                            strokeWidth="0.364625"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="py-[12px] text-base leading-[20px] font-gilroy font-extrabold text-[#239D7F]">Total Price</p>

                <div className="flex items-center gap-x-3">
                    <div className="py-[7px] px-[22px] bg-[#35FF931F] rounded-[3.65px] w-[128.83px]">
                        <h5 className="text-lg leading-[23px] font-gilroy font-extrabold text-[#239D7F]">${cart_total}</h5>
                    </div>

                    <div className="font-poppins font-bold text-[7px] leading-[11px] text-[#FFFFFF70]">
                        {history.slice(0, 3).map((item, index) => (
                            <p className={`${index === 0 ? "opacity-[0.88]" : index === 1 ? "opacity-[0.27]" : "opacity-[0.06]"} `} key={index}>
                                <span className={`${item.type === "add" ? "text-[#35FF93]" : "text-[#FF3559]"} `}>
                                    {item.type === "add" ? "+" : "-"}$566
                                </span>{" "}
                                (Item {item.type === "add" ? "Added" : "Deteled"})
                            </p>
                        ))}
                        {/* <p className="opacity-[0.88]">
                            <span className="text-[#FF3559]">-$566</span> (Item Deleted)
                        </p>
                        <p className="opacity-[0.27]">
                            <span className="text-[#35FF93]">+$566</span> (Item Added)
                        </p>
                        <p className="opacity-[0.06]">
                            <span className="text-[#35FF93]">+$566</span> (Item Added)
                        </p> */}
                    </div>
                </div>

                <div className="mt-[26px] flex items-center gap-x-3 font-gilroy text-[13.58px] leading-[16.64px] font-extrabold">
                    <button className="py-2.5 w-full rounded-[3.65px] bg-[#FBCE02] text-[#534401]  hover:bg-opacity-80">Pay by Card</button>

                    <button className="py-2.5 w-full rounded-[3.65px] bg-[#35FF93] text-[#187041]  hover:bg-opacity-80">Pay by Bank</button>
                </div>
            </div>
        </div>
    );
};

export default LeftGrid;
