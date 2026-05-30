import { Proposition, Vendor, Product, Solution } from "@/lib/types";
import {
  PROPOSITIONS,
  VENDORS,
  PRODUCTS,
  SOLUTIONS,
} from "@/lib/data/mockData";

/**
 * Catalog data source for the canvas (propositions / vendors / products / solutions).
 *
 * This hook is the single seam between the canvas UI and where catalog data comes
 * from. Today it returns the hardcoded mock catalog synchronously; when the app is
 * absorbed into the itq-app-portal monorepo this is the one place to swap in a
 * Firestore-backed `useCatalog()` (parallel `getDocs`, loading/error state) WITHOUT
 * touching any consuming component — see docs/migration/MONOREPO_MIGRATION_PLAN.md
 * (Phase 0 step 2, Phase 3 step 3).
 */
export interface CanvasDataSource {
  propositions: Proposition[];
  vendors: Vendor[];
  products: Product[];
  solutions: Solution[];
  isLoading: boolean;
  error: Error | null;
}

export function useCanvasDataSource(): CanvasDataSource {
  return {
    propositions: PROPOSITIONS,
    vendors: VENDORS,
    products: PRODUCTS,
    solutions: SOLUTIONS,
    isLoading: false,
    error: null,
  };
}
