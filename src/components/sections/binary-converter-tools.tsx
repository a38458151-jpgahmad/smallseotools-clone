import {
  Code,
  FileText,
  Hexagon,
  Type,
  Sigma,
  Languages,
  Key,
} from 'lucide-react';
import React from 'react';

interface Tool {
  name: string;
  href: string;
  icon: React.ElementType;
}

const binaryTools: Tool[] = [
  { name: "Text To Binary", href: "https://smallseotools.com/text-to-binary/", icon: Code },
  { name: "Binary To Text", href: "https://smallseotools.com/binary-to-text-tool/", icon: FileText },
  { name: "Binary To HEX", href: "https://smallseotools.com/binary-to-hex/", icon: Hexagon },
  { name: "Hex To Binary", href: "https://smallseotools.com/hex-to-binary/", icon: Code },
  { name: "Binary To ASCII", href: "https://smallseotools.com/binary-to-ascii/", icon: Type },
  { name: "ASCII To Binary", href: "https://smallseotools.com/ascii-to-binary/", icon: Code },
  { name: "Binary To Decimal", href: "https://smallseotools.com/binary-to-decimal/", icon: Sigma },
  { name: "Decimal To Binary", href: "https://smallseotools.com/decimal-to-binary/", icon: Code },
  { name: "Text To ASCII", href: "https://smallseotools.com/text-to-ascii/", icon: Type },
  { name: "Decimal To HEX", href: "https://smallseotools.com/decimal-to-hex/", icon: Hexagon },
  { name: "Binary Translator", href: "https://smallseotools.com/binary-translator/", icon: Languages },
  { name: "English to Binary", href: "https://smallseotools.com/english-to-binary/", icon: Code },
  { name: "Binary to English", href: "https://smallseotools.com/binary-to-english/", icon: FileText },
  { name: "Binary Decoder", href: "https://smallseotools.com/binary-decoder", icon: Key },
  { name: "Hex to Text", href: "https://smallseotools.com/hex-to-text", icon: FileText },
  { name: "Ascii to Text", href: "https://smallseotools.com/ascii-to-text", icon: Type },
];

const ToolCard = ({ name, href, icon: Icon }: Tool) => (
  <a
    href={href}
    className="group flex flex-col items-center p-4 bg-card border rounded-lg shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-200 text-center"
  >
    <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-lg mb-4">
      <Icon className="w-8 h-8 text-accent-foreground" />
    </div>
    <p className="tool-name text-foreground font-medium h-full flex items-center justify-center">
      {name}
    </p>
  </a>
);

export default function BinaryConverterTools() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="bg-card rounded-lg p-6 md:p-8 text-center shadow-sm">
          <h2 className="text-[32px] font-semibold mb-8">
            <a href="https://smallseotools.com/binary-converters/" className="text-foreground no-underline hover:underline">
              Binary Converter Tools
            </a>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {binaryTools.map((tool) => (
              <ToolCard key={tool.name} {...tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}