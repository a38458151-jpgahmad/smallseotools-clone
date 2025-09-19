import {
  SearchCheck,
  Trophy,
  Network,
  GaugeCircle,
  FileStack,
  Eye,
  Users,
  FileCode2,
  Link2Off,
  Laptop,
  Code,
  Calculator,
  CheckSquare,
  FilePlus2,
  QrCode,
  Replace,
  HdmiPort,
  Twitter,
  Gauge,
  Wrench,
  Search,
  ShieldAlert,
  Camera,
  MailCheck,
  Smartphone,
  Download,
  Facebook,
  Instagram,
  Clapperboard,
  FileCode,
  Bot,
  Scissors,
  CheckCircle2,
  ExternalLink,
  Code2,
  FileText,
  DownloadCloud,
  Wifi,
  Video,
  MessageCircle,
} from 'lucide-react';
import React from 'react';

interface Tool {
  name: string;
  icon: React.ReactNode;
}

const tools: Tool[] = [
  { name: 'Website SEO Score Checker', icon: <SearchCheck className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Google Pagerank Checker', icon: <Trophy className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Online Ping Website Tool', icon: <Network className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Page Speed Test', icon: <GaugeCircle className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Website Page Size Checker', icon: <FileStack className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Website Page Snooper', icon: <Eye className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Website Hit Counter', icon: <Users className="w-6 h-6 text-accent-foreground" /> },
  { name: 'XML Sitemap Generator', icon: <FileCode2 className="w-6 h-6 text-accent-foreground" /> },
  { name: 'URL Rewriting Tool', icon: <Link2Off className="w-6 h-6 text-accent-foreground" /> },
  { name: 'What is My Screen Resolution', icon: <Laptop className="w-6 h-6 text-accent-foreground" /> },
  { name: 'URL Encoder Decoder', icon: <Code className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Adsense Calculator', icon: <Calculator className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Open Graph Checker', icon: <CheckSquare className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Open Graph Generator', icon: <FilePlus2 className="w-6 h-6 text-accent-foreground" /> },
  { name: 'QR Code Generator', icon: <QrCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Htaccess Redirect Generator', icon: <Replace className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Get HTTP Headers', icon: <HdmiPort className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Twitter Card Generator', icon: <Twitter className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Internet Speed Test', icon: <Gauge className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Wordpress Theme Detector', icon: <Wrench className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Instant Search Suggestions Tool', icon: <Search className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Online Virus Scan', icon: <ShieldAlert className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Website Screenshot Generator', icon: <Camera className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Secure Email', icon: <MailCheck className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Mobile Friendly Test', icon: <Smartphone className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Video Downloader', icon: <Download className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Facebook Video Downloader', icon: <Facebook className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Instagram Video Downloader', icon: <Instagram className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Dailymotion Video Downloader', icon: <Clapperboard className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Minify CSS', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Minify HTML', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Minify JS', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Robots.txt Generator', icon: <Bot className="w-6 h-6 text-accent-foreground" /> },
  { name: 'URL Shortener', icon: <Scissors className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Website Checker', icon: <CheckCircle2 className="w-6 h-6 text-accent-foreground" /> },
  { name: 'URL Opener', icon: <ExternalLink className="w-6 h-6 text-accent-foreground" /> },
  { name: 'PHP Formatter', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'HTML Formatter', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'HTML Editor', icon: <Code2 className="w-6 h-6 text-accent-foreground" /> },
  { name: 'HTML Viewer', icon: <FileText className="w-6 h-6 text-accent-foreground" /> },
  { name: 'XML Formatter', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'XML Beautifier', icon: <FileCode className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Twitter Video Downloader', icon: <Twitter className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Twitter GIF Downloader', icon: <Twitter className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Instagram Reels Downloader', icon: <Instagram className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Facebook Reels Downloader', icon: <Facebook className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Tiktok To MP4', icon: <Video className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Instagram To MP4', icon: <Instagram className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Twitter To MP4', icon: <Twitter className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Facebook To MP4', icon: <Facebook className="w-6 h-6 text-accent-foreground" /> },
  { name: 'Reddit Video Downloader', icon: <MessageCircle className="w-6 h-6 text-accent-foreground" /> },
  { name: 'MP4 Downloader', icon: <DownloadCloud className="w-6 h-6 text-accent-foreground" /> },
  { name: 'PTCL Speed Test', icon: <Wifi className="w-6 h-6 text-accent-foreground" /> },
];

const ToolCard = ({ name, icon }: Tool) => (
  <a href="#" className="flex flex-col items-center justify-start text-center p-4 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-all duration-200 group transform hover:scale-[1.02]">
    <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-md mb-3 group-hover:scale-110 transition-transform duration-200">
      {icon}
    </div>
    <span className="tool-name text-foreground">{name}</span>
  </a>
);

export default function WebsiteManagementTools() {
  return (
    <div className="bg-secondary/50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            Website Management Tools
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto description">
            If you are struggling to get more traffic and enhance your website performance, then use these website management tools and in-depth web analysis.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {tools.map((tool, index) => (
            <ToolCard key={index} {...tool} />
          ))}
        </div>
      </div>
    </div>
  );
}