"use client";
import React, { FC, ReactNode } from "react";
import {
    Navbar,
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
import { ThemeSwitcher } from "./ThemeSwitcher";

export const UserDropdown = () => {
    return (
        <Dropdown placement="bottom-end">
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    color="secondary"
                    name="Jason Hughes"
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2" showDivider>
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">zoey@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings" showDivider>
                    Team Settings
                </DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations" showDivider>
                    Configurations
                </DropdownItem>
                <DropdownItem key="help_and_feedback" showDivider>
                    Help & Feedback
                </DropdownItem>
                <DropdownItem
                    key="logout"
                    color="danger"
                    showDivider
                    className="text-red-600"
                >
                    Log Out
                </DropdownItem>
                <DropdownItem
                    key="theme_switcher"
                    isReadOnly={true}>
                    <ThemeSwitcher />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};
