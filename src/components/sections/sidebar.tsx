"use client";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { ChevronDown } from "lucide-react";

const pricingProLinks = [
  { name: "Plagiarism Checker Pro", href: "https://pro.smallseotools.com/pricing" },
  { name: "Paraphraser Pro", href: "https://pro.smallseotools.com/paraphrasing-pricing" },
  { name: "Image Search PRO", href: "https://pro.smallseotools.com/ris-pricing" },
  { name: "Image To Text Pro", href: "https://pro.smallseotools.com/img-to-text-pricing" },
  { name: "Domain Authority Checker Pro", href: "https://pro.smallseotools.com/domain-authority-checker-pricing" },
];

const popularTools = [
  { name: "Plagiarism Checker", href: "https://smallseotools.com/plagiarism-checker/" },
  { name: "Paraphrasing Tool", href: "https://smallseotools.com/paraphrasing-tool/" },
  { name: "AI Detector", href: "https://smallseotools.com/ai-content-detector/" },
  { name: "Free Grammar Checker", href: "https://smallseotools.com/grammar-checker/" },
  { name: "Reverse Image Search", href: "https://smallseotools.com/reverse-image-search/" },
  { name: "Logo Maker", href: "https://smallseotools.com/logo-maker/" },
  { name: "Website SEO Score Checker", href: "https://smallseotools.com/website-seo-score-checker/" },
  { name: "Emojis", href: "https://smallseotools.com/emojis/" },
  { name: "Citation Generator", href: "https://smallseotools.com/citation-generator/" },
  { name: "AI Humanizer", href: "https://smallseotools.com/ai-humanizer/" },
];

const relatedTools = [
  { name: "Article Rewriter", href: "https://smallseotools.com/article-rewriter/" },
  { name: "Keyword Position", href: "https://smallseotools.com/keyword-position/" },
  { name: "Domain Authority Checker", href: "https://smallseotools.com/domain-authority-checker/" },
  { name: "Backlink Checker", href: "https://smallseotools.com/backlink-checker/" },
  { name: "Image Compressor", href: "https://smallseotools.com/image-compressor/" },
  { name: "Video Downloader", href: "https://smallseotools.com/online-video-downloader/" },
  { name: "Facebook Video Downloader", href: "https://smallseotools.com/facebook-video-downloader/" },
  { name: "Word To PDF", href: "https://smallseotools.com/word-to-pdf/" },
  { name: "PDF To Word", href: "https://smallseotools.com/pdf-to-word-converter/" },
  { name: "RGB To Hex", href: "https://smallseotools.com/rgb-to-hex/" },
  { name: "Image Resizer", href: "https://smallseotools.com/image-resizer/" },
  { name: "Video To GIF Converter", href: "https://smallseotools.com/video-to-gif/" },
  { name: "What is My IP", href: "https://smallseotools.com/what-is-my-ip/" },
  { name: "Internet Speed Test", href: "https://smallseotools.com/internet-speed-test/" },
];

const Sidebar = () => {
  return (
    <aside className="w-[320px] bg-white p-6 rounded-lg border border-border space-y-8">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="w-full bg-primary text-primary-foreground flex items-center justify-between px-4 py-3 rounded-md font-semibold text-lg hover:bg-primary/90 transition-colors">
            <div className="flex items-center">
              <Image src="https://smallseotools.com/webimages/pricing_icon.svg" alt="Pricing" width={24} height={24} className="mr-3" />
              <span>Pricing</span>
            </div>
            <ChevronDown className="w-5 h-5 opacity-75" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          {pricingProLinks.map((link) => (
             <DropdownMenuItem key={link.name} asChild>
                <a href={link.href} className="flex items-center cursor-pointer p-2 text-sm">
                    <Image src="https://smallseotools.com/webimages/pricing_diamond.svg" alt="Pro" width={16} height={16} className="mr-2"/>
                    {link.name}
                </a>
             </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="relative">
        <Input 
          type="search"
          placeholder="Search with SmallSEOTools"
          className="h-12 border-input pl-4 pr-10 text-base rounded-md"
        />
        <Image 
          src="https://smallseotools.com/webimages/search.svg"
          alt="Search"
          width={20}
          height={20}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-6 text-foreground">Popular Tools</h3>
        <ul className="space-y-4">
          {popularTools.map((tool) => (
            <li key={tool.name} className="flex items-center">
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-blue-500 mr-3"></span>
              <a href={tool.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-normal">
                {tool.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-border" />

      <div>
        <h3 className="text-xl font-semibold mb-6 text-foreground">Related Tools</h3>
        <ul className="space-y-4">
          {relatedTools.map((tool) => (
            <li key={tool.name} className="flex items-center">
              <span className="w-2 h-2 flex-shrink-0 rounded-full bg-blue-500 mr-3"></span>
              <a href={tool.href} className="text-muted-foreground hover:text-primary transition-colors text-sm font-normal">
                {tool.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;