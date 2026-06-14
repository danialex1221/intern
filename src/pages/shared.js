import { useEffect } from "react";

export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;
    const selector = 'meta[name="description"]';
    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);
  }, [title, description]);
}

export const DEPARTMENTS = [
  "Population Statistics",
  "Economic Statistics",
  "Agricultural Statistics",
  "Social Statistics",
  "Data Processing",
  "IT Department",
];

export const ACADEMIC_YEARS = ["1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "Graduated"];

export const INFO = [
  { icon: "📍", title: "Head Office", lines: ["Ethiopian Statistics Service", "Churchill Road, Addis Ababa, Ethiopia", "P.O. Box 1143"] },
  { icon: "📞", title: "Phone", lines: ["+251-11-111-2345", "+251-11-111-6789"] },
  { icon: "✉️", title: "Email", lines: ["internship@ess.gov.et", "info@ess.gov.et"] },
  { icon: "🕒", title: "Working Hours", lines: ["Monday - Friday: 8:30 AM - 5:30 PM", "Saturday - Sunday: Closed"] },
];

export const FUNCTIONS = [
  "Conducting the Population and Housing Census of Ethiopia",
  "Producing agricultural sample surveys and crop statistics",
  "Compiling the Consumer Price Index (CPI) and inflation data",
  "Producing GDP, national accounts and economic indicators",
  "Running welfare, health, education and labour force surveys",
  "Maintaining the national statistical database and geographic frame",
  "Setting national methodological standards for official statistics",
  "Coordinating the National Statistical System (NSS)",
];

export const STATS = [
  { value: "500+", label: "Interns Hosted" },
  { value: "6", label: "Departments" },
  { value: "30+", label: "Universities" },
  { value: "1960s", label: "Serving Since" },
];

export const HIGHLIGHTS = [
  { icon: "🏛️", title: "Real Government Experience", desc: "Work alongside professional statisticians on national data programs." },
  { icon: "🗂️", title: "6 Specialized Departments", desc: "Population, Economic, Agricultural, Social, Data Processing and IT." },
  { icon: "🎓", title: "Mentorship & Training", desc: "Hands-on guidance from senior ESS staff throughout your internship." },
  { icon: "📜", title: "Certificate of Completion", desc: "Receive an official ESS certificate recognizing your contribution." },
];
