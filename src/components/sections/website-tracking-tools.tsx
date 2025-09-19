import {
  Link as LinkIcon,
  Globe,
  Server,
  Network,
  FileCode,
  BarChart,
  FileDiff,
  Bot,
  Search,
  Archive,
  Fingerprint,
  Gauge,
  ShieldCheck,
  ListChecks,
  BarChart2,
  ArrowRightLeft,
  Copy,
  EyeOff,
  ShieldAlert,
  Facebook,
  Lock,
  Smartphone,
  NotebookText,
  MapPin,
  TrendingUp,
  Globe2,
  Users,
  ServerCrash,
} from 'lucide-react';
import type { FC, SVGProps } from 'react';

interface Tool {
  name: string;
  href: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

const tools: Tool[] = [
  { name: 'Link Tracker', href: 'https://smallseotools.com/link-tracker/', Icon: LinkIcon },
  { name: 'Reverse IP Lookup', href: 'https://smallseotools.com/reverse-ip-lookup/', Icon: Globe },
  { name: 'Check Server Status', href: 'https://smallseotools.com/check-server-status/', Icon: Server },
  { name: 'Class C IP Checker', href: 'https://smallseotools.com/class-c-ip-address/', Icon: Network },
  { name: 'Code To Text Ratio Checker', href: 'https://smallseotools.com/code-to-text-ratio-checker/', Icon: FileCode },
  { name: 'Alexa Rank Comparison', href: 'https://smallseotools.com/alexa-ranking/', Icon: BarChart },
  { name: 'Page Comparison', href: 'https://smallseotools.com/page-comparison/', Icon: FileDiff },
  { name: 'Spider Simulator', href: 'https://smallseotools.com/spider-simulator/', Icon: Bot },
  { name: 'Comparison Search', href: 'https://smallseotools.com/comparison-search/', Icon: Search },
  { name: 'Google Cache Checker', href: 'https://smallseotools.com/google-cache-checker/', Icon: Archive },
  { name: 'Whois Lookup', href: 'https://smallseotools.com/whois-lookup/', Icon: Fingerprint },
  { name: 'Mozrank Checker', href: 'https://smallseotools.com/mozrank-checker/', Icon: Gauge },
  { name: 'Page Authority Checker', href: 'https://smallseotools.com/page-authority-checker/', Icon: ShieldCheck },
  { name: 'Google Index Checker', href: 'https://smallseotools.com/google-index-checker/', Icon: ListChecks },
  { name: 'Alexa Rank Checker', href: 'https://smallseotools.com/alexa-rank-checker/', Icon: BarChart2 },
  { name: 'Redirect Checker', href: 'https://smallseotools.com/redirect-checker/', Icon: ArrowRightLeft },
  { name: 'Similar Site Checker', href: 'https://smallseotools.com/similar-sites/', Icon: Copy },
  { name: 'Cloaking Checker', href: 'https://smallseotools.com/cloaking-checker/', Icon: EyeOff },
  { name: 'Google Malware Checker', href: 'https://smallseotools.com/google-malware-checker/', Icon: ShieldAlert },
  { name: 'Find Facebook ID', href: 'https://smallseotools.com/find-facebook-id/', Icon: Facebook },
  { name: 'Check GZIP compression', href: 'https://smallseotools.com/check-gzip-compression/', Icon: Archive },
  { name: 'SSL Checker', href: 'https://smallseotools.com/ssl-checker/', Icon: Lock },
  { name: 'Pokemon Go Server Status Finder', href: 'https://smallseotools.com/pokemon-go-server-status/', Icon: Smartphone },
  { name: 'Find Blog Sites', href: 'https://smallseotools.com/blog-sites/', Icon: NotebookText },
  { name: 'GEO IP Locator', href: 'https://smallseotools.com/geo-ip-locator/', Icon: MapPin },
  { name: 'Apps Rank Tracking Tool', href: 'https://smallseotools.com/apps-rank-tracking-tool/', Icon: TrendingUp },
  { name: 'What Is My Browser', href: 'https://smallseotools.com/what-is-my-browser/', Icon: Globe2 },
  { name: 'Check Social Status', href: 'https://smallseotools.com/social-status/', Icon: Users },
  { name: 'Is It Down', href: 'https://smallseotools.com/is-it-down/', Icon: ServerCrash },
];

const ToolCard: FC<{ tool: Tool }> = ({ tool }) => (
  <a
    href={tool.href}
    className="flex flex-col items-center p-2 text-center group"
  >
    <div className="flex items-center justify-center w-[72px] h-[72px] bg-card border border-border rounded-lg shadow-sm mb-3 transition-all duration-200 ease-in-out group-hover:shadow-md group-hover:scale-105">
      <tool.Icon className="w-8 h-8 text-accent-foreground" />
    </div>
    <span className="tool-name text-center max-w-[140px] leading-snug transition-colors duration-200 group-hover:text-primary">
      {tool.name}
    </span>
  </a>
);

const WebsiteTrackingTools = () => {
  return (
    <section className="py-12 px-4 bg-background">
      <div className="text-center mb-10">
        <h2 className="text-section-heading mb-3">
          <a href="https://smallseotools.com/website-tracking-tools/" className="text-foreground no-underline hover:text-primary transition-colors">
            Website Tracking Tools
          </a>
        </h2>
        <p className="text-base text-muted-foreground max-w-4xl mx-auto">
          A list of free tools in one place to measure, monitor, and keep track of your website’s performance.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-8">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </section>
  );
};

export default WebsiteTrackingTools;