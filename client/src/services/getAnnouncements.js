const API_URL = "http://localhost:3000";

export async function getAnnouncements() {
  try {
    const response = await fetch(`${API_URL}/announcements`);

    if (!response.ok) throw new Error("Failed to fetch internships");
    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
