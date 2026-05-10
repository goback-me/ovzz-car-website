import { unstable_cache } from "next/cache";

import { client } from "@/sanity/lib/client";
import {
  carBySlugQuery,
  carsQuery,
  homeInventorySummaryQuery,
  featuredCarsQuery,
  categoriesWithCountsQuery,
} from "@/sanity/lib/queries";
import type { Car, Category } from "@/types/car";

export type HomeInventorySummary = {
  make: string;
  bodyType: string;
  category?: Category;
};

function sanitizeCars(cars: Car[]): Car[] {
  return cars.map((car) => ({
    ...car,
    images: (car.images || []).filter((image) => Boolean(image?.url)),
    features: car.features || [],
  }));
}

function sanitizeInventorySummary(entries: HomeInventorySummary[]): HomeInventorySummary[] {
  return entries.filter((entry) => Boolean(entry.make) && Boolean(entry.bodyType));
}

const fetchAllCars = unstable_cache(async () => {
  const cars = await client.fetch<Car[]>(carsQuery);
  return sanitizeCars(cars || []);
}, ["all-cars"], { revalidate: 300 });

const fetchFeaturedCars = unstable_cache(async () => {
  const cars = await client.fetch<Car[]>(featuredCarsQuery);

  if (cars?.length) {
    return sanitizeCars(cars);
  }

  const fallbackCars = await fetchAllCars();
  return fallbackCars.slice(0, 6);
}, ["featured-cars"], { revalidate: 300 });

const fetchHomeInventorySummary = unstable_cache(async () => {
  const entries = await client.fetch<HomeInventorySummary[]>(homeInventorySummaryQuery);
  return sanitizeInventorySummary(entries || []);
}, ["home-inventory-summary"], { revalidate: 300 });

async function fetchCategoriesWithCounts() {
  const categories = await client.fetch<Category[]>(categoriesWithCountsQuery, {}, { useCdn: false });
  return categories || [];
}

const fetchCarBySlug = unstable_cache(async (slug: string) => {
  const car = await client.fetch<Car | null>(carBySlugQuery, { slug });

  if (!car) {
    return null;
  }

  return sanitizeCars([car])[0] || null;
}, ["car-by-slug"], { revalidate: 300 });

export async function getAllCars(): Promise<Car[]> {
  return fetchAllCars();
}

export async function getFeaturedCars(): Promise<Car[]> {
  return fetchFeaturedCars();
}

export async function getHomeInventorySummary(): Promise<HomeInventorySummary[]> {
  return fetchHomeInventorySummary();
}

export async function getCategoriesWithCounts(): Promise<Category[]> {
  return fetchCategoriesWithCounts();
}

export async function getCarBySlug(slug: string): Promise<Car | null> {
  return fetchCarBySlug(slug);
}
