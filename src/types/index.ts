export type Profile = {
  id: number;
  beuraucracy: number;
  family: number;
  Innovation: number;
  market: number;
  created_at: Date;
  updated_at: Date;
};
export type SendArticle = {
  name: string;
  url: string | null;
  overview: string;
  message: string;
  appeal: string;
  capital_amount: number;
  earning_amount: number;
  company_size: number;
  address: string;
  is_published: boolean;
  family_point: number;
  innovation_point: number;
  market_point: number;
  bure_point: number;
};
export type Article = {
  id: number;
  name: string;
  url: string | null;
  overview: string;
  message: string;
  appeal: string;
  capital_amount: number;
  earning_amount: number;
  company_size: number;
  address: string;
  is_published: boolean;
  family_point: number;
  innovation_point: number;
  market_point: number;
  bure_point: number;
  created_at: string;
  updated_at: string;
};

export type CsrfToken = {
  csrf_token: string;
};

export type Credential = {
  email: string;
  password: string;
};
export type LoginAuth = {
  id: number;
  email: string;
  user_type: string;
};
export type CultureValue = {
  [key: string]: number;
};
