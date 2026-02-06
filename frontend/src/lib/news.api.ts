const API_URL = import.meta.env.VITE_API_URL;

export interface News {
  news_id: number;
  title: string;
  summary: string;
  industry: any;
  image_url: string;
  source_url: string;
  source_name: string;
  created_at: string;
}

export const getNews = async (): Promise<News[]> => {
  const res = await fetch(`${API_URL}/news`);
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
};

export const createNews = async (data: Partial<News>): Promise<News> => {
  const res = await fetch(`${API_URL}/news`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const updateNews = async (
  id: number,
  data: Partial<News>
): Promise<News> => {
  const res = await fetch(`${API_URL}/news/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const deleteNews = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/news/${id}`, { method: "DELETE" });
};
