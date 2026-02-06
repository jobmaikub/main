import { api } from "./axios"; 

export interface Major {
  major_id: number;
  name: string;
  faculty_id: number;
}

export const getMajors = async (): Promise<Major[]> => {
  const res = await api.get("/majors");
  return res.data;
};

export const createMajor = async (payload: {
  name: string;
  faculty_id: number;
}) => {
  const res = await api.post("/majors", payload);
  return res.data;
};

export const updateMajor = async (
  id: number,
  payload: Partial<Omit<Major, "major_id">>
) => {
  const res = await api.patch(`/majors/${id}`, payload);
  return res.data;
};

export const deleteMajor = async (id: number) => {
  await api.delete(`/majors/${id}`);
};
