import { User } from "@/data/usersData";

const API_BASE = "http://localhost:3000/users";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch(API_BASE);
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}

export async function fetchUserById(id: number): Promise<User> {
  const res = await fetch(`${API_BASE}/${id}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
}

export async function createUser(data: {
  name: string;
  email: string;
  role: "admin" | "user";
}): Promise<User> {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(err);
  }

  return res.json();
}

export async function deleteUser(id: number): Promise<void> {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Delete failed");
}

export async function updateUserStatus(
  id: number,
  status: "unban" | "ban"
): Promise<User> {
  const res = await fetch(`${API_BASE}/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  if (!res.ok) throw new Error("Update status failed");
  return res.json();
}
