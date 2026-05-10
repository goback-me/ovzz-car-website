import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import type { CarFilterState } from "@/lib/filter-cars";

interface CarsFiltersProps {
  options: {
    makes: string[];
    models: string[];
    bodyTypes: string[];
    conditions: string[];
  };
  filters: CarFilterState;
  onChange: (name: keyof CarFilterState, value: string) => void;
  onReset: () => void;
}

export function CarsFilters({ options, filters, onChange, onReset }: CarsFiltersProps) {
  return (
    <div className="mb-6 rounded-2xl border border-white/10 bg-[#0E1319] p-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Input
          placeholder="Search"
          value={filters.query}
          onChange={(event) => onChange("query", event.target.value)}
        />
        <Select value={filters.make} onChange={(event) => onChange("make", event.target.value)}>
          <option value="">All makes</option>
          {options.makes.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </Select>
        <Select value={filters.model} onChange={(event) => onChange("model", event.target.value)}>
          <option value="">All models</option>
          {options.models.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </Select>
        <Select
          value={filters.bodyType}
          onChange={(event) => onChange("bodyType", event.target.value)}
        >
          <option value="">All body types</option>
          {options.bodyTypes.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </Select>
        <Select
          value={filters.condition}
          onChange={(event) => onChange("condition", event.target.value)}
        >
          <option value="">All conditions</option>
          {options.conditions.map((value) => (
            <option key={value} value={value}>{value}</option>
          ))}
        </Select>
        <Input
          type="number"
          placeholder="Min price"
          value={filters.minPrice}
          onChange={(event) => onChange("minPrice", event.target.value)}
          min={0}
        />
        <Input
          type="number"
          placeholder="Max price"
          value={filters.maxPrice}
          onChange={(event) => onChange("maxPrice", event.target.value)}
          min={0}
        />
        <button
          className="h-11 rounded-lg border border-white/20 text-sm font-semibold text-white/85 transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
          onClick={onReset}
          type="button"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
