"use client";
import React, { FC, ReactNode } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Link,
    Badge,
    Input,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
    DropdownSection,
} from "@nextui-org/react";
import { IoNotificationsSharp as NotificationIcon } from "react-icons/io5";

export const NotificationsDropdown = () => {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <NavbarItem className="flex">
                    <Badge color="danger" content={5} shape="circle">
                        <NotificationIcon fontSize={24} className="text-icon" />
                    </Badge>
                </NavbarItem>
            </DropdownTrigger>
            <DropdownMenu aria-label="notification dropdown" variant="flat">
                <DropdownSection
                    title="Notificacions"
                    classNames={{
                        base: "w-[340px] max-w-[340px] overflow-y-auto",
                        heading: "text-default-500",
                    }}
                >
                    <DropdownItem
                        key="1"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        classNames={{
                            base: "hover:bg-default-500/10 h-[70px]",
                            title: "font-[600] text-base text-default-900",
                            description: "text-default-500",
                        }}
                    >
                        📣 Edit your information
                    </DropdownItem>
                    <DropdownItem
                        key="2"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        classNames={{
                            base: "hover:bg-default-500/10 h-[70px]",
                            title: "font-[600] text-base text-default-900",
                            description: "text-default-500",
                        }}
                    >
                        🚀 Say goodbye to paper receipts!
                    </DropdownItem>
                    <DropdownItem
                        key="3"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        classNames={{
                            base: "hover:bg-default-500/10 h-[70px]",
                            title: "font-[600] text-base text-default-900",
                            description: "text-default-500",
                        }}
                    >
                        📣 Edit your information
                    </DropdownItem>
                    <DropdownItem
                        key="4"
                        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        classNames={{
                            base: "hover:bg-default-500/10 h-[70px]",
                            title: "font-[600] text-base text-default-900",
                            description: "text-default-500",
                        }}
                    >
                        🚀 Say goodbye to paper receipts!
                    </DropdownItem>
                </DropdownSection>
            </DropdownMenu>
        </Dropdown>
    );
};
