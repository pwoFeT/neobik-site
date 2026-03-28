import fs from 'fs';
import path from 'path';

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  category: string;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  content: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

function parseMarkdoc(raw: string): { frontmatter: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { frontmatter: {}, content: raw };

  const frontmatter: Record<string, unknown> = {};
  match[1].split('\n').forEach((line) => {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    const value = line.slice(colonIdx + 1).trim().replace(/^["']|["']$/g, '');
    frontmatter[key] = value;
  });

  return { frontmatter, content: match[2].trim() };
}

export async function getAllArticles(): Promise<Article[]> {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const dirs = fs.readdirSync(CONTENT_DIR).filter((f) => {
    return fs.statSync(path.join(CONTENT_DIR, f)).isDirectory();
  });

  const articles: Article[] = [];

  for (const dir of dirs) {
    const filePath = path.join(CONTENT_DIR, dir, 'index.mdoc');
    if (!fs.existsSync(filePath)) continue;

    const raw = fs.readFileSync(filePath, 'utf-8');
    const { frontmatter, content } = parseMarkdoc(raw);

    articles.push({
      slug: dir,
      title: String(frontmatter.title || dir),
      excerpt: String(frontmatter.excerpt || ''),
      publishedAt: String(frontmatter.publishedAt || new Date().toISOString()),
      category: String(frontmatter.category || 'ia'),
      featured: frontmatter.featured === 'true' || frontmatter.featured === true,
      seoTitle: frontmatter.seoTitle ? String(frontmatter.seoTitle) : undefined,
      seoDescription: frontmatter.seoDescription ? String(frontmatter.seoDescription) : undefined,
      content,
    });
  }

  return articles.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const articles = await getAllArticles();
  return articles.find((a) => a.slug === slug) ?? null;
}

// Simple Markdoc → HTML converter (no external deps)
export function markdocToHtml(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    .replace(/^\- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/s, '<ul>$1</ul>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^([^<].+)$/gm, (line) => {
      if (line.startsWith('<') || line.trim() === '') return line;
      return `<p>${line}</p>`;
    })
    .replace(/<p><\/p>/g, '');
}
