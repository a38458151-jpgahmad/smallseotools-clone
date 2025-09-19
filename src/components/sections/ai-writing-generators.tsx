import type { FC } from 'react';
import {
  FilePenLine,
  Sparkles,
  Bot,
  Heading2,
  Pilcrow,
  Heading1,
  Workflow,
  Quote,
  BookOpen,
  UserRound,
  Milestone,
  Mail,
} from 'lucide-react';

const tools = [
  { name: 'AI Essay Writer', href: 'https://smallseotools.com/ai-essay-writer/', icon: FilePenLine },
  { name: 'AI Writer', href: 'https://smallseotools.com/ai-writer/', icon: Sparkles },
  { name: 'AI Text Generator', href: 'https://smallseotools.com/ai-text-generator/', icon: Bot },
  { name: 'Title Generator', href: 'https://smallseotools.com/title-generator/', icon: Heading2 },
  { name: 'Paragraph Generator', href: 'https://smallseotools.com/paragraph-generator/', icon: Pilcrow },
  { name: 'Essay Title Generator', href: 'https://smallseotools.com/essay-title-generator/', icon: Heading1 },
  { name: 'Plot Generator', href: 'https://smallseotools.com/plot-generator/', icon: Workflow },
  { name: 'Thesis Statement Generator', href: 'https://smallseotools.com/thesis-statement-generator/', icon: Quote },
  { name: 'AI Story Generator', href: 'https://smallseotools.com/ai-story-generator/', icon: BookOpen },
  { name: 'AI Humanizer', href: 'https://smallseotools.com/ai-humanizer/', icon: UserRound },
  { name: 'Conclusion Generator', href: 'https://smallseotools.com/conclusion-generator/', icon: Milestone },
  { name: 'AI Email Writer', href: 'https://smallseotools.com/ai-email-writer/', icon: Mail },
];

const AiWritingGenerators: FC = () => {
  return (
    <div className="mt-6 rounded-lg border bg-card p-4 shadow-sm sm:p-6">
      <div className="text-center">
        <h2 className="text-[32px] font-semibold text-foreground">
          <a href="https://smallseotools.com/ai-writing-generators/" className="text-inherit no-underline hover:text-primary">
            AI Writing Generators
          </a>
        </h2>
        <p className="mx-auto mt-2 max-w-3xl px-5 text-sm text-muted-foreground">
          Creating compelling content has become an effortless task with our range of AI writing tools. From generating an outline to writing a blog, essay, poem, or story, our AI writing toolkit has got you covered!
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            className="group flex min-h-[125px] w-36 flex-col items-center justify-start rounded-md border bg-card p-4 text-center text-foreground no-underline shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-3 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent">
              <tool.icon className="h-6 w-6 text-accent-foreground" />
            </div>
            <span className="text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
              {tool.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AiWritingGenerators;