export type CarCondition = "New" | "Used" | "Certified";

export interface CarImage {
  url: string;
  alt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image: CarImage;
  count?: number;
}

export interface Car {
  id: string;
  title: string;
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  condition: CarCondition | string;
  bodyType: string;
  transmission: string;
  fuel: string;
  slug: string;
  description: string;
  features: string[];
  category?: Category;
  images: CarImage[];
  featured?: boolean;
}

export interface LeadPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
  carId: string;
}
