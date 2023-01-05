import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import useWindowScroll from "react-use/lib/useWindowScroll";
import { useIsMounted } from "../lib/hooks/use-is-mounted";
import Logo from "../assets/images/logo.png";

export function Header() {
  const windowScroll = useWindowScroll();
  const router = useRouter();
  const isMounted = useIsMounted();
  return (
    <nav
      className={`fixed top-0 z-30 flex w-full items-center justify-between px-4 transition-all duration-300 sm:px-6 lg:px-8 xl:px-10 3xl:px-12 ${
        isMounted && windowScroll.y > 10
          ? "h-20 bg-gradient-to-b from-white to-white/80 backdrop-blur"
          : "h-20 border-b-[0.5px] border-neutral-100 dark:border-neutral-700 bg-white"
      }`}
    >
      <div
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center space-x-5 cursor-pointer"
      >
        <Image alt="favicon" src={Logo} height={45} width={45}></Image>
        <p className="text-md lg:text-xl sl:text-xl font-bold">
          संरक्षण : An Endangered Birds Recognition Portal
        </p>
      </div>
    </nav>
  );
}
interface LayoutProps {
  className?: string;
}
export default function Layout({
  children,
  className = "",
}: React.PropsWithChildren<LayoutProps>) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main
        className={`mb-0 min-h-full px-4 pt-24 sm:px-6 sm:pt-24 sm:pb-5 lg:px-8 xl:px-10 3xl:px-12 ${className}`}
      >
        {children}
      </main>
    </div>
  );
}
