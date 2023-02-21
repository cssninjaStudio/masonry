import { APP } from "@data/config";

export const MANSORY_THEME = "mansory-theme";

// set page title
export function setTitle(title: string) {
  return title === "" ? APP.name : APP.name + " - " + title;
}

//set page sescription
export function setDescription(desc: string) {
  return desc === "" ? APP.description : desc;
}

export function currency(amount: number) {
  return (
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount) + " USD"
  );
}

export function setDarkTheme() {
  document.documentElement.classList.add("dark");
  localStorage.setItem(MANSORY_THEME, "dark");
}

export function setLightTheme() {
  document.documentElement.classList.remove("dark");
  localStorage.setItem(MANSORY_THEME, "light");
}

export function themeIsDark() {
  return localStorage.getItem(MANSORY_THEME) === "dark";
}
export function themeIsLight() {
  return localStorage.getItem(MANSORY_THEME) === "light";
}
