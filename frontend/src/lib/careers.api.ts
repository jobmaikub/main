const API_BASE = "http://localhost:3000/careers";

/* ===== GET ===== */
export async function fetchCareers(industry?: string) {
  const url = industry
    ? `${API_BASE}?industry=${encodeURIComponent(industry)}`
    : API_BASE;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Fetch careers failed");
  return res.json();
}

/* ===== CREATE ===== */
export async function createCareer(data: {
  title: string;
  description: string;
  industry: string;
  min_salary?: number;
  max_salary?: number;
  growth_rate?: number;
  image_url?: string;
  required_skills?: string[];
  responsibilities?: string[];
  interest?: string;
}) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Create career failed");
  return res.json();
}

/* ===== UPDATE ===== */
export async function updateCareer(
  id: number,
  data: {
    title?: string;
    description?: string;
    industry?: string;
    min_salary?: number;
    max_salary?: number;
    growth_rate?: number;
    image_url?: string;
    required_skills?: string[];
    responsibilities?: string[];
    interest?: string;
  }
) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("Update career failed");
  return res.json();
}

/* ===== DELETE ===== */
export async function deleteCareer(id: number) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Delete career failed");
  return res.json();
}
