"use client";
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { themeKeys } from "../../nextui.config";

export function Providers({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    return (
        <NextUIProvider navigate={router.push}>
            <NextThemesProvider
                attribute="class"
                defaultTheme="purple"
                storageKey="nextui-theme"
                themes={themeKeys}
            >
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    );
}
