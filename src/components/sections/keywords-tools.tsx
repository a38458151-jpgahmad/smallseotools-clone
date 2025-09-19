import Link from 'next/link';
import {
  BarChart4,
  ScanText,
  Lightbulb,
  Search,
  Shield,
  Link2,
  List,
  Globe,
  PieChart,
  Activity,
  Gauge,
  DollarSign,
  MonitorSmartphone,
} from 'lucide-react';

const tools = [
  {
    name: 'Keyword Position',
    href: 'https://smallseotools.com/keyword-position/',
    icon: BarChart4,
  },
  {
    name: 'Keywords Density Checker',
    href: 'https://smallseotools.com/keyword-density-checker/',
    icon: ScanText,
  },
  {
    name: 'Keywords Suggestions Tool',
    href: 'https://smallseotools.com/keywords-suggestions-tool/',
    icon: Lightbulb,
  },
  {
    name: 'Keyword Research Tool',
    href: 'https://smallseotools.com/keyword-research-tool/',
    icon: Search,
  },
  {
    name: 'Keyword Competition Tool',
    href: 'https://smallseotools.com/keyword-competition-tool/',
    icon: Shield,
  },
  {
    name: 'Related Keywords Finder',
    href: 'https://smallseotools.com/related-keywords-finder/',
    icon: Link2,
  },
  {
    name: 'Long Tail Keyword Suggestion Tool',
    href: 'https://smallseotools.com/long-tail-keyword-generator/',
    icon: List,
  },
  {
    name: 'Keywords Rich Domains Suggestions Tool',
    href: 'https://smallseotools.com/keywords-rich-domains-suggestions-tool/',
    icon: Globe,
  },
  {
    name: 'SEO Keyword Competition Analysis',
    href: 'https://smallseotools.com/seo-keyword-competition-analysis/',
    icon: PieChart,
  },
  {
    name: 'Live Keyword Analyzer',
    href: 'https://smallseotools.com/keyword-analyzer/',
    icon: Activity,
  },
  {
    name: 'Keyword Overview Tool',
    href: 'https://smallseotools.com/keyword-research/',
    icon: MonitorSmartphone,
  },
  {
    name: 'Keyword Difficulty Checker',
    href: 'https://smallseotools.com/keyword-difficulty-checker/',
    icon: Gauge,
  },
  {
    name: 'Paid Keyword Finder',
    href: 'https://smallseotools.com/paid-keyword-finder/',
    icon: DollarSign,
  },
];

export default function KeywordsTools() {
  return (
    <div className="bg-card text-card-foreground rounded-lg border p-4 sm:p-6 shadow-sm">
      <h2 className="text-[32px] font-semibold text-foreground mb-2">
        <a href="https://smallseotools.com/keyword-tools/" className="text-foreground hover:text-primary transition-colors">
          Keywords Tools
        </a>
      </h2>
      <p className="text-muted-foreground mb-6 text-center lg:text-left text-sm max-w-3xl">
        For webmasters and SEO professionals, free, powerful and efficient keyword tools that provide you with thorough keyword research and analysis.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            className="block p-4 bg-background border rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex justify-center items-center mb-3 h-12 w-12 mx-auto">
              <tool.icon className="h-8 w-8 text-accent-foreground" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-medium text-foreground leading-tight min-h-[40px] flex items-center justify-center">
              {tool.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}