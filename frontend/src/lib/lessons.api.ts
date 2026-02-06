// src/lib/lessons.api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const lessonsApi = {
  getAll: (courseId?: number) =>
    api.get("/lessons", {
      params: courseId ? { course_id: courseId } : {},
    }),

  create: (data: {
    title: string;
    courseId: number;
    order: number;
    duration?: number;
    externalUrl?: string;
  }) =>
    api.post("/lessons", {
      title: data.title,
      course_id: data.courseId,
      lesson_order: data.order,
      duration: data.duration,
      external_url: data.externalUrl,
    }),

  update: (
    id: number,
    data: {
      title?: string;
      courseId?: number;
      order?: number;
      duration?: number;
      externalUrl?: string;
    }
  ) =>
    api.patch(`/lessons/${id}`, {
      title: data.title,
      course_id: data.courseId,
      lesson_order: data.order,
      duration: data.duration,
      external_url: data.externalUrl,
    }),

  delete: (id: number) =>
    api.delete(`/lessons/${id}`),
};
