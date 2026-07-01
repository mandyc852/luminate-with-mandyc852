import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface Article {
  slug: string
  title: string
  description: string
  category: string
  publishedAt: string
  updatedAt?: string
  content: string
}

const articlesDir = path.join(process.cwd(), "content/articles")

export function getAllArticles(): Article[] {
  const files = fs.readdirSync(articlesDir).filter((f) => f.endsWith(".md"))
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(articlesDir, file), "utf-8")
      const { data, content } = matter(raw)
      return {
        slug: data.slug,
        title: data.title,
        description: data.description,
        category: data.category,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        content,
      } as Article
    })
    .sort(
      (a, b) =>
        new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
    )
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug)
}
