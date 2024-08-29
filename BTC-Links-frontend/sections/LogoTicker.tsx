"use client";

import ZKBtc from '@/assets/zkbtc.png'
import ParticleAuth from '@/assets/ParticleAuth.png'
import Bevm from '@/assets/BEVM.png'
import BobChain from '@/assets/BobChain.png'
import PwrBlack from '@/assets/PwrBlack.png'
import Bitcoin from '@/assets/Bitcoin+.png'
import Zulu from '@/assets/zulu-brand.png'
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={PwrBlack}
              alt="Pwr Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ZKBtc}
              alt="ZKBtc Logo"
              className="logo-ticker-image bg-black"
            />
            <Image
              src={ParticleAuth}
              alt="ParticleAuth Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Bevm}
              alt="Bevm Logo"
              className="logo-ticker-image"
            />

            <Image
              src={Zulu}
              alt="Zulu Logo"
              className="logo-ticker-image"
            />

            <Image
              src={Bitcoin}
              alt="BitcoinLogo"
              className="logo-ticker-image bg-black"
            />

            <Image
              src={PwrBlack}
              alt="Pwr Logo"
              className="logo-ticker-image"
            />
            <Image
              src={ZKBtc}
              alt="ZKBtc Logo"
              className="logo-ticker-image bg-black"
            />
            <Image
              src={ParticleAuth}
              alt="ParticleAuth Logo"
              className="logo-ticker-image"
            />
            <Image
              src={Bevm}
              alt="Bevm Logo"
              className="logo-ticker-image"
            />

            <Image
              src={BobChain}
              alt="BobChain Logo"
              className="logo-ticker-image"
            />

            <Image
              src={Bitcoin}
              alt="BitcoinLogo"
              className="logo-ticker-image bg-black"
            />

          </motion.div>
        </div>
      </div>
    </div>
  );
};
