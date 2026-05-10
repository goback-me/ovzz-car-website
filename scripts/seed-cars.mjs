/**
 * Sanity CMS Car Seed Script
 *
 * Steps:
 * 1. Go to https://sanity.io/manage → your project → API → Tokens
 * 2. Create a token with "Editor" role
 * 3. Add it to .env.local:  SANITY_WRITE_TOKEN=skXXXXX...
 * 4. Run:  node --env-file .env.local scripts/seed-cars.mjs
 */

import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-09";
const token = process.env.SANITY_WRITE_TOKEN;

if (!token) {
  console.error("\n❌  SANITY_WRITE_TOKEN is missing from your environment.");
  console.error(
    "    Get one at: https://sanity.io/manage → project → API → Tokens (Editor role)\n"
  );
  process.exit(1);
}

if (!projectId) {
  console.error("\n❌  NEXT_PUBLIC_SANITY_PROJECT_ID is not set.\n");
  process.exit(1);
}

const client = createClient({ projectId, dataset, apiVersion, token, useCdn: false });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

async function uploadImageFromUrl(url, filename) {
  console.log(`  ↑ uploading image: ${filename}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch image: ${url} → ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const asset = await client.assets.upload("image", buffer, {
    filename,
    contentType: "image/jpeg",
  });
  return { _type: "image", asset: { _type: "reference", _ref: asset._id } };
}

// ---------------------------------------------------------------------------
// Car data
// ---------------------------------------------------------------------------

const CARS = [
  {
    make: "BMW",
    model: "3 Series",
    year: 2022,
    price: 32500,
    mileage: 28000,
    condition: "Used",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuel: "Petrol",
    featured: true,
    description:
      "Immaculate 2022 BMW 3 Series in Alpine White. Full BMW service history, recently serviced. Sport package with M-sport bumpers, 18-inch alloys and sunroof. Interior in black Dakota leather in excellent condition. Drives perfectly — no expense spared on maintenance.",
    features: ["Sunroof", "Heated Seats", "Apple CarPlay", "Parking Sensors", "Lane Assist", "M-Sport Package"],
    imageUrl: "https://picsum.photos/seed/bmw3series/900/600",
  },
  {
    make: "Toyota",
    model: "Land Cruiser",
    year: 2021,
    price: 84900,
    mileage: 41000,
    condition: "Used",
    bodyType: "SUV",
    transmission: "Automatic",
    fuel: "Diesel",
    featured: true,
    description:
      "2021 Toyota Land Cruiser 200 Series in Graphite. This is the flagship GXL grade with full leather, rear entertainment screens, and 7-seat configuration. Comprehensive Toyota service history. Towbar fitted, long-range fuel tank. Inspected and road-tested — exceptional condition for the mileage.",
    features: ["7 Seats", "Rear Entertainment", "Leather Interior", "Towbar", "360 Camera", "Adaptive Cruise"],
    imageUrl: "https://picsum.photos/seed/landcruiser2021/900/600",
  },
  {
    make: "Volkswagen",
    model: "Golf GTI",
    year: 2023,
    price: 36800,
    mileage: 9500,
    condition: "Used",
    bodyType: "Hatchback",
    transmission: "Automatic",
    fuel: "Petrol",
    featured: true,
    description:
      "Near-new 2023 Volkswagen Golf GTI with only 9,500 km. Still under new-car warranty. Clubsport body kit, Harman Kardon audio, and the excellent DSG dual-clutch gearbox. One owner from new. Full VW dealer service history. A genuinely exciting car that still has that fresh-off-the-lot feel.",
    features: ["DSG Gearbox", "Harman Kardon Audio", "Adaptive Dampers", "LED Matrix Headlights", "CarPlay/Android Auto"],
    imageUrl: "https://picsum.photos/seed/vwgolfgti/900/600",
  },
  {
    make: "Mercedes-Benz",
    model: "C 300",
    year: 2020,
    price: 41500,
    mileage: 55000,
    condition: "Certified",
    bodyType: "Sedan",
    transmission: "Automatic",
    fuel: "Petrol",
    featured: true,
    description:
      "Certified 2020 Mercedes-Benz C 300 with AMG Line package. Obsidian Black with Macchiato Beige leather — a stunning combination. MBUX infotainment, 360-degree camera, and panoramic sunroof. Full Mercedes-Benz dealer service history. Every inspection point has been passed — this is the clean title you want.",
    features: ["AMG Line", "MBUX Infotainment", "Panoramic Sunroof", "360 Camera", "Burmester Audio", "Night Package"],
    imageUrl: "https://picsum.photos/seed/mercc300/900/600",
  },
  {
    make: "Audi",
    model: "Q5 S-Line",
    year: 2022,
    price: 56900,
    mileage: 32000,
    condition: "Used",
    bodyType: "SUV",
    transmission: "Automatic",
    fuel: "Diesel",
    featured: false,
    description:
      "2022 Audi Q5 S-Line Quattro in Daytona Grey. S-Line exterior and interior package, virtual cockpit, and matrix LED headlights. Full Audi service history at authorized dealer. All-wheel drive with the smooth 2.0 TDI engine — exceptional motorway cruiser with real-world fuel economy.",
    features: ["Quattro AWD", "S-Line Package", "Virtual Cockpit", "Matrix LED", "Keyless Entry", "Heated Seats"],
    imageUrl: "https://picsum.photos/seed/audiq5sline/900/600",
  },
  {
    make: "Honda",
    model: "Civic Type R",
    year: 2021,
    price: 44500,
    mileage: 22000,
    condition: "Used",
    bodyType: "Hatchback",
    transmission: "Manual",
    fuel: "Petrol",
    featured: false,
    description:
      "Championship White 2021 Honda Civic Type R — one of the most driver-focused hot hatches ever made. Six-speed manual, limited-slip differential, adaptive dampers. Single owner, no track use, books up to date. This is a genuine enthusiast car that's been enjoyed on the road, not abused.",
    features: ["Limited-Slip Diff", "Adaptive Dampers", "Brembo Brakes", "Type R Bucket Seats", "Honda Sensing Suite"],
    imageUrl: "https://picsum.photos/seed/hondacivictyper/900/600",
  },
  {
    make: "Ford",
    model: "Mustang GT",
    year: 2020,
    price: 49900,
    mileage: 38000,
    condition: "Used",
    bodyType: "Coupe",
    transmission: "Manual",
    fuel: "Petrol",
    featured: false,
    description:
      "2020 Ford Mustang GT 5.0 V8 in Race Red with black stripes. Six-speed manual transmission with the proper rumble. MagneRide suspension, SYNC 3 infotainment, and reverse camera. Professionally inspected — no oil leaks, no rust, mechanically excellent. This V8 still sounds like it should.",
    features: ["5.0 V8 Engine", "MagneRide Suspension", "SYNC 3 Infotainment", "Reverse Camera", "Launch Control"],
    imageUrl: "https://picsum.photos/seed/fordmustanggt/900/600",
  },
  {
    make: "Porsche",
    model: "Cayenne",
    year: 2022,
    price: 129000,
    mileage: 18000,
    condition: "Certified",
    bodyType: "SUV",
    transmission: "Automatic",
    fuel: "Petrol",
    featured: false,
    description:
      "2022 Porsche Cayenne in Jet Black Metallic with Bordeaux Red leather. Air suspension, PDLS+ matrix LED headlights, Bose Surround Sound and the factory Porsche Sport Chrono package. Porsche Approved Certified — comes with full warranty. This is the sports car that happens to be an SUV.",
    features: ["Air Suspension", "Sport Chrono", "Bose Surround Sound", "PDLS+ LED", "Porsche Approved", "Pano Roof"],
    imageUrl: "https://picsum.photos/seed/porschecayenne/900/600",
  },
];

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function seedCars() {
  console.log(`\n🚗  Seeding ${CARS.length} cars into Sanity (${projectId}/${dataset})\n`);

  for (const car of CARS) {
    const title = `${car.year} ${car.make} ${car.model}`;
    console.log(`\n→ ${title}`);

    let imageRef;
    try {
      imageRef = await uploadImageFromUrl(car.imageUrl, `${slugify(title)}.jpg`);
    } catch (err) {
      console.warn(`  ⚠ Image upload failed (${err.message}) — creating car without image`);
    }

    const doc = {
      _type: "car",
      title,
      slug: { _type: "slug", current: slugify(title) },
      make: car.make,
      model: car.model,
      year: car.year,
      price: car.price,
      mileage: car.mileage,
      condition: car.condition,
      bodyType: car.bodyType,
      transmission: car.transmission,
      fuel: car.fuel,
      featured: car.featured,
      description: car.description,
      features: car.features,
      images: imageRef ? [imageRef] : [],
    };

    try {
      const result = await client.create(doc);
      console.log(`  ✓ Created: ${result._id}`);
    } catch (err) {
      if (err.message?.includes("already exists") || err.statusCode === 409) {
        console.log(`  ~ Skipped (already exists)`);
      } else {
        console.error(`  ✗ Failed: ${err.message}`);
      }
    }
  }

  console.log("\n✅  Done! Open /studio to review and add photos to the cars.\n");
}

seedCars().catch((err) => {
  console.error("\n💥  Seed failed:", err.message);
  process.exit(1);
});
