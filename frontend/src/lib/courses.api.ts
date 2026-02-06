// courses.api.ts
import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
});

export const coursesApi = {
    getAll: () => api.get("/courses"),

    create: (data: any) =>
        api.post("/courses", {
            title: data.title,
            description: data.description,
            career_path: data.career,
            level: data.level,
            duration: data.hours,
            external_url: data.externalUrl,
            course_order: data.order,
            skills_taught: Array.isArray(data.skillsTaught)
                ? data.skillsTaught
                : data.skillsTaught
                    ?.split("\n")
                    .map((s: string) => s.trim())
                    .filter(Boolean),
            learning_outcome: data.learningOutcome,
        }),

    update: (id: number, data: any) =>
        api.patch(`/courses/${id}`, {
            title: data.title,
            description: data.description,
            career_path: data.career_path,
            level: data.level,
            duration: data.duration,
            external_url: data.external_url,
            course_order: data.course_order,
            skills_taught: data.skills_taught,
            learning_outcome: data.learning_outcome,
        }),

    delete: (id: number) =>
        api.delete(`/courses/${id}`),
};
