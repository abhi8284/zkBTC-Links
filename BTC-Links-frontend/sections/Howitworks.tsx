"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
    {
        id: 1,
        title: "Choose template from the give templates",
        monthlyPrice: 0,
        buttonText: "Checkout the templates",
        popular: false,
        inverse: false,
        features: [
            "Choose templates",
            "Choose Bridging Assets",
            "Choose Donation using BRC20",
            "Choose Donation using Runes",
        ],
    },
    {
        id: 2,
        title: "Edit your settings in the template",
        monthlyPrice: 9,
        buttonText: "Edit the template",
        popular: false,
        inverse: true,
        features: [
            "Edit your templates",
            "Update the network settings",
            "Choose token from a variey of tokens",
            "Upgrage the color according to preferences",
        ],
    },
    {
        id: 3,
        title: "Voila Done!!",
        monthlyPrice: 19,
        buttonText: "Deploy now 🔥",
        popular: false,
        inverse: false,
        features: [
            "Done with the template",
            "Deploy it and share on the Social Media",
            //TODO: Add more fields @kamal
        ],
    },
];

export const Howitworks = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="section-heading">
                    <h2 className="section-title">How to Use</h2>
                    <p className="section-description mt-5">
                        Fairly simple, Choose a template, modify it and Voila Done 🎉
                    </p>
                </div>
                <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
                    {pricingTiers.map(({ id, title, monthlyPrice, buttonText, popular, inverse, features }) => (
                        <div
                            className={twMerge("card", inverse === true && "border-black bg-black text-white")}
                            key={id}
                        >
                            <div className="flex justify-between">
                                <h3
                                    className={twMerge(
                                        "text-lg font-bold text-black/50",
                                        inverse === true && "text-white/60"
                                    )}
                                >
                                    {title}
                                </h3>
                                {popular === true && (
                                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                                        <motion.span
                                            animate={{
                                                backgroundPositionX: "100%",
                                            }}
                                            transition={{
                                                duration: 1,
                                                repeat: Infinity,
                                                ease: "linear",
                                                repeatType: "loop",
                                            }}
                                            className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                                        >
                                            Popular
                                        </motion.span>
                                    </div>
                                )}
                            </div>
                            <button
                                className={twMerge(
                                    "btn btn-primary w-full mt-[30px]",
                                    inverse === true && "bg-white text-black"
                                )}
                            >
                                {buttonText}
                            </button>
                            <ul className="flex flex-col gap-5 mt-8">
                                {features.map((feature) => (
                                    <li className="text-sm flex items-center gap-4" key={id}>
                                        <CheckIcon className="h-6 w-6" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
