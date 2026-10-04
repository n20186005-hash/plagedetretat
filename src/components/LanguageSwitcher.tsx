import { useTranslation } from "react-i18next";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { buildLocalizedPath, normalizePath, SUPPORTED_LANGUAGES } from "@/lib/site";

const languages = SUPPORTED_LANGUAGES.map(({ code, label }) => ({ code, label }));

export function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (code: string) => {
    setIsOpen(false);
    window.location.href = buildLocalizedPath(code, normalizePath(location));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 text-sm rounded-lg border border-border bg-background/80 hover:bg-muted transition-colors"
      >
        <span>{currentLang.label}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 py-1 bg-background border border-border rounded-lg shadow-lg z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full px-3 py-2 text-sm text-left hover:bg-muted transition-colors ${
                lang.code === i18n.language ? "font-medium text-primary" : "text-foreground"
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
