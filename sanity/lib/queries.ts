import { groq } from "next-sanity";

export const categoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    "id": _id,
    name,
    "slug": slug.current,
    description,
    "image": image {
      "url": asset->url,
      "alt": coalesce(alt, name)
    }
  }
`;

export const categoriesWithCountsQuery = groq`
  *[_type == "category"] | order(name asc) {
    "id": _id,
    name,
    "slug": slug.current,
    description,
    "image": image {
      "url": asset->url,
      "alt": coalesce(alt, name)
    },
    "count": count(*[_type == "car" && category._ref == ^._id && defined(slug.current)])
  }
`;

export const carsQuery = groq`
  *[_type == "car" && defined(slug.current)] | order(_createdAt desc) {
    "id": _id,
    title,
    make,
    model,
    year,
    price,
    mileage,
    condition,
    bodyType,
    transmission,
    fuel,
    "slug": slug.current,
    description,
    features,
    featured,
    "category": category->{
      "id": _id,
      name,
      "slug": slug.current,
      "image": image {
        "url": asset->url,
        "alt": coalesce(alt, name)
      }
    },
    "images": images[]{
      "url": asset->url,
      "alt": coalesce(alt, ^.title)
    }
  }
`;

export const featuredCarsQuery = groq`
  *[_type == "car" && featured == true && defined(slug.current)] | order(_updatedAt desc)[0...6] {
    "id": _id,
    title,
    make,
    model,
    year,
    price,
    mileage,
    condition,
    bodyType,
    transmission,
    fuel,
    "slug": slug.current,
    description,
    features,
    featured,
    "category": category->{
      "id": _id,
      name,
      "slug": slug.current,
      "image": image {
        "url": asset->url,
        "alt": coalesce(alt, name)
      }
    },
    "images": images[]{
      "url": asset->url,
      "alt": coalesce(alt, ^.title)
    }
  }
`;

export const homeInventorySummaryQuery = groq`
  *[_type == "car" && defined(slug.current)] {
    "make": coalesce(make, "Unknown"),
    "bodyType": coalesce(bodyType, "Other"),
    "category": category->{
      "id": _id,
      name,
      "slug": slug.current
    }
  }
`;

export const carBySlugQuery = groq`
  *[_type == "car" && slug.current == $slug][0] {
    "id": _id,
    title,
    make,
    model,
    year,
    price,
    mileage,
    condition,
    bodyType,
    transmission,
    fuel,
    "slug": slug.current,
    description,
    features,
    featured,
    "category": category->{
      "id": _id,
      name,
      "slug": slug.current,
      "image": image {
        "url": asset->url,
        "alt": coalesce(alt, name)
      }
    },
    "images": images[]{
      "url": asset->url,
      "alt": coalesce(alt, ^.title)
    }
  }
`;
