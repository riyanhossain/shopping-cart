import React from "react";
import "./App.css";
import LeftGrid from "./components/LeftGrid";
import RightGrid from "./components/RightGrid";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <main className="px-2 w-[80%] max-w-[1920px] mx-auto overflow-hidden">
                <section className="my-[22px]   bg py-[22px] px-5 xl:px-[52px] rounded-[10px] relative">
                    {/* white elispe  */}
                    <div className="w-[187px] h-[187px] rounded-full bg-[rgba(255,255,255,0.25)] blur-[119.5px] absolute -left-[84px] -top-[149px]"></div>

                    {/* green elipse */}
                    <div className="w-[564px] h-[564px] rounded-full bg-[#2EA08038] blur-[200.497px] absolute -left-[171px] top-[414px]"></div>

                    {/* head row */}
                    <div className="flex justify-between items-center">
                        <h3 className="font-poppins font-medium text-[15px] leading-[23px] opacity-10 text-white">Servername, Version V1</h3>

                        <button className="w-8 h-8 rounded-md bg-[#9797977D] flex justify-center items-center hover:opacity-80">
                            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.501888 0.474905C0.318761 0.658087 0.215886 0.906501 0.215886 1.16552C0.215886 1.42454 0.318761 1.67295 0.501888 1.85614L3.95594 5.31019L0.501888 8.76425C0.408591 8.85435 0.334174 8.96214 0.28298 9.08132C0.231785 9.20049 0.204838 9.32867 0.203711 9.45837C0.202584 9.58808 0.227299 9.7167 0.276415 9.83675C0.325531 9.9568 0.398063 10.0659 0.48978 10.1576C0.581496 10.2493 0.690561 10.3218 0.810609 10.3709C0.930657 10.4201 1.05929 10.4448 1.18899 10.4437C1.31869 10.4425 1.44687 10.4156 1.56605 10.3644C1.68522 10.3132 1.79301 10.2388 1.88312 10.1455L5.33717 6.69142L8.79123 10.1455C8.97546 10.3234 9.22221 10.4219 9.47833 10.4196C9.73445 10.4174 9.97945 10.3147 10.1606 10.1336C10.3417 9.95246 10.4444 9.70746 10.4466 9.45134C10.4489 9.19522 10.3504 8.94848 10.1725 8.76425L6.7184 5.31019L10.1725 1.85614C10.3504 1.6719 10.4489 1.42516 10.4466 1.16904C10.4444 0.912915 10.3417 0.667915 10.1606 0.486804C9.97945 0.305693 9.73445 0.202961 9.47833 0.200735C9.22221 0.19851 8.97546 0.296969 8.79123 0.474905L5.33717 3.92896L1.88312 0.474905C1.69994 0.291779 1.45152 0.188904 1.1925 0.188904C0.933484 0.188904 0.68507 0.291779 0.501888 0.474905Z"
                                    fill="#111217"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* grid */}
                    <div className="grid grid-cols-1  xl:grid-cols-[369.49px_1fr] gap-[56px] mt-[56px]">
                        {/* left */}
                        <LeftGrid />

                        {/* right */}
                        <RightGrid />
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default App;
