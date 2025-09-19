import { FileSearch, Tags } from "lucide-react";
import Link from "next/link";
import React from 'react';

export default function MetaTagsTools() {
  return (
    <section className="bg-white py-14">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-slate-800">
            Meta Tags Tools
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-500">
            Create new meta tags or analyze the existing ones to get an in-depth analysis of your meta tags and web pages.
          </p>
        </div>
        <div className="mt-12 flex justify-center gap-8">
            <a href="https://smallseotools.com/meta-tags-analyzer/" className="group flex w-[140px] flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow group-hover:shadow-md">
                    <FileSearch className="h-10 w-10 text-blue-500" />
                </div>
                <span className="mt-3 text-base font-medium text-slate-700">Meta Tags Analyzer</span>
            </a>
            <a href="https://smallseotools.com/tag-generator/" className="group flex w-[140px] flex-col items-center text-center transition-transform duration-200 hover:-translate-y-1">
                <div className="flex h-[88px] w-[88px] items-center justify-center rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow group-hover:shadow-md">
                    <Tags className="h-10 w-10 text-blue-500" />
                </div>
                <span className="mt-3 text-base font-medium text-slate-700">Meta Tag Generator</span>
            </a>
        </div>
      </div>
    </section>
  );
}