const APP_KEY = "ess_applications";
const POS_KEY = "ess_positions";
const MSG_KEY = "ess_messages";
const THEME_KEY = "ess_theme";

const isBrowser = () => typeof window !== "undefined";

function read(key, fallback) {
  if (!isBrowser()) return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

// Applications
export function getApplications() {
  return read(APP_KEY, []);
}

export function saveApplication(app) {
  const apps = getApplications();
  const id =
    "ESS-" +
    Date.now().toString(36).toUpperCase() +
    Math.floor(Math.random() * 1000).toString(36).toUpperCase();
  const record = {
    id,
    status: "Pending",
    createdAt: new Date().toISOString(),
    ...app,
  };
  apps.unshift(record);
  write(APP_KEY, apps);
  return record;
}

export function updateApplicationStatus(id, status) {
  const apps = getApplications().map((a) =>
    a.id === id ? { ...a, status } : a,
  );
  write(APP_KEY, apps);
  return apps;
}

export function deleteApplication(id) {
  const apps = getApplications().filter((a) => a.id !== id);
  write(APP_KEY, apps);
  return apps;
}

export function findApplications(query) {
  if (!query) return [];
  const q = query.trim().toLowerCase();
  return getApplications().filter(
    (a) =>
      a.id.toLowerCase() === q ||
      (a.email || "").toLowerCase() === q ||
      (a.email || "").toLowerCase().includes(q),
  );
}

// Positions
const DEFAULT_POSITIONS = [
  { id: "pos-pop", title: "Population Statistics Intern", department: "Population Statistics", slots: 4, description: "Support census and demographic surveys data preparation." },
  { id: "pos-eco", title: "Economic Statistics Intern", department: "Economic Statistics", slots: 3, description: "Assist in CPI, GDP and trade indicators data analysis." },
  { id: "pos-agri", title: "Agricultural Statistics Intern", department: "Agricultural Statistics", slots: 3, description: "Field support for crop, livestock and land-use surveys." },
  { id: "pos-soc", title: "Social Statistics Intern", department: "Social Statistics", slots: 2, description: "Welfare, education and health indicators data work." },
  { id: "pos-dp", title: "Data Processing Intern", department: "Data Processing", slots: 4, description: "Survey data cleaning, validation and tabulation." },
  { id: "pos-it", title: "IT Department Intern", department: "IT Department", slots: 5, description: "Systems support, web/app development and database admin." },
];

export function getPositions() {
  const existing = read(POS_KEY, null);
  if (!existing) {
    write(POS_KEY, DEFAULT_POSITIONS);
    return DEFAULT_POSITIONS;
  }
  return existing;
}

export function savePosition(pos) {
  const list = getPositions();
  if (pos.id) {
    const next = list.map((p) => (p.id === pos.id ? { ...p, ...pos } : p));
    write(POS_KEY, next);
    return next;
  }
  const created = { ...pos, id: "pos-" + Date.now().toString(36) };
  const next = [created, ...list];
  write(POS_KEY, next);
  return next;
}

export function deletePosition(id) {
  const next = getPositions().filter((p) => p.id !== id);
  write(POS_KEY, next);
  return next;
}

// Contact messages
export function getMessages() {
  return read(MSG_KEY, []);
}
export function saveMessage(msg) {
  const list = getMessages();
  const record = { id: "MSG-" + Date.now().toString(36), createdAt: new Date().toISOString(), ...msg };
  list.unshift(record);
  write(MSG_KEY, list);
  return record;
}

// Theme
export function getStoredTheme() {
  return read(THEME_KEY, null);
}
export function setStoredTheme(t) {
  write(THEME_KEY, t);
}
