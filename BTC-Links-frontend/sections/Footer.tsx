import Image from "next/image";
import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialLinkedIn />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 BTC-Links, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
