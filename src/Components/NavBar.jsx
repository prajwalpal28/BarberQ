import React from "react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "../assets/Logo.png";
import { Input } from "@/components/ui/input"


const NavBar = () => {
    return (
        <div
            className="flex flex-wrap items-center justify-around px-4 py-4 text-white bg-transparent"
            style={{
                background: 'transparent',
                backdropFilter: 'blur(10px)', // Optional: Add a blur effect for better visual appeal.
            }}
        >
            {/* Logo Section */}
            <div className="flex items-center gap-3">
                <img src={Logo} alt="Logo" className="w-10 h-10" />
                <h1 className="text-xl font-bold tracking-wide sm:text-2xl">BarberQ</h1>
            </div>

            <div className="flex flex-row border-2 rounded">
                <Input type="Search" placeholder="Search"/>
                <Button type="search">Search</Button>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-4 sm:mt-0 sm:gap-6">
                <Button
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-600 px-4 py-2 text-sm sm:text-base"
                >
                    For Barber
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-gray-600 px-4 py-2 text-sm sm:text-base"
                        >
                            Menu
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-gray-700 text-white">
                        <DropdownMenuItem className="hover:bg-gray-600">Login</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600">My Profile</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600">Customer Support</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600">Team</DropdownMenuItem>
                        <DropdownMenuItem className="hover:bg-gray-600">Subscription</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default NavBar;
