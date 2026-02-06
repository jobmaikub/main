import axios from "axios";

export interface Interest {
  interest_id: number;
  interest_name: string;
}

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getInterests = async (): Promise<Interest[]> => {
  const res = await api.get("/interests");
  return res.data;
};

export const createInterest = async (data: {
  interest_name: string;
}) => {
  const res = await api.post("/interests", data);
  return res.data;
};

export const updateInterest = async (
  id: number,
  data: { interest_name: string }
) => {
  const res = await api.patch(`/interests/${id}`, data);
  return res.data;
};

export const deleteInterest = async (id: number) => {
  await api.delete(`/interests/${id}`);
};
