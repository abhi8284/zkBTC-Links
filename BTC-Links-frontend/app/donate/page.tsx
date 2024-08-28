"use client"
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaArrowRightLong } from "react-icons/fa6";
import { Label } from '@/components/ui/label';
import { BTCTokenList, BTCTokenListType } from '@/constants/TokenList';
import { Input } from "@/components/ui/input";
import { Button } from '@/components/ui/button';
import { HexColorPicker } from 'react-colorful';

const Donatepage = () => {
    const [selectedToken, setSelectedToken] = useState<BTCTokenListType>();
    const [amount, setAmount] = useState<number>(0);
    const handleSelectedToken = (selectedNetwork: string) => {
        const network = BTCTokenList.find(
            (network) => network.name === selectedNetwork
        );
        setSelectedToken(network);
    };

    const handleDonate = () => {
        if (!selectedToken || (amount === 0)) return;
        let input = {
            selectedToken,
            amount,
        }
        console.log("input", input);

    }

    const [buttonColor, setButtonColor] = useState("#000");

    return (
        <div>
            <Card className="w-[450px]">
                <CardHeader>
                    <CardTitle className="text-center">Donate using BRC-20 and Runes</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                    <div className="flex flex-row justify-center items-center gap-8">
                        <Image
                            className='w-full'
                            src="https://t4.ftcdn.net/jpg/05/76/12/63/360_F_576126362_ll2tqdvXs27cDRRovBTmFCkPM9iX68iL.jpg"
                            alt="Bitcoin"
                            width={340}
                            height={340}
                        />
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
                        <Label htmlFor="Amount">Donation Amount</Label>
                        <Input type="number" id="Amount" value={amount} placeholder="Enter Amount" onChange={(e) => {
                            const value = Number(e.target.value);
                            setAmount(value);
                        }} />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button
                        className='w-full'
                        onClick={handleDonate}
                        style={{ backgroundColor: `${buttonColor}` }}
                    >
                        {" "}
                        Donate
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

export default Donatepage;