import React, { FC, ReactNode, useEffect } from "react";
import { useDashboardStore } from "@/store/dashboardStore";
import { useLockedBody } from "@/hooks/useBodyLock";
import { CompaniesDropdown } from "./CompaniesDropdown";
import { LinkProps } from "next/link";
import { NavLink } from "./NavLink";
import { AiFillHome, AiFillSetting } from "react-icons/ai";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { PiBatteryVerticalFullBold } from "react-icons/pi";
import { MdPayments } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import {
    BsBagHeartFill,
    BsFillPeopleFill,
    BsFillFileMusicFill,
} from "react-icons/bs";
import { BiCodeAlt, BiFilterAlt } from "react-icons/bi";
import { SiVitest } from "react-icons/si";
import { Tooltip, Button, Avatar } from "@nextui-org/react";
import { useWindowSize } from "@uidotdev/usehooks";

const SideBarItem = ({
    icon,
    label,
    href,
}: {
    icon: ReactNode;
    label: string;
} & LinkProps) => {
    return (
        <NavLink href={href}>
            <div className="flex items-center gap-unit-3 min-h-unit-11 px-unit-3 rounded-large hover:opacity-80 transition-all hover:bg-default-200 group-[.active]:bg-primary-500">
                <div className="flex text-large text-default-500">{icon}</div>
                <div className="text-default-900">{label}</div>
            </div>
        </NavLink>
    );
};

const SideBarMenu = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <div className="flex flex-col gap-unit-2">
        <div className="text-tiny leading-3">{title}</div>
        <div className="flex flex-col gap-unit-2">{children}</div>
    </div>
);

const SideBarBody = () => (
    <div className="flex flex-col flex-1 gap-unit-6 mt-unit-9 px-unit-2">
        <SideBarItem label="Home" icon={<AiFillHome />} href="/" />
        <SideBarMenu title="Main Menu">
            <SideBarItem
                label="Accounts"
                icon={<RiAccountPinBoxFill />}
                href="/accounts"
            />
            <SideBarItem
                label="Musics"
                icon={<BsFillFileMusicFill />}
                href="/musics"
            />
            <SideBarItem
                label="Payments"
                icon={<MdPayments />}
                href="/payments"
            />
            <SideBarItem
                label="Balances"
                icon={<PiBatteryVerticalFullBold />}
                href="/balances"
            />
            <SideBarItem
                label="Customers"
                icon={<BsFillPeopleFill />}
                href="/customers"
            />
            <SideBarItem
                label="Products"
                icon={<BsBagHeartFill />}
                href="/products"
            />
            <SideBarItem
                label="Reports"
                icon={<TbReportSearch />}
                href="/reports"
            />
        </SideBarMenu>
        <SideBarMenu title="General">
            <SideBarItem
                label="Developers"
                icon={<BiCodeAlt />}
                href="/developers"
            />
            <SideBarItem
                label="View Test Data"
                icon={<SiVitest />}
                href="/test-data"
            />
            <SideBarItem
                label="Settings"
                icon={<AiFillSetting />}
                href="/settings"
            />
        </SideBarMenu>
    </div>
);

const SideBarFooter = () => (
    <div className="flex justify-center align-middle gap-unit-3 px-unit-2">
        <Tooltip showArrow={true} content="Settings" color="primary">
            <Button
                isIconOnly
                color="danger"
                className="w-unit-8 h-unit-8 min-w-fit"
            >
                <AiFillSetting className="text-large" />
            </Button>
        </Tooltip>
        <Tooltip showArrow={true} content="Adjustments" color="primary">
            <Button
                isIconOnly
                color="danger"
                className="w-unit-8 h-unit-8 min-w-fit"
            >
                <BiFilterAlt className="text-large" />
            </Button>
        </Tooltip>
        <Tooltip showArrow={true} content="Profile" color="primary">
            <div className="bg-danger p-unit-1 rounded-md w-unit-8 h-unit-8 relative">
                <Avatar
                    src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                    size="sm"
                    className="w-unit-6 h-unit-6"
                />
            </div>
        </Tooltip>
    </div>
);

export const SideBar = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex items-center px-unit-6">
                    <CompaniesDropdown />
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-between gap-unit-3">
                <SideBarBody />
                <SideBarFooter />
            </div>
        </>
    );
};

export const SideBarWrapper: FC = () => {
    const { width } = useWindowSize();
    const isSidebarOpen = useDashboardStore((state) => state.isSidebarOpen);
    const toggleSidebar = useDashboardStore((state) => state.toggleSidebar);
    const [locked, setLocked] = useLockedBody(isSidebarOpen);

    useEffect(() => {
        if (width) {
            if (width < 1024 && isSidebarOpen) {
                toggleSidebar();
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [width]);

    return (
        <aside className="flex h-screen relative overflow-hidden z-50">
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 transition-opacity z-40 lg:hidden"
                    onClick={toggleSidebar}
                />
            )}
            <div
                className={`flex flex-col fixed inset-y-0 left-0 w-64 px-unit-3 py-unit-6 border-r-small bg-default-50 border-divider transition duration-300 transform z-50 overflow-y-auto no-scrollbar lg:static lg:translate-x-0 ${
                    isSidebarOpen
                        ? "translate-x-0 ease-out"
                        : "-translate-x-full ease-in"
                }`}
            >
                <SideBar />
            </div>
        </aside>
    );
};
