import React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../assets/Logo.png";
import { Input } from "../components/ui/input";

const NavBar = () => {
    return (
        <div
            className="fixed top-0 left-0 w-full flex flex-wrap items-center justify-around px-4 py-4 text-black bg-white z-50"
            // style={{
            //     background: 'transparent',
            //     backdropFilter: 'blur(10px)', // Optional: Add a blur effect for better visual appeal.
            // }}
        >
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-10 h-10" />
                <h1 className="text-xl font-bold tracking-wide sm:text-2xl">BarberQ</h1>
            </div>

            {/* Search Section */}
            <div className="flex flex-row border-black shadow-2xl rounded-3xl">
                <Input
                    type="Search"
                    className="w-80 rounded-tl-3xl rounded-bl-3xl"
                    placeholder="Search Barber"
                />
                <Button
                    type="search"
                    className="hover:bg-white border border-gray-600 rounded-tr-3xl rounded-br-3xl"
                >
                    Search
                </Button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:gap-6">
                <Button
                    variant="outline"
                    className="border-gray-600 text-black hover:bg-white hover:text-gray-900 px-4 py-2 text-sm sm:text-base rounded-3xl shadow-2xl"
                >
                    For Barber
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="border-gray-600 text-black hover:bg-white hover:text-gray-900 px-4 py-2 text-sm sm:text-base rounded-3xl shadow-2xl"
                        >
                            Menu
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="rounded-md bg-white shadow-2xl text-black">
                        <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">Login</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">My Profile</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">Customer Support</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">Team</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600 cursor-pointer">Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default NavBar;
