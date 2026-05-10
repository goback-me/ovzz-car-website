import { defineField, defineType } from "sanity";

const bodyTypeOptions = [
  "Sedan",
  "SUV",
  "Hatchback",
  "Coupe",
  "Convertible",
  "Truck",
  "Van",
  "Wagon",
];

const conditionOptions = ["New", "Used", "Certified"];

export const carType = defineType({
  name: "car",
  title: "Car",
  type: "document",
  groups: [
    { name: "basic", title: "Basic Info", default: true },
    { name: "pricing", title: "Pricing & Specs" },
    { name: "media", title: "Photos" },
    { name: "details", title: "Details" },
    { name: "settings", title: "Settings" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Listing title",
      type: "string",
      group: "basic",
      description: "Use a clear name like 2022 Porsche Cayenne.",
      validation: (rule) => rule.required().min(3).max(120),
    }),
    defineField({
      name: "slug",
      title: "URL slug",
      type: "slug",
      group: "basic",
      description: "Auto-generated from the title. Leave it as is unless you need a custom URL.",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "make",
      title: "Brand / make",
      type: "string",
      group: "basic",
      description: "Examples: Porsche, BMW, Audi.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "model",
      title: "Model",
      type: "string",
      group: "basic",
      description: "Examples: Cayenne, X5, Q5.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      group: "basic",
      description: "The model year shown to customers.",
      validation: (rule) => rule.required().min(1990).max(2100),
    }),
    defineField({
      name: "price",
      title: "Sale price",
      type: "number",
      group: "pricing",
      description: "Use the full price amount without commas or currency symbols.",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "mileage",
      title: "Mileage",
      type: "number",
      group: "pricing",
      description: "Mileage in kilometers.",
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: "condition",
      title: "Condition",
      type: "string",
      group: "pricing",
      description: "Pick the vehicle condition customers should see.",
      options: {
        list: conditionOptions.map((value) => ({ title: value, value })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "bodyType",
      title: "Body type",
      type: "string",
      group: "pricing",
      description: "Choose the matching vehicle shape or style.",
      options: {
        list: bodyTypeOptions.map((value) => ({ title: value, value })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      group: "basic",
      description: "Select the homepage category this car belongs to.",
      to: [{ type: "category" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "transmission",
      title: "Transmission",
      type: "string",
      group: "pricing",
      description: "Automatic, manual, or CVT.",
      options: {
        list: ["Automatic", "Manual", "CVT"].map((value) => ({
          title: value,
          value,
        })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "fuel",
      title: "Fuel type",
      type: "string",
      group: "pricing",
      description: "Choose the fuel type customers should filter by.",
      options: {
        list: ["Petrol", "Diesel", "Hybrid", "Electric"].map((value) => ({
          title: value,
          value,
        })),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "images",
      title: "Photos",
      type: "array",
      group: "media",
      description: "Add at least one strong vehicle photo. The first image becomes the preview.",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "features",
      title: "Key features",
      type: "array",
      group: "details",
      description: "Add short feature labels like Sunroof, Leather seats, or Apple CarPlay.",
      of: [{ type: "string" }],
      validation: (rule) => rule.max(30),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "details",
      rows: 6,
      description: "Write a short customer-friendly description of the vehicle.",
      validation: (rule) => rule.required().min(20),
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      group: "settings",
      description: "Turn this on to highlight the car in featured listings.",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "make",
      media: "images.0",
      year: "year",
      price: "price",
    },
    prepare({ title, subtitle, media, year, price }) {
      const priceLabel =
        typeof price === "number"
          ? new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              maximumFractionDigits: 0,
            }).format(price)
          : "No price";

      return {
        title,
        subtitle: `${subtitle || "Unknown"} • ${year || "N/A"} • ${priceLabel}`,
        media,
      };
    },
  },
});
