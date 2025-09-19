"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const languages = [
  { name: "English - EN", href: "https://smallseotools.com/", active: true },
  { name: "русский - RU", href: "https://smallseotools.com/ru/" },
  { name: "Español - ES", href: "https://smallseotools.com/es/" },
  { name: "日本語 - JA", href: "https://smallseotools.com/ja/" },
  { name: "Italiano - IT", href: "https://smallseotools.com/it/" },
  { name: "Français - FR", href: "https://smallseotools.com/fr/" },
  { name: "Português - PT", href: "https://smallseotools.com/pt/" },
  { name: "Deutsche - DE", href: "https://smallseotools.com/de/" },
  { name: "中文 - ZH", href: "https://smallseotools.com/zh/" },
  { name: "عربى - AR", href: "https://smallseotools.com/ar/" },
  { name: "Indonesian - ID", href: "https://smallseotools.com/id/" },
  { name: "Türk - TR", href: "https://smallseotools.com/tr/" },
  { name: "Korean - KO", href: "https://smallseotools.com/ko/" },
  { name: "Finnish - FI", href: "https://smallseotools.com/fi/" },
  { name: "Vietnamese - VI", href: "https://smallseotools.com/vi/" },
  { name: "Dutch - NL", href: "https://smallseotools.com/nl/" },
  { name: "Polish - PL", href: "https://smallseotools.com/pl/" },
  { name: "Norwegian - NO", href: "https://smallseotools.com/no/" },
  { name: "Czech - CS", href: "https://smallseotools.com/cs/" },
  { name: "Swedish - SV", href: "https://smallseotools.com/sv/" },
  { name: "Romania - RO", href: "https://smallseotools.com/ro/" },
  { name: "Danish - DA", href: "https://smallseotools.com/da/" },
];

const navLinks = [
  { href: "https://smallseotools.com/plagiarism-checker/", text: "Plagiarism Checker" },
  { href: "https://smallseotools.com/grammar-checker/", text: "Free Grammar Checker" },
  { href: "https://smallseotools.com/reverse-image-search/", text: "Reverse Image Search" },
  { href: "https://smallseotools.com/paraphrasing-tool/", text: "Paraphrasing Tool" },
  { href: "https://smallseotools.com/login/", text: "Login" },
];

export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="flex h-[68px] items-center justify-between">
          <a href="https://smallseotools.com/">
            <img
              src="https://smallseotools.com/webimages/logo.svg"
              alt="Image of website logo"
              className="h-[31px] w-[200px]"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-x-4">
            <a
              href="https://pro.smallseotools.com/pricing"
              className="flex h-[37px] items-center justify-center whitespace-nowrap rounded-md bg-primary px-3 py-1.5 text-[15px] font-semibold text-primary-foreground"
            >
              <img
                src="https://smallseotools.com/webimages/pricing_icon.svg"
                alt="PRO Pricing"
                className="mr-2"
                width="25"
                height="25"
              />
              Pricing
            </a>
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="whitespace-nowrap text-[15px] font-normal text-muted-foreground hover:text-primary"
              >
                {link.text}
              </a>
            ))}
          </nav>

          <div className="flex items-center">
            <div className="hidden lg:block relative" ref={langDropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex h-[36px] items-center space-x-1.5 rounded-md border border-border bg-white px-2 py-1 text-sm font-semibold text-foreground"
              >
                <img
                  src="https://smallseotools.com/webimages/global_lang.svg"
                  alt="image of languages"
                  width="22"
                  height="22"
                />
                <span>EN</span>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="max-h-[400px] overflow-y-auto p-2">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      {languages.map((lang) => (
                        <a
                          key={lang.name}
                          href={lang.href}
                          className={`block w-[190px] rounded-md px-3 py-2 text-sm ${
                            lang.active
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {lang.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="https://pro.smallseotools.com/pricing"
              className="flex items-center justify-center rounded-md bg-primary px-3 py-2 text-base font-medium text-primary-foreground"
            >
              <img
                src="https://smallseotools.com/webimages/pricing_icon.svg"
                alt="PRO Pricing"
                className="mr-2"
                width="25"
                height="25"
              />
              Pricing
            </a>
            {navLinks.map((link) => (
              <a
                key={link.text}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}