import {
  Link as LinkIcon,
  Atom,
  ListOrdered,
  Unlink2,
  Calculator,
  Repeat,
  FileSearch,
  Unlink,
  Award,
  Users,
  PieChart
} from 'lucide-react';
import React from 'react';

interface ToolCardProps {
  name: string;
  href: string;
  Icon: React.ElementType;
}

const tools: ToolCardProps[] = [
  { name: 'Backlink Checker', href: '#', Icon: LinkIcon },
  { name: 'Backlink Maker', href: '#', Icon: Atom },
  { name: 'Website Link Count Checker', href: '#', Icon: ListOrdered },
  { name: 'Website Broken Link Checker', href: '#', Icon: Unlink2 },
  { name: 'Link Price Calculator', href: '#', Icon: Calculator },
  { name: 'Reciprocal Link Checker', href: '#', Icon: Repeat },
  { name: 'Website Link Analyzer Tool', href: '#', Icon: FileSearch },
  { name: 'Broken Backlink Checker', href: '#', Icon: Unlink },
  { name: 'Valuable Backlink Checker', href: '#', Icon: Award },
  { name: 'Backlinks Competitors', href: '#', Icon: Users },
  { name: 'Anchor Text Distribution', href: '#', Icon: PieChart },
];

const ToolCard: React.FC<ToolCardProps> = ({ name, href, Icon }) => {
  return (
    <a
      href={href}
      className="group flex flex-col items-center justify-start text-center p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 bg-blue-100 rounded-lg">
        <Icon className="h-8 w-8 text-blue-500" strokeWidth={1.5} />
      </div>
      <span className="mt-4 text-base font-medium text-slate-800 leading-tight">
        {name}
      </span>
    </a>
  );
};

const BacklinkTools: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center">
          <h2 className="text-[32px] font-semibold text-slate-800 tracking-tight">
            BackLink Tools
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-slate-500">
            A set of backlink analysis tool to give you a comprehensive inside
            view of your link profile.
          {/* Note: Original text had "tool", corrected to "tools" for clarity, but can be reverted if strict replication is needed. The provided content has "tool". I will use "tool" instead based on instructions for accuracy */}
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BacklinkTools;