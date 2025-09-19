import { MapPin, Navigation, List } from 'lucide-react';

const tools = [
  {
    name: 'What is My IP',
    href: 'https://smallseotools.com/what-is-my-ip/',
    icon: MapPin,
  },
  {
    name: 'IP Location',
    href: 'https://smallseotools.com/ip-location/',
    icon: Navigation,
  },
  {
    name: 'Free Daily Proxy List',
    href: 'https://smallseotools.com/free-proxy-list/',
    icon: List,
  },
];

const ProxyToolsSection = () => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
      <h2 className="text-center text-[32px] font-semibold text-foreground mb-4">
        <a href="https://smallseotools.com/proxy-tools/" className="text-inherit no-underline hover:text-primary transition-colors">
          Proxy Tools
        </a>
      </h2>
      <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
        Use proxy tools to know your IP location or to get a free daily proxy list
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            className="group flex w-44 flex-col items-center justify-center rounded-lg border border-border bg-card p-4 text-center text-foreground no-underline shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md min-h-[130px]"
          >
            <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent">
              <tool.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium leading-tight">
              {tool.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProxyToolsSection;