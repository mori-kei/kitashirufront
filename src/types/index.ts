export type Profile = {
  id: number;
  beuraucracy: number;
  family: number;
  Innovation: number;
  market: number;
  created_at: Date;
  updated_at: Date;
};

export type CsrfToken = {
  csrf_token: string;
};

export type Credential = {
  email: string;
  password: string;
};
export type LoginUser = {
  id: number;
  email: string;
};
export type CultureValue = {
  [key: string]: number;
};
