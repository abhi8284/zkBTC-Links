"use client";
import Image from "next/image";
import React, { useMemo, useState } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { FaArrowRightLong } from "react-icons/fa6";
import { NetworkList, NetworkLists } from "@/constants/NetworkList";
import { HexColorPicker } from "react-colorful";
import { BTCTokenList, BTCTokenListType } from "@/constants/TokenList";

const BridgePage = () => {
    const [selectedToken, setSelectedToken] = useState<BTCTokenListType>();
    const [amount, setAmount] = useState<number>(0);

    const handleSelectedToken = (selectedNetwork: string) => {
        const network = BTCTokenList.find(
            (network) => network.name === selectedNetwork
        );
        setSelectedToken(network);
    };

    const handleBridge = () => {
        if (!selectedToken || (amount === 0)) return;
        let input = {
            selectedToken,
            amount,
        }
        console.log("input", input);

    };

    const [buttonColor, setButtonColor] = useState("#000");

    return (
        <div>
            <Card className="w-[550px]">
                <CardHeader>
                    <CardTitle className="text-center">Bridge</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-row justify-center items-center gap-8">
                        <div className="flex gap-2 items-center">
                            <Image
                                src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400"
                                alt="Bitcoin"
                                width={40}
                                height={40}
                            />
                            <h3 className="text-xl  m-0 text-muted-foreground">Bitcoin </h3>
                        </div>
                        <FaArrowRightLong size={24} />

                        <div className="flex gap-2 items-center">
                            <Image
                                src="https://assets.coingecko.com/coins/images/37804/standard/WBTC.png?1715591247"
                                alt="BEVM"
                                width={40}
                                height={40}
                            />
                            <h3 className="text-xl m-0 text-muted-foreground">BEVM </h3>
                        </div>
                    </div>

                    <div>
                        <div className="flex flex-col gap-2 w-full">
                            <Label htmlFor="token">Select Token</Label>
                            <Select onValueChange={handleSelectedToken}>
                                <SelectTrigger id="token">
                                    <SelectValue placeholder="Select" />
                                </SelectTrigger>
                                <SelectContent position="popper">
                                    {BTCTokenList.map((token) => (
                                        <SelectItem key={token.address} value={token.name}>
                                            <div className="flex gap-2 items-center">
                                                <Image src={token.logoURI} alt={token.name} width={24} height={24} />
                                                <h3 className="text-[16px] capitalize m-0 text-muted-foreground"> {token.name}</h3>
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid w-full  items-center gap-2">
                        <Label htmlFor="Amount">Amount</Label>
                        <Input type="number" id="Amount" value={amount} placeholder="Enter Amount" onChange={(e) => {
                            const value = Number(e.target.value);
                            setAmount(value);
                        }} />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        onClick={handleBridge}
                        style={{ backgroundColor: `${buttonColor}` }}
                    >
                        {" "}
                        Bridge
                    </Button>
                </CardFooter>
            </Card>

            <HexColorPicker
                color={buttonColor}
                onChange={(newColor) => {
                    console.log("new color: " + newColor);

                    setButtonColor(newColor);
                }}
            />
        </div>
    );
};

export default BridgePage;
