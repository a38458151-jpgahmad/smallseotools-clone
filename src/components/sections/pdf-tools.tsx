import React from 'react';
import {
  Combine,
  RotateCw,
  Unlock,
  Lock,
  FileSignature,
  FileText,
  FileImage,
  FileType,
  Shrink,
  Scissors,
  Expand,
  FileArchive,
  FileX,
  Sigma,
  LockKeyhole,
} from 'lucide-react';

interface ToolCardProps {
  icon: React.ElementType;
  title: string;
  href: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ icon: Icon, title, href }) => {
  return (
    <a
      href={href}
      className="flex flex-col items-center justify-start p-6 text-center bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 ease-in-out border border-border h-full"
    >
      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-accent flex-shrink-0">
        <Icon className="w-6 h-6 text-accent-foreground" />
      </div>
      <span className="tool-name text-center flex-grow flex items-center">{title}</span>
    </a>
  );
};

const pdfTools = [
  { icon: Combine, title: "Merge PDF", href: "https://smallseotools.com/merge-pdf/" },
  { icon: RotateCw, title: "Rotate PDF", href: "https://smallseotools.com/rotate-pdf/" },
  { icon: Unlock, title: "Unlock PDF", href: "https://smallseotools.com/unlock-pdf/" },
  { icon: Lock, title: "Lock PDF", href: "https://smallseotools.com/lock-pdf/" },
  { icon: FileSignature, title: "Watermark", href: "https://smallseotools.com/add-watermark-to-pdf/" },
  { icon: FileText, title: "PDF To Word", href: "https://smallseotools.com/pdf-to-word-converter/" },
  { icon: FileText, title: "Word To PDF", href: "https://smallseotools.com/word-to-pdf/" },
  { icon: FileImage, title: "PDF To JPG", href: "https://smallseotools.com/pdf-to-jpg/" },
  { icon: FileImage, title: "JPG To PDF", href: "https://smallseotools.com/jpg-to-pdf/" },
  { icon: FileType, title: "PowerPoint To PDF", href: "https://smallseotools.com/powerpoint-to-pdf/" },
  { icon: Shrink, title: "Compress PDF", href: "https://smallseotools.com/compress-pdf/" },
  { icon: FileType, title: "Excel To PDF", href: "https://smallseotools.com/excel-to-pdf/" },
  { icon: Scissors, title: "Split PDF", href: "https://smallseotools.com/split-pdf/" },
  { icon: Shrink, title: "Compress PDF to 50KB", href: "https://smallseotools.com/compress-pdf-to-50kb/" },
  { icon: Shrink, title: "Compress PDF to 100KB", href: "https://smallseotools.com/compress-pdf-to-100kb/" },
  { icon: Shrink, title: "Compress PDF to 150KB", href: "https://smallseotools.com/compress-pdf-to-150kb/" },
  { icon: Shrink, title: "Compress PDF to 200KB", href: "https://smallseotools.com/compress-pdf-to-200kb/" },
  { icon: Expand, title: "Resize PDF to 200KB", href: "https://smallseotools.com/resize-pdf-to-200kb/" },
  { icon: Shrink, title: "Compress PDF to 300KB", href: "https://smallseotools.com/compress-pdf-to-300kb/" },
  { icon: Shrink, title: "Compress PDF to 500KB", href: "https://smallseotools.com/compress-pdf-to-500kb/" },
  { icon: Shrink, title: "Compress PDF to 1MB", href: "https://smallseotools.com/compress-pdf-to-1mb/" },
  { icon: Shrink, title: "Compress PDF to 2MB", href: "https://smallseotools.com/compress-pdf-to-2mb/" },
  { icon: FileArchive, title: "PDF to ZIP", href: "https://smallseotools.com/pdf-to-zip/" },
  { icon: FileX, title: "Delete Pages From PDF", href: "https://smallseotools.com/delete-pages-from-pdf/" },
  { icon: FileImage, title: "PDF to BMP", href: "https://smallseotools.com/pdf-to-bmp/" },
  { icon: FileImage, title: "GIF to PDF", href: "https://smallseotools.com/gif-to-pdf/" },
  { icon: FileType, title: "PDF to TIFF", href: "https://smallseotools.com/pdf-to-tiff/" },
  { icon: FileType, title: "TIFF to PDF", href: "https://smallseotools.com/tiff-to-pdf/" },
  { icon: FileImage, title: "PNG to PDF", href: "https://smallseotools.com/png-to-pdf/" },
  { icon: Sigma, title: "SVG To PDF", href: "https://smallseotools.com/svg-to-pdf/" },
  { icon: Sigma, title: "PDF To SVG", href: "https://smallseotools.com/pdf-to-svg/" },
  { icon: FileImage, title: "PDF To PNG", href: "https://smallseotools.com/pdf-to-png/" },
  { icon: FileImage, title: "BMP To PDF", href: "https://smallseotools.com/bmp-to-pdf/" },
  { icon: LockKeyhole, title: "Remove Password From PDF", href: "https://smallseotools.com/how-to-remove-password-from-pdf/" },
  { icon: FileX, title: "PDF Page Remover", href: "https://smallseotools.com/pdf-page-remover/" },
];

const PdfToolsSection = () => {
  return (
    <div className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground">
            <a href="https://smallseotools.com/pdf-tools/" className="text-foreground no-underline hover:text-primary">
              Online PDF Tools
            </a>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
            All the tools you need to work with PDF files, at your fingertips. Merge, rotate, unlock, lock, watermark and convert PDFs with just a few clicks.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {pdfTools.map((tool, index) => (
            <ToolCard key={index} icon={tool.icon} title={tool.title} href={tool.href} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PdfToolsSection;