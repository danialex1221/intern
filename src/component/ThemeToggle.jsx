import { useEffect } from "react";

export default function ThemeToggle() {
  useEffect(() => {
    document.documentElement.classList.remove("dark");
  }, []);

  return null;
}