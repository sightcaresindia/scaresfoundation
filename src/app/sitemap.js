export default async function sitemap() {
  const baseUrl = "https://sightcares.org";

  /* ----------------------------
     STATIC PAGES
  ----------------------------- */
  const staticPages = [
    "",
    "/about-us",
    "/programs",
    "/programs/medical-guidance",
    "/programs/subsidized-surgeries",
    "/programs/pre-post-surgery-care",
    "/programs/medicines-assistive-devices",
    "/programs/eye-camps-screenings",
    "/programs/awareness-advocacy",
    "/our-campaigns",
    "/campaigns/awareness-advocacy",
    "/campaigns/eye-health-camps-mobile-vision-clinics",
    "/campaigns/subsidised-surgeries",
    "/campaigns/medicines-assistive-devices",
    "/campaign/anil-thought-he-was-going-blind-forever-he-just-needed-to-know-better",
    "/campaign/preeti-can-be-saved-from-going-blind-but-time-is-running-out",
    "/campaign/a-white-cane-and-glasses-could-give-mohan-his-dignity-back",
    "/faqs",
    "/resources/government-schemes-and-support",
    "/resources/medical-and-surgery-process-guide",
    "/get-involved",
    "/get-involved/volunteer-opportunities",
    "/get-involved/corporate-partnerships",
    "/get-involved/fundraising-and-campaigns",
    "/get-involved/internship-programs",
    "/blogs",
    "/contact-us",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-cancellation-policy",
  ];

  const staticUrls = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page === "" ? 1.0 : 0.8,
  }));

  /* ----------------------------
     DYNAMIC PAGES
     Example: blog posts
  ----------------------------- */

  
  const res = await fetch(
    `https://rkadmin25.sightcares.org/api/blogs?page=0&limit=500`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch blogs for sitemap");
  }

  const json = await res.json();

  const dynamicUrls = json.data.map((post) => ({
    url: `${baseUrl}/${post.slug}`, // adjust route if needed
    lastModified: new Date(), // since API has no updatedAt
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  /* ----------------------------
     MERGE & RETURN
  ----------------------------- */
  return [...staticUrls, ...dynamicUrls];
}
