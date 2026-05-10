import Image from "next/image";

const brands = [
  { name: "Volkswagen", abbr: "VW", image: "/brands/volkswagen.svg" },
  { name: "BMW", abbr: "BMW", image: "/brands/bmw.svg" },
  { name: "Audi", abbr: "AUDI", image: "/brands/audi.svg" },
  { name: "Mercedes", abbr: "MB", image: "/brands/mercedes.svg" },
  { name: "FIAT", abbr: "FIAT", image: "/brands/fiat.svg" },
  { name: "MINI", abbr: "MINI", image: "/brands/mini.svg" },
  { name: "Porsche", abbr: "PRSCH", image: "/brands/porsche.svg" },
  { name: "Citroën", abbr: "CITRO", image: "/brands/citroen.svg" },
  { name: "Land Rover", abbr: "LR", image: "/brands/land-rover.svg" },
  { name: "Volvo", abbr: "VOLVO", image: "/brands/volvo.svg" },
  { name: "Jaguar", abbr: "JAG", image: "/brands/jaguar.svg" },
];

export function BrandStrip() {
  return (
    <section className="mx-auto w-full max-w-7xl py-8 px-4 sm:px-6">
      <div className=" py-6">
        <div className="grid grid-cols-3 gap-8 sm:gap-3 sm:grid-cols-6 md:grid-cols-11">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-14 flex-col items-center justify-center gap-0.5 "
              title={brand.name}
            >
              <Image src={brand.image} alt={brand.name} width={120} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
