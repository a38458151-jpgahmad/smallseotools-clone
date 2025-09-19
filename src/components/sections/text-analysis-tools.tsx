import Link from 'next/link';
import {
  FileSearch,
  PenSquare,
  SpellCheck,
  Hash,
  SpellCheck2,
  Repeat,
  Fingerprint,
  CaseSensitive,
  Combine,
  ScanText,
  Languages,
  Image,
  AudioLines,
  FileJson,
  Baseline,
  FileEdit,
  ArrowLeftRight,
  Mic,
  PenLine,
  BrainCircuit,
  AlignLeft,
  CheckCircle2,
  ReplaceAll,
  Quote,
  FileCheck,
  FileCheck2 as PaperCheckerIcon,
  ClipboardCheck,
  TextCursor,
  RefreshCcw,
  FileSignature,
  WrapText,
  RefreshCw,
  Replace,
  ScanLine,
  Camera,
  Bot,
  BookMarked,
  Notebook,
  EyeOff,
  Radio,
  Bold,
  Type,
  FlipVertical,
  LucideProps,
} from 'lucide-react';
import { FC } from 'react';

type Tool = {
  name: string;
  href: string;
  icon: FC<LucideProps>;
};

const tools: Tool[] = [
  { name: 'Plagiarism Checker', href: 'https://smallseotools.com/plagiarism-checker/', icon: FileSearch },
  { name: 'Article Rewriter', href: 'https://smallseotools.com/article-rewriter/', icon: PenSquare },
  { name: 'Free Grammar Checker', href: 'https://smallseotools.com/grammar-checker/', icon: SpellCheck },
  { name: 'Word Counter', href: 'https://smallseotools.com/word-counter/', icon: Hash },
  { name: 'Spell Checker', href: 'https://smallseotools.com/spell-checker/', icon: SpellCheck2 },
  { name: 'Paraphrasing Tool', href: 'https://smallseotools.com/paraphrasing-tool/', icon: Repeat },
  { name: 'MD5 Generator', href: 'https://smallseotools.com/md5-generator/', icon: Fingerprint },
  { name: 'Uppercase To Lowercase', href: 'https://smallseotools.com/uppercase-to-lowercase/', icon: CaseSensitive },
  { name: 'Word Combiner', href: 'https://smallseotools.com/word-combiner/', icon: Combine },
  { name: 'Image To Text Converter', href: 'https://smallseotools.com/image-to-text-converter/', icon: ScanText },
  { name: 'Translate English To English', href: 'https://smallseotools.com/translate-english-to-english/', icon: Languages },
  { name: 'Text To Image', href: 'https://smallseotools.com/text-to-image/', icon: Image },
  { name: 'Text To Speech', href: 'https://smallseotools.com/text-to-speech/', icon: AudioLines },
  { name: 'JPG To Word', href: 'https://smallseotools.com/jpg-to-word/', icon: FileJson },
  { name: 'Small Text Generator', href: 'https://smallseotools.com/small-text-generator/', icon: Baseline },
  { name: 'Online Text Editor', href: 'https://smallseotools.com/online-text-editor/', icon: FileEdit },
  { name: 'Reverse Text Generator', href: 'https://smallseotools.com/reverse-text-generator/', icon: ArrowLeftRight },
  { name: 'Speech To Text', href: 'https://smallseotools.com/speech-to-text/', icon: Mic },
  { name: 'Sentence Rephraser', href: 'https://smallseotools.com/sentence-rephraser/', icon: PenLine },
  { name: 'AI Content Detector', href: 'https://smallseotools.com/ai-content-detector/', icon: BrainCircuit },
  { name: 'Paragraph Rewriter', href: 'https://smallseotools.com/paragraph-rewriter/', icon: AlignLeft },
  { name: 'Sentence Checker', href: 'https://smallseotools.com/sentence-checker/', icon: CheckCircle2 },
  { name: 'Rewording Tool', href: 'https://smallseotools.com/rewording-tool/', icon: ReplaceAll },
  { name: 'Punctuation Checker', href: 'https://smallseotools.com/punctuation-checker/', icon: Quote },
  { name: 'Essay Checker', href: 'https://smallseotools.com/essay-checker/', icon: FileCheck },
  { name: 'Paper Checker', href: 'https://smallseotools.com/paper-checker/', icon: PaperCheckerIcon },
  { name: 'Online Proofreader', href: 'https://smallseotools.com/online-proofreader/', icon: ClipboardCheck },
  { name: 'Word Changer', href: 'https://smallseotools.com/word-changer/', icon: TextCursor },
  { name: 'Sentence Rewriter', href: 'https://smallseotools.com/sentence-rewriter/', icon: RefreshCcw },
  { name: 'Essay Rewriter', href: 'https://smallseotools.com/essay-rewriter/', icon: FileSignature },
  { name: 'Text Summarizer', href: 'https://smallseotools.com/text-summarizer/', icon: WrapText },
  { name: 'Paraphrase Generator', href: 'https://smallseotools.com/paraphrase-generator/', icon: RefreshCw },
  { name: 'Sentence Changer', href: 'https://smallseotools.com/sentence-changer/', icon: Replace },
  { name: 'OCR', href: 'https://smallseotools.com/ocr/', icon: ScanLine },
  { name: 'Image Translator', href: 'https://smallseotools.com/image-translator/', icon: Camera },
  { name: 'ChatGPT Detector', href: 'https://smallseotools.com/chatgpt-detector/', icon: Bot },
  { name: 'Citation Generator', href: 'https://smallseotools.com/citation-generator/', icon: BookMarked },
  { name: 'Online Notepad', href: 'https://smallseotools.com/online-notepad/', icon: Notebook },
  { name: 'Invisible Character', href: 'https://smallseotools.com/invisible-character/', icon: EyeOff },
  { name: 'Morse Code Translator', href: 'https://smallseotools.com/morse-code-translator/', icon: Radio },
  { name: 'Bold Text Generator', href: 'https://smallseotools.com/bold-text-generator/', icon: Bold },
  { name: 'Small Caps Generator', href: 'https://smallseotools.com/small-caps/', icon: Type },
  { name: 'Upside Down Text Generator', href: 'https://smallseotools.com/upside-down-text/', icon: FlipVertical },
];

const TextAnalysisTools = () => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <div className="text-center">
        <h2 className="text-[32px] font-semibold text-foreground leading-[1.3]">
          <Link href="/text-analysis-tools" className="text-foreground no-underline hover:underline">
            Text Analysis Tools
          </Link>
        </h2>
        <p className="mt-4 text-base text-muted-foreground max-w-3xl mx-auto px-5">
          A complete set of text tools is now at your fingertips. Check plagiarism, rewrite an article, run a spell checker, count words or change text case.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.href}
            className="group flex h-full flex-col items-center justify-start gap-3 rounded-lg border border-border bg-secondary p-4 text-center transition-transform duration-200 hover:scale-[1.02]"
          >
            <tool.icon className="h-12 w-12 text-accent-foreground" strokeWidth={1.5} />
            <span className="tool-name flex-grow flex items-center text-base font-medium text-foreground text-balance">
              {tool.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TextAnalysisTools;