
import { useTranslations } from "next-intl";
//import { useRouter } from "next/navigation";
//import {toast} from "react-hot-toast";
import getCookie from "@/app/Cookies/ClientCookie";
import Link from "next/link";

const NavItems = () => {     
    
    const t = useTranslations('Navbar');
    
    const memo = getCookie("token");
    
    //const PROTECTED_ROUTES = ["/menu-games", "/menu-games/:path*"];
  return (
   <div className="w-[600px] h-full flex flex-row items-center justify-between">
                                         <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[10px] rounded-full text-gray-200">
                                         
                                           <Link  href="/menu/entertainment"  
                                           
                                           className="cursor-pointer mx-auto  p-1  sm:text-sm md:text-xl">
                                           {t('cooperation')}
                                           </Link>
                                         {memo && (  <Link  href="/menu/entertainment"
                                         //onClick={(e)=>{if(memo){router.push("/menu/entertainment")}else{toast.success(t('alert'),{duration:2000, position:"top-center", icon:"😍"}); setTimeout(()=>{router.push("/log-in")},2000)}}} 
                                           
                                           className="cursor-pointer px-2 mx-auto sm:text-sm md:text-xl animate-in -mr-2">
                                            { t('game')}
                                           </Link>)}
                                          { memo && (  <Link  href="/menu/entertainment"
                                           
                                           className=" cursor-pointer mx-auto px-2 sm:text-sm md:text-xl">
                                             {t('events')}
                                           </Link>)}
                                         </div>
                                         
                               
   
                       </div>
  )
}

export default NavItems
