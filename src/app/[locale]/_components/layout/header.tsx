'use client';

import { useState, type MouseEvent } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/navigation";
import Navbar from '@/app/[locale]/_components/layout/navbar'
import { FaAngleDown, FaCartArrowDown, FaUserAlt } from 'react-icons/fa'


const Header = () => {
    const t = useTranslations("Header");
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
    const isAccountMenuOpen = Boolean(anchorEl);

    const openAccountMenu = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const closeAccountMenu = () => {
        setAnchorEl(null);
    };

    const navigateToAccount = (href: "/account" | "/account/orders") => {
        closeAccountMenu();
        router.push(href);
    };

    return (
    <header className="shrink-0">
        <div className="bg-primary shadow-sm">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3 px-3 py-3 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,2fr)_minmax(0,1fr)] sm:gap-x-6 sm:px-6 sm:py-4 lg:px-8">
                <div className="min-w-0">
                    <span className="truncate text-amber-50 text-lg font-bold italic sm:text-2xl">
                        Nexa Shopping
                    </span>
                </div>

                <label className="col-span-2 min-w-0 sm:col-span-1 sm:col-start-2 sm:row-start-1">
                    <span className="sr-only">{t("searchProducts")}</span>
                    <input
                        type="search"
                        className="h-10 w-full min-w-0 rounded-sm border border-white bg-white/95 px-3 text-sm text-gray-900 placeholder:text-gray-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                        placeholder={t("searchProducts")}
                    />
                </label>

                <div className="flex items-center justify-self-end gap-3 text-sm sm:col-start-3 sm:row-start-1 sm:gap-4">
                    <Button
                        type="button"
                        id="account-menu-button"
                        aria-controls={isAccountMenuOpen ? "account-menu" : undefined}
                        aria-haspopup="menu"
                        aria-expanded={isAccountMenuOpen ? "true" : undefined}
                        onClick={openAccountMenu}
                        startIcon={<FaUserAlt aria-hidden="true" />}
                        endIcon={
                            <FaAngleDown
                                aria-hidden="true"
                                className="hidden sm:block"
                            />
                        }
                        sx={{
                            minHeight: 44,
                            color: "#fffbeb",
                            gap: 0.5,
                            padding: "8px",
                            textTransform: "none",
                            fontSize: "inherit",
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.12)",
                            },
                            "&:focus-visible": {
                                outline: "2px solid #ffffff",
                                outlineOffset: "2px",
                            },
                        }}
                    >
                        <span className="sr-only sm:not-sr-only">{t("userName")}</span>
                    </Button>
                    <Menu
                        id="account-menu"
                        anchorEl={anchorEl}
                        open={isAccountMenuOpen}
                        onClose={closeAccountMenu}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                        }}
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        slotProps={{
                            list: {
                                "aria-labelledby": "account-menu-button",
                            },
                            paper: {
                                sx: {
                                    mt: 1,
                                    minWidth: 176,
                                },
                            },
                        }}
                    >
                        <MenuItem
                            onClick={() => navigateToAccount("/account/orders")}
                        >
                            {t("myOrders")}
                        </MenuItem>
                        <MenuItem onClick={() => navigateToAccount("/account")}>
                            {t("account")}
                        </MenuItem>
                    </Menu>
                    <div className="flex items-center gap-2 text-amber-50">
                        <FaCartArrowDown aria-hidden="true" className="size-4" />
                        <span className="sr-only sm:not-sr-only">{t("cart")}</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <ThemeToggle />
                    </div> */}
                    {/* <div className="flex items-center gap-2">
                       <Suspense fallback={<span className="h-10 w-24" />}>
                           <LanguageSwitcher />
                       </Suspense>
                    </div> */}
                </div>
            </div>
        </div>
        <Navbar />
    </header>
)}

export default Header