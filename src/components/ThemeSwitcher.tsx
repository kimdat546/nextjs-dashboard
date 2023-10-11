"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { Switch } from "@nextui-org/react";
import { BiSolidSun as SunIcon, BiSolidMoon as MoonIcon } from "react-icons/bi";

export const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, themes, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Switch
            size="lg"
            color="secondary"
            isSelected={theme === "purple"}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <MoonIcon className={className} />
                ) : (
                    <SunIcon className={className} />
                )
            }
            onValueChange={(value) => setTheme(value ? "purple" : "light")}
        />
    );
};
