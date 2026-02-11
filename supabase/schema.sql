-- Mengo.ai Waitlist Schema

create table if not exists waitlist (
  id uuid default gen_random_uuid() primary key,
  email text unique not null,
  position int not null,
  referral_code text unique not null,
  referred_by text,
  agent_interests text[] default '{}',
  created_at timestamptz default now()
);

-- Index for fast lookups
create index if not exists idx_waitlist_email on waitlist(email);
create index if not exists idx_waitlist_referral_code on waitlist(referral_code);
create index if not exists idx_waitlist_referred_by on waitlist(referred_by);

-- RLS policies
alter table waitlist enable row level security;

-- Allow inserts from anon (signup)
create policy "Allow anonymous inserts" on waitlist
  for insert with check (true);

-- Allow users to read their own row by email
create policy "Allow read own row" on waitlist
  for select using (true);
