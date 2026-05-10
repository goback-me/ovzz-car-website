import type { Car } from "@/types/car";

export interface CarFilterState {
  query: string;
  make: string;
  model: string;
  bodyType: string;
  category: string;
  condition: string;
  minPrice: string;
  maxPrice: string;
}

export function filterCars(cars: Car[], filters: CarFilterState): Car[] {
  const query = filters.query.trim().toLowerCase();
  const minPrice = Number(filters.minPrice || 0);
  const maxPrice = Number(filters.maxPrice || Number.MAX_SAFE_INTEGER);

  return cars.filter((car) => {
    const textMatch =
      !query ||
      [car.title, car.make, car.model, car.bodyType, car.condition]
        .join(" ")
        .toLowerCase()
        .includes(query);

    const makeMatch = !filters.make || car.make === filters.make;
    const modelMatch = !filters.model || car.model === filters.model;
    const bodyTypeMatch = !filters.bodyType || car.bodyType === filters.bodyType;
    const categoryMatch = !filters.category || car.category?.slug === filters.category;
    const conditionMatch = !filters.condition || car.condition === filters.condition;
    const priceMatch = car.price >= minPrice && car.price <= maxPrice;

    return (
      textMatch &&
      makeMatch &&
      modelMatch &&
      bodyTypeMatch &&
      categoryMatch &&
      conditionMatch &&
      priceMatch
    );
  });
}
