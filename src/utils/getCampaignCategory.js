export async function getCampaignCategory(categorySlug) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/projects-category/${categorySlug}`,
      {
        next: { revalidate: 60 }, // optional caching
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    return res.json();
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
}