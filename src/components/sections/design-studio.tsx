import Image from "next/image";

const tools = [
  { name: 'Logo Maker', href: 'https://smallseotools.com/logo-maker/', color: '#3b82f6' },
  { name: 'Resume Builder', href: 'https://smallseotools.com/resume-builder/', color: '#14b8a6' },
  { name: 'Flyer Maker', href: 'https://smallseotools.com/flyer-maker/', color: '#6b46c1' },
  { name: 'Poster Maker', href: 'https://smallseotools.com/poster-maker/', color: '#facc15' },
  { name: 'Invitation Maker', href: 'https://smallseotools.com/invitation-maker/', color: '#ec4899' },
  { name: 'Business Card Maker', href: 'https://smallseotools.com/business-card-maker/', color: '#10b981' },
  { name: 'Meme Generator', href: 'https://smallseotools.com/meme-generator/', color: '#f97316' },
  { name: 'Emojis', href: 'https://smallseotools.com/emojis/', color: '#4f46e5' },
];

export default function DesignStudioSection() {
  return (
    <div className="bg-[linear-gradient(135deg,#ECFCFF,#EDF2FF)] py-14">
      <div className="container">
        <div className="text-center mb-10">
          <a href="https://designstudio.smallseotools.com/" className="inline-flex items-center justify-center gap-3 text-slate-800 no-underline">
            <Image src="https://smallseotools.com/webimages/ds-logo.svg" alt="Design Studio Logo" width={30} height={30} />
            <h2 className="text-[32px] font-semibold tracking-tight">DESIGN STUDIO</h2>
          </a>
          <p className="mt-4 max-w-3xl mx-auto text-base text-slate-600">
            Craft awe-inspiring logos, posters, invitations, flyers, and resume with 1000+ premade templates offered with advanced designing tools on our DesignStudio
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-4 gap-y-6">
          {tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.href}
              className="group block rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="flex flex-col items-center p-4">
                <div className="flex items-center justify-center h-16 w-16 mb-2 rounded-lg bg-slate-100">
                  {/* Placeholder for icon */}
                </div>
                <span className="text-base font-medium text-slate-700 text-center leading-tight">{tool.name}</span>
              </div>
              <div className="h-1" style={{ backgroundColor: tool.color }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}