"use client";
import React, { FC, ReactNode } from "react";
import {
    Navbar as NavbarComponent,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import { UserDropdown } from "./UserDropdown";
import { RiSearchLine as SearchIcon } from "react-icons/ri";
import { MdContactSupport as SupportIcon } from "react-icons/md";
import { RiMenu2Line as MenuIcon } from "react-icons/ri";
import { AiFillGithub as GithubIcon } from "react-icons/ai";
import { NotificationsDropdown } from "./NotificationsDropdown";
import { useDashboardStore } from "@/store/dashboardStore";

interface NavbarWrapperProps {
    children: ReactNode;
}

export const Navbar = () => {
    const toggleSidebar = useDashboardStore((state) => state.toggleSidebar);
    return (
        <NavbarComponent isBordered maxWidth="full" className="shadow-sm">
            <NavbarContent as="div" className="!justify-between">
                <NavbarContent as="div" justify="center" className="lg:hidden">
                    <MenuIcon
                        fontSize={24}
                        color="#697177"
                        onClick={toggleSidebar}
                    />
                </NavbarContent>
                <NavbarContent as="div" className="hidden lg:flex">
                    <Input
                        classNames={{
                            base: "h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper:
                                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Search..."
                        startContent={
                            <SearchIcon fontSize={18} color="#697177" />
                        }
                        type="search"
                        isClearable
                    />
                </NavbarContent>
                <NavbarContent as="div" justify="center">
                    <NavbarContent as="div" justify="center">
                        <NotificationsDropdown />
                    </NavbarContent>
                    <NavbarContent as="div" justify="center">
                        <SupportIcon fontSize={24} className="text-icon" />
                    </NavbarContent>
                    <NavbarContent as="div" justify="center">
                        <GithubIcon fontSize={24} className="text-icon" />
                    </NavbarContent>
                    <NavbarContent as="div" justify="center">
                        <UserDropdown />
                    </NavbarContent>
                </NavbarContent>
            </NavbarContent>
        </NavbarComponent>
    );
};

export const NavbarWrapper: FC<NavbarWrapperProps> = ({ children }) => {
    return (
        <div className="flex flex-col flex-1 w-full">
            <main className="h-full overflow-y-auto">
                <Navbar />
                <div className="py-unit-6 px-unit-8">{children}</div>
            </main>
        </div>
    );
};
