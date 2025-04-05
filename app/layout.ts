


import type { Metadata } from "next";




// const inter = Inter({ subsets: ["latin"] });
export const runtime = process.env.NEXT_PUBLIC_RUNTIME || 'edge';
export const metadata: Metadata = {
    title: "Mahshid group",
    description: "نخ کوه شایسته دلار عمان طلا بورس اخبار اقتصادstring yarn knit knitting wool thread Mount Mountain Mountaineer mountaineering mountainous area. Outdoor activity mountainous region Spindle spinning wheel lathe spindle woolen reel pulley spool thread",
};


interface RootLayoutProps {
    children: React.ReactNode;

}

export default async function RootLayout({
    children
}: Readonly<RootLayoutProps>
    /* {
      children: React.ReactNode;
      params: {locale: string};
    } */
) {
    return  children ;

}
