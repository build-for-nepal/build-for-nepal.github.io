import { useEffect } from "react";

const BASE = "Build for Nepal";

export function usePageTitle(page?: string) {
  useEffect(() => {
    document.title = page ? `${page} | ${BASE}` : BASE;
    return () => {
      document.title = BASE;
    };
  }, [page]);
}
