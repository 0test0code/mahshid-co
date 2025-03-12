"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {toast} from "react-hot-toast";
import getCookie from "@/app/Cookies/ClientCookie";

const NavItems = () => {     
    
    const t = useTranslations('Navbar');
    
    const memo = getCookie("token");
    const router = useRouter();
    //const PROTECTED_ROUTES = ["/menu-games", "/menu-games/:path*"];
  return (
   <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
                                         <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
                                         
                                           <div id="cooperation" onClick={(e)=>{ if(memo){router.push("/menu/entertainment")}else{toast.success(t('alert'),{duration:2000, position:"top-center", icon:"😍"}); setTimeout(()=>{router.push("/log-in")},2000)}}} 
                                           
                                           className="cursor-pointer mx-auto  p-1 sm:text-sm md:text-xl">
                                           {t('cooperation')}
                                           </div>
                                           <div id="cooperation" onClick={(e)=>{if(memo){router.push("/menu/entertainment")}else{toast.success(t('alert'),{duration:2000, position:"top-center", icon:"😍"}); setTimeout(()=>{router.push("/log-in")},2000)}}} 
                                           
                                           className="cursor-pointer px-2 mx-auto sm:text-sm md:text-xl animate-in -mr-2">
                                            { t('game')}
                                           </div>
                                           <div id="cooperation" onClick={(e)=>{if(memo){router.push("/menu/entertainment")}else{toast.success(t('alert'),{duration:2000, position:"top-center", icon:"😍"}); setTimeout(()=>{router.push("/log-in")},2000)}}} 
                                           
                                           className=" cursor-pointer mx-auto px-2 sm:text-sm md:text-xl">
                                             {t('events')}
                                           </div>
                                         </div>
                                         
                               
   
                       </div>
  )
}

export default NavItems
