// import Imgloge from './assets/logo.svg';
import logo from "./assets/logo.svg";
import { GoHomeFill } from "react-icons/go";
import { IoSwapVerticalOutline } from "react-icons/io5";
import { GrAnalytics } from "react-icons/gr";
import { MdOutlineWallet } from "react-icons/md";
import { TbReceipt } from "react-icons/tb";
import { HiMiniBackward } from "react-icons/hi2";


export default function Many() {
    let divhom = ' flex md:flex-col lg:flex-row  md:gap-1 lg:gap-4 px-5 py-6 text-kreme items-center group hover:bg-kreme hover:mt-2 lg:hover:mr-4 hover:rounded-t-2xl  lg:hover:rounded-tl-none  lg:hover:rounded-r-2xl ';
    let icon = 'text-2xl md:text-1xl  lg:text-3xl text-[#B3B3B3] group-hover:text-[#277C78] ';
    let prgraf = 'group-hover:text-derkme font-moh font-bold font-base hidden md:block lg:block'
    return (
        <div className="rounded-t-2xl fixed bottom-0 lg:relative w-full h-15 md:h-25 lg:w-90 lg:h-255 bg-derkme lg:rounded-r-2xl lg:rounded-tl-none flex flex-row lg:flex-col  ">

            <img src={logo} className='py-12 px-9 w-50 hidden lg:block' />

            <div className='text-1xl md:text-1xl   justify-center lg:justify-normal  lg:text-1xl  gap-10 md:gap-6 lg:gap-1 grow flex flex-row w-full duration-500  lg:flex-col'>


               <a href="http://#Overview">
                    <div  className={divhom}  >
                        < GoHomeFill className={icon} />
                        <p className={prgraf}> Overview</p>
                    </div>
               </a>


               <a href="http://#Transactions" >
                    <div className={divhom}>
                        <IoSwapVerticalOutline className={icon} />
                        <p className={prgraf}> Transactions</p>
                    </div>
               </a>

                <div className={divhom}>
                    < GrAnalytics className={icon} />
                    <p className={prgraf}> Budgets</p>
                </div>

                <div className={divhom}>
                    < MdOutlineWallet className={icon} />
                    <p className={prgraf}> Pots</p>
                </div>

                <div className={divhom} >
                    < TbReceipt className={icon} />
                    <p className={prgraf}> Recurring Bills</p>
                </div>

            </div>
            <div className="  w-60 py-16 pr-4  hidden lg:block text-base">
                <div className=' px-8 py-4 flex w-full gap-3 text-kreme items-center group hover:bg-kreme hover:mr-4 hover:rounded-r-2xl  '>
                    < HiMiniBackward className={icon} />
                    <p className={prgraf}> Minimize Menu</p>
                </div>
            </div>


        </div>
    )


}