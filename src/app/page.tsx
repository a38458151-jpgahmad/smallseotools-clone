import Header from "@/components/sections/header";
import HeroTitle from "@/components/sections/hero-title";
import TextAnalysisTools from "@/components/sections/text-analysis-tools";
import AiWritingGenerators from "@/components/sections/ai-writing-generators";
import DesignStudioSection from "@/components/sections/design-studio";
import ImagesEditingTools from "@/components/sections/images-editing-tools";
import KeywordsTools from "@/components/sections/keywords-tools";
import BacklinkTools from "@/components/sections/backlink-tools";
import WebsiteManagementTools from "@/components/sections/website-management-tools";
import WebsiteTrackingTools from "@/components/sections/website-tracking-tools";
import ProxyToolsSection from "@/components/sections/proxy-tools";
import DomainsTools from "@/components/sections/domains-tools";
import MetaTagsTools from "@/components/sections/meta-tags-tools";
import PasswordManagementTools from "@/components/sections/password-management-tools";
import PdfToolsSection from "@/components/sections/pdf-tools";
import DevelopmentTools from "@/components/sections/development-tools";
import UnitConverterTools from "@/components/sections/unit-converter-tools";
import BinaryConverterTools from "@/components/sections/binary-converter-tools";
import Sidebar from "@/components/sections/sidebar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="mx-auto max-w-[1240px] px-4">
        <div className="flex gap-6">
          <main className="flex-1 space-y-6">
            <HeroTitle />
            <TextAnalysisTools />
            <AiWritingGenerators />
            <ImagesEditingTools />
            <KeywordsTools />
            <BacklinkTools />
            <WebsiteManagementTools />
            <WebsiteTrackingTools />
            <ProxyToolsSection />
            <DomainsTools />
            <MetaTagsTools />
            <PasswordManagementTools />
            <PdfToolsSection />
            <DevelopmentTools />
            <UnitConverterTools />
            <BinaryConverterTools />
          </main>
          
          <aside className="hidden lg:block flex-shrink-0">
            <div className="sticky top-[80px]">
              <Sidebar />
            </div>
          </aside>
        </div>
      </div>
      
      <DesignStudioSection />
    </div>
  );
}