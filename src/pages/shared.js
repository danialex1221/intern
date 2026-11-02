import { useEffect } from "react";

export function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);
  }, [title, description]);
}

export const DEPARTMENTS = [
  "Price Statistics",
  "Business Statistics",
  "Agricultural Statistics",
  "Social and Inclusive Statistics",
  "Population Statistics",
  "Vital Statistics",
  "Statistical Surveys Methodology",
  "Geospatial Statistics",
  "Household Budget and Labor Statistics",
  "Statistics Harmonization, Standard and Quality",
  "Statistical Study, Research and Training",
  "Information System Technology and Infrastructure Development",
  "Statistical Data Dissemination and Access",
];

export const ACADEMIC_YEARS = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "5th Year",
  "Graduated",
];

export const INFO = [
  {
    title: "Head Office",
    lines: [
      "Ethiopian Statistics Service",
      "Churchill Road, Addis Ababa, Ethiopia",
      "P.O. Box 1143",
    ],
  },
  {
    title: "Phone",
    lines: ["+251-11553112"],
  },
  {
    title: "Email",
    lines: [
       "info@ess.gov.et",
    ],
  },
  {
    title: "Working Hours",
    lines: [
      "Monday - Friday: 8:30 AM - 5:30 PM",
      "Saturday - Sunday: Closed",
    ],
  },
];

export const FUNCTIONS = [
  "Data Collection and Survey",
  "Coordination and Standards",
  "Data Sharing and Accessibility",
  "Research and Training",
  "Coordinating the National Statistical System (NSS)",
];

export const STATS = [
  {
    value: "13",
    label: "Departments",
  },
  {
    value: "1960s",
    label: "Serving Since",
  },
];

export const HIGHLIGHTS = [
  {
    title: "Real Government Experience",
    desc: "Work alongside professional statisticians on national data programs.",
  },
  {
    title: "Mentorship & Training",
    desc: "Receive hands-on guidance from experienced ESS professionals throughout your internship.",
  },
  {
    title: "Career Development",
    desc: "Develop practical skills and gain valuable government work experience.",
  },
  {
    title: "Professional Networking",
    desc: "Build relationships with experts and professionals in Ethiopia's statistical system.",
  },
];