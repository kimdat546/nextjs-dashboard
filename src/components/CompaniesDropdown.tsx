"use client";
import React, { FC, ReactNode } from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { IoNotificationsSharp as NotificationIcon } from "react-icons/io5";

export const CompaniesDropdown = () => {
    return (
        <AvatarGroup isBordered>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
    );
};
