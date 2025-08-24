export type Role = "admin" | "agent";

export type Client = {
  id: string;
  user_id: string;
  full_name: string;
  email?: string | null;
  phone?: string | null;
  created_at: string;
};

export type PolicyStatus = "active" | "expired" | "lapsed";

export type Policy = {
  id: string;
  client_id: string;
  user_id: string;
  policy_number: string;
  company_name: string;
  policy_type: string;
  premium_amount?: number | null;
  start_date?: string | null;
  end_date?: string | null;
  status: PolicyStatus;
  created_at: string;
};


