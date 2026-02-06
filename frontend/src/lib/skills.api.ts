// skills.api.ts
import { api } from "./axios";

/* ---------- types ---------- */
export interface SkillCategory {
  faculty: string;
  major: string;
}

export interface Skill {
  skill_id: number;
  name: string;
  category: SkillCategory;
  icon?: string;
}

/* ใช้กับ form เท่านั้น */
export interface SkillFormData {
  name: string;
  faculty: string;
  major: string;
  icon?: string;
}

/* ---------- api ---------- */
export const getSkills = async (): Promise<Skill[]> => {
  const res = await api.get("/skills");
  return res.data;
};

export const createSkill = async (payload: {
  name: string;
  category: {
    faculty: string;
    major: string;
  };
  icon?: string;
}) => {
  const res = await api.post("/skills", payload);
  return res.data;
};

export const updateSkill = async (
  id: number,
  payload: Partial<{
    name: string;
    category: SkillCategory;
    icon?: string;
  }>
): Promise<Skill> => {
  const res = await api.patch(`/skills/${id}`, payload);
  return res.data;
};

export const deleteSkill = async (id: number): Promise<void> => {
  await api.delete(`/skills/${id}`);
};
