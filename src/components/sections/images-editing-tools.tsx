import React from 'react';
import {
  Image as ImageIcon,
  UserSearch,
  Minimize,
  AppWindow,
  Film,
  Crop,
  Scale,
  Palette,
  FileArchive,
  ArrowRightLeft,
  FileImage,
  CodeXml,
  MinusSquare,
  LucideProps
} from 'lucide-react';

type Tool = {
  name: string;
  href: string;
  icon: React.ComponentType<LucideProps>;
};

const toolData: Tool[] = [
  { name: 'Reverse Image Search', href: 'https://smallseotools.com/reverse-image-search/', icon: ImageIcon },
  { name: 'Face Search', href: 'https://smallseotools.com/face-search/', icon: UserSearch },
  { name: 'Image Compressor', href: 'https://smallseotools.com/image-compressor/', icon: Minimize },
  { name: 'Favicon Generator', href: 'https://smallseotools.com/favicon-generator/', icon: AppWindow },
  { name: 'Video To GIF Converter', href: 'https://smallseotools.com/video-to-gif/', icon: Film },
  { name: 'Image Resizer', href: 'https://smallseotools.com/image-resizer/', icon: Crop },
  { name: 'Photo Resizer In KB', href: 'https://smallseotools.com/photo-resizer-in-kb/', icon: Scale },
  { name: 'Crop Image', href: 'https://smallseotools.com/crop-image/', icon: Crop },
  { name: 'Convert To JPG', href: 'https://smallseotools.com/convert-to-jpg/', icon: FileImage },
  { name: 'RGB To Hex', href: 'https://smallseotools.com/rgb-to-hex/', icon: Palette },
  { name: 'PNG To JPG', href: 'https://smallseotools.com/png-to-jpg/', icon: FileImage },
  { name: 'JPG To PNG', href: 'https://smallseotools.com/jpg-to-png/', icon: FileImage },
  { name: 'Compress image to 50KB', href: 'https://smallseotools.com/compress-image-to-50kb/', icon: FileArchive },
  { name: 'Compress image to 20KB', href: 'https://smallseotools.com/compress-image-to-20kb/', icon: FileArchive },
  { name: 'Compress JPEG to 100KB', href: 'https://smallseotools.com/compress-jpeg-to-100kb/', icon: FileArchive },
  { name: 'Compress JPEG to 200KB', href: 'https://smallseotools.com/compress-jpeg-to-200kb/', icon: FileArchive },
  { name: 'Compress JPG', href: 'https://smallseotools.com/compress-jpg/', icon: FileArchive },
  { name: 'Resize Image to 50KB', href: 'https://smallseotools.com/resize-image-to-50kb/', icon: Scale },
  { name: 'Resize Image to 100KB', href: 'https://smallseotools.com/resize-image-to-100kb/', icon: Scale },
  { name: 'Resize Image to 20KB', href: 'https://smallseotools.com/resize-image-to-20kb/', icon: Scale },
  { name: 'Reduce Image Size in kb', href: 'https://smallseotools.com/reduce-image-size-in-kb/', icon: MinusSquare },
  { name: 'Compress Image To 10KB', href: 'https://smallseotools.com/compress-image-to-10kb/', icon: FileArchive },
  { name: 'Compress JPEG To 30KB', href: 'https://smallseotools.com/compress-jpeg-to-30kb/', icon: FileArchive },
  { name: 'Compress Image To 1MB', href: 'https://smallseotools.com/compress-image-to-1mb/', icon: FileArchive },
  { name: 'MB to KB Converter', href: 'https://smallseotools.com/mb-to-kb-converter/', icon: ArrowRightLeft },
  { name: 'MP4 to GIF Converter', href: 'https://smallseotools.com/mp4-to-gif/', icon: Film },
  { name: 'HEIC to JPG Converter', href: 'https://smallseotools.com/heic-to-jpg/', icon: FileImage },
  { name: 'HEIC to PNG', href: 'https://smallseotools.com/heic-to-png/', icon: FileImage },
  { name: 'SVG Converter', href: 'https://smallseotools.com/svg-converter/', icon: CodeXml },
  { name: 'PNG to SVG', href: 'https://smallseotools.com/png-to-svg/', icon: CodeXml },
  { name: 'JPG to SVG', href: 'https://smallseotools.com/jpg-to-svg/', icon: CodeXml },
  { name: 'JPEG to SVG', href: 'https://smallseotools.com/jpeg-to-svg/', icon: CodeXml },
  { name: 'WEBP to PNG', href: 'https://smallseotools.com/webp-to-png/', icon: FileImage },
  { name: 'SVG to PNG', href: 'https://smallseotools.com/svg-to-png/', icon: FileImage },
  { name: 'PNG to ICO', href: 'https://smallseotools.com/png-to-ico/', icon: FileImage },
  { name: 'AVIF to JPG', href: 'https://smallseotools.com/avif-to-jpg/', icon: FileImage },
  { name: 'JPEG Optimizer', href: 'https://smallseotools.com/jpeg-optimizer/', icon: FileArchive },
  { name: 'Compress PNG', href: 'https://smallseotools.com/compress-png/', icon: FileArchive },
];


const ToolCard = ({ icon: Icon, name, href }: Tool) => (
  <a href={href} className="flex flex-col items-center justify-start text-center p-2 rounded-lg transition-transform duration-200 hover:scale-105 group">
    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-3 border border-border group-hover:shadow-md">
      <Icon className="w-6 h-6 text-accent-foreground" />
    </div>
    <span className="text-sm font-medium text-foreground h-[40px] flex items-center justify-center">{name}</span>
  </a>
);

const ImagesEditingTools = () => {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm border border-border text-center">
      <a href="https://smallseotools.com/image-editing-tools/" className="text-foreground no-underline hover:text-primary">
        <h2 className="text-3xl font-semibold">Images Editing Tools</h2>
      </a>
      <p className="max-w-3xl mx-auto mt-3 mb-8 text-muted-foreground description">
       Create a favicon, compress an image or resize a picture with a single click. All essentials for image editing are available in one place.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-6">
        {toolData.map((tool) => (
          <ToolCard key={tool.name} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default ImagesEditingTools;