import type { ElementType } from 'react';
import { FileJson, AlignLeft, ShieldCheck, PenSquare, FileCode2, Wand2 } from 'lucide-react';

interface Tool {
  name: string;
  href: string;
  icon: ElementType;
}

const tools: Tool[] = [
  { name: 'JSON Viewer', href: 'https://smallseotools.com/json-viewer/', icon: FileJson },
  { name: 'JSON Formatter', href: 'https://smallseotools.com/json-formatter/', icon: AlignLeft },
  { name: 'JSON Validator', href: 'https://smallseotools.com/json-validator/', icon: ShieldCheck },
  { name: 'JSON Editor', href: 'https://smallseotools.com/json-editor/', icon: PenSquare },
  { name: 'JSON To XML', href: 'https://smallseotools.com/json-to-xml/', icon: FileCode2 },
  { name: 'JSON Beautifier', href: 'https://smallseotools.com/json-beautifier/', icon: Wand2 },
];

const ToolCard = ({ name, href, icon: Icon }: Tool) => (
  <a href={href} className="group flex flex-col items-center text-center transition-transform duration-200 hover:scale-[1.02]">
    <div className="mb-2 flex h-[88px] w-[88px] items-center justify-center rounded-lg border bg-card shadow-sm group-hover:shadow-md">
      <Icon className="h-10 w-10 text-accent-foreground" />
    </div>
    <span className="tool-name flex h-10 items-center justify-center text-center">{name}</span>
  </a>
);

const DevelopmentTools = () => {
  return (
    <div className="rounded-lg border bg-card p-4 shadow-sm sm:p-6">
      <h2 className="w-full p-2 text-left text-[32px] font-semibold leading-[1.3] text-foreground">
        <a href="https://smallseotools.com/web-development-tools/" className="text-foreground no-underline hover:text-primary">
          Development Tools
        </a>
      </h2>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 pt-6 sm:grid-cols-3 lg:grid-cols-6">
        {tools.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default DevelopmentTools;