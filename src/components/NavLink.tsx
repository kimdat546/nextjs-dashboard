"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";
import cx from "classnames";

interface NavLinkProps {
    className?: string;
    children: ReactNode;
}

export const NavLink: FC<NavLinkProps & LinkProps> = ({
    className,
    href,
    children,
    ...rest
}) => {
    const pathName = usePathname();
    const isActive = pathName === href;
    return (
        <Link
            href={href}
            {...rest}
            className={cx(
                "group",
                {
                    active: isActive,
                },
                className
            )}
        >
            {children}
        </Link>
    );
};
