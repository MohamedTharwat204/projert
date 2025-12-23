import { TbCalendarDollar } from "react-icons/tb";
import Myimg from "./assets/1.jpg"
import Myimg2 from "./assets/2.jpg"
import Myimg3 from "./assets/3.jpg"
import Myimg4 from "./assets/Chart.png"
export default function Overview() {

    return (
        <div id="Overview" className="p-10 gap-4 flex flex-col bg-kreme w-full " >
            <h1 className=" font-moh text-4xl">
                Overview
            </h1>
            <div className="w-full h-full md:h-30 gap-4 md:gap-6  grid grid-cols-1 md:flex  text-derkme">
                <div className="bg-derkme w-full md:w-99 h-full rounded-xl text-white">
                    <p className="px-4 pt-6">Current Balance</p>
                    <p className="p-6 text-3xl">$4,836.00</p>
                </div>
                <div className="bg-[#FFFFFF] w-full md:w-88  h-full rounded-xl ">
                    <p className="px-4  pt-6 text-mode">Income</p>
                    <p className="p-6 text-3xl">$3,814.25</p>

                </div>
                <div className="bg-[#FFFFFF] w-full  md:w-88  h-full rounded-xl ">
                    <p className="px-4 pt-6 text-mode"> Expenses</p>
                    <p className="p-6 text-3xl">$1,700.50</p>
                </div>
            </div>
            <div className="lg:flex w-full h-auto gap-6    grid grid-cols-1 ">
                <div className=" w-full lg:w-[60%] flex flex-col h-auto  gap-5">
                    <div className=" flex  flex-col w-full lg:w-169 h-auto md:h-54.5 p-8 bg-[#FFFFFF] gap-4 rounded-xl" >
                        <div className="flex justify-between ">
                            <p className=" text-derkme font-moh font-bold text-xl">Pots</p>
                            <p className="text-mode text-base">See Details {'>'}</p>
                        </div>

                        <div className="md:flex w-full h-auto gap-6 grid grid-cols-1   text-derkme" >
                            <div className="flex bg-kreme w-full md:w-70 lg:w-63 h-28  gap-3   items-center  rounded-xl">
                                <p className="">
                                    <TbCalendarDollar className="text-5xl pl-4  text-mode " />
                                </p>
                                <div className=" flex flex-col ">
                                    <p className=" text-mode "> Total Saved</p>
                                    <p className="text-3xl font-bold">$850</p>
                                </div>
                            </div>
                            <div className=" flex flex-col w-80 lg:w-70 h-26 gap-4 ">
                                <div className="flex  w-full h-13 gap-40 md:gap-6">
                                    <div className=" flex gap-5   w-50 h-12 ">
                                        <p className="w-1.5 h-full bg-mode rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode w-30">Savings</p>
                                            <p className="text-base font-bold ">$159</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-5  w-50 h-12 ">
                                        <p className="w-1.5 h-full bg-[#82C9D7] rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode">Gift</p>
                                            <p className="text-base font-bold ">$159</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex  w-fill h-13 gap-40 md:gap-6">
                                    <div className=" flex gap-5   w-50 h-12 ">
                                        <p className="w-1.5 h-full bg-mode rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode w-30">Concert Ticket</p>
                                            <p className="text-base font-bold ">$159</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-5  w-50 h-12 ">
                                        <p className="w-1.5 h-full bg-[#F2CDAC] rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode w-30">New Laptop</p>
                                            <p className="text-base font-bold ">$159</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex  flex-col w-full lg:w-169 h-auto md:h-auto p-8 bg-[#FFFFFF] gap-4 rounded-xl  text-derkme">
                        <div>
                            <div className="flex justify-between ">
                                <p className=" text-derkme font-moh font-bold text-xl">Transactions</p>
                                <p className="text-mode text-base">View All {'>'}</p>
                            </div>
                        </div>

                        <div className=" flex flex-col gap-9 ">
                            <div className=" flex gap-7 justify-between">
                                <div className="flex items-center gap-4 ">
                                    <p className="bg-kreme w-10 h-10 rounded-full"> </p>
                                    <p >Emma Richardson</p>
                                </div>
                                <div className=" flex flex-col">
                                    <p className="text-mode font-bold ">+$75.50</p>
                                    <p className="text-mode">19 Aug 2024</p>
                                </div>
                            </div>

                            <div className=" flex gap-7 justify-between">
                                <div className="flex items-center gap-4 ">
                                    <p className="bg-kreme w-10 h-10 rounded-full"> </p>
                                    <p >Savory Bites Bistro</p>
                                </div>
                                <div className=" flex flex-col">
                                    <p className="text-derkme font-bold ">-$55.50</p>
                                    <p className="text-mode">19 Aug 2024</p>
                                </div>
                            </div>

                            <div className=" flex gap-7 justify-between">
                                <div className="flex items-center gap-4 ">
                                    <img className="w-10 h-10 rounded-full" src={Myimg} />
                                    <p >Daniel Carter</p>
                                </div>
                                <div className=" flex flex-col">
                                    <p className="text-derkme font-bold ">-$42.30</p>
                                    <p className="text-mode">18 Aug 2024</p>
                                </div>
                            </div>

                            <div className=" flex gap-7 justify-between">
                                <div className="flex items-center gap-4 ">
                                    < img className="w-10 h-10 rounded-full" src={Myimg2} />
                                    <p>Sun Park</p>
                                </div>
                                <div className=" flex flex-col">
                                    <p className="text-mode font-bold ">+$120.00</p>
                                    <p className="text-mode">17 Aug 2024</p>
                                </div>
                            </div>

                            <div className=" flex gap-7 justify-between">
                                <div className="flex items-center gap-4 ">
                                    < img className=" w-10 h-10 rounded-full" src={Myimg3} />
                                    <p >Urban Services Hub</p>
                                </div>
                                <div className=" flex flex-col">
                                    <p className="text-derkme font-bold ">-$65.00</p>
                                    <p className="text-mode">17 Aug 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" w-full lg:w-aute  lg:flex flex-col grid grid-cols-1 gap-4 ">
                    <div className="  flex  flex-col w-full h-auto  p-9 bg-[#FFFFFF] gap-4 rounded-xl  text-derkme ">
                        <div className="flex   justify-between ">
                            <p className=" text-derkme font-moh font-bold text-xl">Budgets</p>
                            <p className="text-mode text-base">See Details {'>'}</p>
                        </div>
                        <div className="md:flex  md:p-6 lg:p-0 gap-4 md:justify-between md:pr-6  h-auto  grid grid-cols-1  ">
                            <div className="pt-8 md:w-140 lg:w-62 h-70  lg:h-auto justify-items-center"> <img src={Myimg4} /></div>

                            <div className=" flex  md:flex-col w-full  md:w-27 lg:w-27 h-auto md:h-60 gap-4 ">
                                <div className="flex  flex-col w-full  gap-4 ">
                                    <div className=" flex gap-5  w-40  h-12 ">
                                        <p className="w-1.5 h-full bg-mode rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode ">Entertainment</p>
                                            <p className="text-base font-bold ">$50.00</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-5   h-12 ">
                                        <p className="w-1.5 h-full bg-[#82C9D7] rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode">Bills</p>
                                            <p className="text-base font-bold ">$750.00</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col  w-full   gap-4">
                                    <div className=" flex gap-5    h-12 ">
                                        <p className="w-1.5 h-full bg-mode rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode ">Dining Out</p>
                                            <p className="text-base font-bold ">$75.00</p>
                                        </div>
                                    </div>
                                    <div className=" flex gap-5 w-35  h-12 ">
                                        <p className="w-1.5 h-full bg-[#F2CDAC] rounded-2xl"> </p>
                                        <div className=" flex flex-col">
                                            <p className="text-mode ">Personal Care</p>
                                            <p className="text-base font-bold ">$100.00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className=" flex flex-col   w-full h-auto  p-9 bg-[#FFFFFF] gap-4 rounded-xl">

                        <div className="flex   justify-between ">

                            <p className=" text-derkme font-moh font-bold text-xl">Recurring Bills</p>
                            <p className="text-mode text-base">See Details {'>'}</p>
                        </div>
                        <div className=" flex flex-col gap-3">
                            <div className=" pl-1 bg-mode rounded-xl h-15 w-full" >
                                <div className=" bg-kreme rounded-xl h-15 w-full flex items-center p-2 justify-between">
                                    <p className=" text-mode">Paid Bills</p>
                                    <p className=" text-derkme font-moh font-bold">$190.00</p>
                                </div>
                            </div>
                            <div className=" pl-1 bg-[#F2CDAC] rounded-xl h-15 w-full" >
                                <div className=" bg-kreme rounded-xl h-15 w-full flex items-center p-2 justify-between">
                                    <p className=" text-mode"> Total Upcoming</p>
                                    <p className=" text-derkme font-moh font-bold">$194.98</p>
                                </div>
                            </div>
                            <div className=" pl-1 bg-[#82C9D7] rounded-xl h-15 w-full" >
                                <div className=" bg-kreme rounded-xl h-15 w-full flex items-center p-2 justify-between">
                                    <p className=" text-mode">Due Soon</p>
                                    <p className=" text-derkme font-moh font-bold">$59.98</p>

                                </div>
                            </div>

                        </div>

                    </div>



                </div>

            </div>

        </div>
    )
}