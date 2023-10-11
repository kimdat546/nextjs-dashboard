"use client";
import React, { useState, ReactNode, FC } from "react";
import { SideBar, NavbarWrapper, SideBarWrapper } from "@/components";

interface DashboardLayoutProps {
    children: ReactNode;
}

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen relative overflow-hidden">
            <SideBarWrapper />
            <NavbarWrapper>{children}</NavbarWrapper>
        </div>
    );
};
