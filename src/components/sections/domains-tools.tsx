import React from 'react';
import type { LucideIcon } from 'lucide-react';
import {
  Clock,
  Target,
  Globe,
  Server,
  Network,
  Search,
  ArrowRightLeft,
  Ban,
  CalendarX2,
  BarChartHorizontal,
  FileCheck2,
  ShieldAlert,
} from 'lucide-react';

interface Tool {
  name: string;
  href: string;
  icon: LucideIcon;
}

const toolsData: Tool[] = [
  {
    name: 'Domain Age Checker',
    href: 'https://smallseotools.com/domain-age-checker/',
    icon: Clock,
  },
  {
    name: 'Domain Authority Checker',
    href: 'https://smallseotools.com/domain-authority-checker/',
    icon: Target,
  },
  {
    name: 'Domain IP Lookup',
    href: 'https://smallseotools.com/domain-ip-lookup/',
    icon: Globe,
  },
  {
    name: 'Domain Hosting Checker',
    href: 'https://smallseotools.com/domain-hosting-checker/',
    icon: Server,
  },
  {
    name: 'Find DNS records',
    href: 'https://smallseotools.com/find-dns-records/',
    icon: Network,
  },
  {
    name: 'Domain Name Search',
    href: 'https://smallseotools.com/domain-name-search/',
    icon: Search,
  },
  {
    name: 'Domain To IP',
    href: 'https://smallseotools.com/domain-to-ip/',
    icon: ArrowRightLeft,
  },
  {
    name: 'Check Blacklist IP',
    href: 'https://smallseotools.com/blacklist-check/',
    icon: Ban,
  },
  {
    name: 'Find Expired Domains',
    href: 'https://smallseotools.com/expired-domains/',
    icon: CalendarX2,
  },
  {
    name: 'Bulk Domain Rating Checker',
    href: 'https://smallseotools.com/domain-rating-checker/',
    icon: BarChartHorizontal,
  },
  {
    name: 'Index Pages Checker',
    href: 'https://smallseotools.com/indexed-pages-checker/',
    icon: FileCheck2,
  },
  {
    name: 'Spam Score Checker',
    href: 'https://smallseotools.com/spam-score-checker/',
    icon: ShieldAlert,
  },
];

const ToolCard: React.FC<{ tool: Tool }> = ({ tool }) => {
  const Icon = tool.icon;
  return (
    <a
      href={tool.href}
      className="flex flex-col items-center text-center group transition-transform duration-200 hover:scale-105 w-28"
    >
      <div className="flex items-center justify-center w-[76px] h-[76px] bg-card border border-border rounded-lg shadow-sm mb-3">
        <Icon className="w-8 h-8 text-accent-foreground" strokeWidth={1.5} />
      </div>
      <span className="text-sm font-semibold text-foreground leading-tight">
        {tool.name}
      </span>
    </a>
  );
};

const DomainsTools = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="bg-secondary rounded-lg p-4 sm:p-8">
          <h2 className="text-center text-3xl font-semibold text-foreground mb-3">
            <a href="https://smallseotools.com/domain-tools/" className="hover:text-primary transition-colors text-decoration-none">
              Domains Tools
            </a>
          </h2>
          <p className="text-center text-base text-muted-foreground max-w-3xl mx-auto mb-10 px-5 sm:px-0">
            A range of domain related tools to find out domain age, domain authority, DNS records or expired domains, etc.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-8">
            {toolsData.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainsTools;