import React from 'react';
import {
  ArrowRightLeft,
  Clock,
  Zap,
  Gauge,
  Beaker,
  Ruler,
  CircuitBoard,
  Square,
  Scale,
  Database,
  Thermometer,
  RotateCw,
  Scaling,
} from 'lucide-react';

interface Tool {
  name: string;
  href: string;
  icon: React.ReactElement;
}

const unitConverterTools: Tool[] = [
  { name: 'Unit Converter', href: 'https://smallseotools.com/unit-converter/', icon: <ArrowRightLeft /> },
  { name: 'Time Converter', href: 'https://smallseotools.com/time-converter/', icon: <Clock /> },
  { name: 'Power Converter', href: 'https://smallseotools.com/power-converter/', icon: <Zap /> },
  { name: 'Speed Converter', href: 'https://smallseotools.com/speed-converter/', icon: <Gauge /> },
  { name: 'Volume Conversion', href: 'https://smallseotools.com/volume-conversion/', icon: <Beaker /> },
  { name: 'Length Converter', href: 'https://smallseotools.com/length-converter/', icon: <Ruler /> },
  { name: 'Voltage Converter', href: 'https://smallseotools.com/voltage-converter/', icon: <CircuitBoard /> },
  { name: 'Area Converter', href: 'https://smallseotools.com/area-converter/', icon: <Square /> },
  { name: 'Weight Converter', href: 'https://smallseotools.com/weight-converter/', icon: <Scale /> },
  { name: 'Byte Converter', href: 'https://smallseotools.com/byte-converter/', icon: <Database /> },
  { name: 'Temperature Conversion', href: 'https://smallseotools.com/temperature-conversion/', icon: <Thermometer /> },
  { name: 'Torque Converter', href: 'https://smallseotools.com/torque-converter/', icon: <RotateCw /> },
  { name: 'Pressure Conversion', href: 'https://smallseotools.com/pressure-conversion/', icon: <Scaling /> },
];


const ToolCard = ({ name, href, icon }: Tool) => (
  <a
    href={href}
    className="group flex flex-col items-center justify-start text-center p-6 bg-card border border-border rounded-lg shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
  >
    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent">
      {React.cloneElement(icon, { className: "h-6 w-6 text-accent-foreground" })}
    </div>
    <span className="tool-name text-foreground group-hover:text-primary transition-colors">
      {name}
    </span>
  </a>
);

const UnitConverterTools = () => {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-foreground mb-10">
          <a href="https://smallseotools.com/unit-converters/" className="text-inherit hover:text-primary transition-colors no-underline">
            Unit Converter Tools
          </a>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4">
          {unitConverterTools.map((tool) => (
            <ToolCard key={tool.name} {...tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitConverterTools;