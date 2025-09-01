import { Article, articles } from "@/components/pages/blog/blogModel";

export function getArticleById(id: number): Article | undefined {
    return articles.find(article => article.id === id);
  }
  