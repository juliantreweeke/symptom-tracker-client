export const DEFAULT_VALUES = {
  FILTERS: [],
  ASSESSMENTS: [],
  CLINICIANS: [],
  SEARCH_QUERY: ""
};

export const REQUEST_STATUS = {
  INITIAL: "Initial",
  LOADING: "Loading",
  FAILED: "Failed",
  SUCCESS: "Success"
};

export const ROUTES = {
  ASSESSMENT: "assessment",
  CLIENT: "client",
  CLINICIAN: "clinician",
  USER: {
    AUTH: "user/auth",
    BASE: "user",
    CLIENTS: "user/clients",
    CLIENT: "user/client",
    REGISTER: "user/register",
    LOGIN: "user/login"
  }
};

export const ROLES = {
  ADMIN: "ADMIN",
  CLIENT: "CLIENT",
  CLINICIAN: "CLINICIAN"
};

export const SESSION_STORAGE_KEYS = {
  JWT: "jwt",
  ROLE: "role"
};

export const SIDE_BAR_NAVIGATION = [
  {
    title: "Home",
    route: "/dashboard"
  },
  {
    title: "Clients",
    route: "/clients"
  },
  {
    title: "Tests",
    route: "/tests"
  },
  {
    title: "Settings",
    route: "/settings"
  }
];
