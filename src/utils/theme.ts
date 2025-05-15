export function getTheme(): "light" | "dark" {
  if (typeof localStorage === "undefined") return "light";
  return (localStorage.getItem("theme") as "light" | "dark") || "light";
}

export function applyTheme(theme: "light" | "dark"): void {
  if (typeof document === "undefined") return;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("theme", theme);
  }
}

export function toggleTheme(): void {
  const current = getTheme();
  const next = current === "dark" ? "light" : "dark";
  applyTheme(next);
}
