import { createClient } from "next-sanity";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const categories = [
  {
    _type: "category",
    name: "SUVs",
    slug: { current: "suvs" },
    description: "Spacious and versatile sport utility vehicles",
  },
  {
    _type: "category",
    name: "Sedans",
    slug: { current: "sedans" },
    description: "Comfortable and elegant four-door vehicles",
  },
  {
    _type: "category",
    name: "Hatchbacks",
    slug: { current: "hatchbacks" },
    description: "Compact and practical vehicles with rear liftgate",
  },
  {
    _type: "category",
    name: "Luxury Cars",
    slug: { current: "luxury-cars" },
    description: "Premium vehicles with high-end features and performance",
  },
  {
    _type: "category",
    name: "Electric Vehicles",
    slug: { current: "electric-vehicles" },
    description: "Eco-friendly electric and hybrid vehicles",
  },
];

async function seedCategories() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const token = process.env.SANITY_API_TOKEN;

  if (!projectId || !dataset || !token) {
    console.error("❌ Missing required environment variables:");
    console.error(`   NEXT_PUBLIC_SANITY_PROJECT_ID: ${projectId ? "✓" : "✗"}`);
    console.error(`   NEXT_PUBLIC_SANITY_DATASET: ${dataset ? "✓" : "✗"}`);
    console.error(`   SANITY_API_TOKEN: ${token ? "✓" : "✗"}`);
    process.exit(1);
  }

  try {
    console.log("🌱 Starting to seed categories...");

    for (const category of categories) {
      try {
        const result = await client.create(category);
        console.log(`✅ Created category: ${result.name} (${result._id})`);
      } catch (error) {
        console.error(`❌ Error creating ${category.name}:`, error);
      }
    }

    console.log("✨ Seeding complete!");
  } catch (error) {
    console.error("Fatal error:", error);
    process.exit(1);
  }
}

seedCategories();
