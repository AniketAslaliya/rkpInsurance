-- Supabase schema for IMS
create table if not exists profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  company_name text,
  phone text,
  created_at timestamp default now()
);

create table if not exists clients (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references profiles(id) on delete set null,
  full_name text not null,
  email text,
  phone text,
  address text,
  date_of_birth date,
  occupation text,
  notes text,
  created_at timestamp default now()
);

create table if not exists policies (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references clients(id) on delete cascade,
  user_id uuid references profiles(id) on delete set null,
  policy_number text unique,
  company_name text not null,
  policy_type text not null,
  premium_amount decimal,
  sum_insured decimal,
  start_date date,
  end_date date,
  status text default 'active',
  document_url text,
  created_at timestamp default now()
);

create table if not exists reminders (
  id uuid default gen_random_uuid() primary key,
  policy_id uuid references policies(id) on delete cascade,
  user_id uuid references profiles(id) on delete set null,
  reminder_date date,
  reminder_type text,
  status text default 'pending',
  created_at timestamp default now()
);

create table if not exists communications (
  id uuid default gen_random_uuid() primary key,
  client_id uuid references clients(id) on delete cascade,
  user_id uuid references profiles(id) on delete set null,
  type text,
  subject text,
  content text,
  date timestamp default now()
);


