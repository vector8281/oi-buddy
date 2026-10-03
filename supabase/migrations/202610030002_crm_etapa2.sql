-- CRM Honda Etapa 2
create type if not exists public.proposal_status as enum ('draft','sent','negotiating','approved','rejected','expired','cancelled');
create type if not exists public.payment_method as enum ('cash','financing','consortium','financing_down','consortium_down','trade_financing','other');
create type if not exists public.financing_status as enum ('simulation','sent','analysis','approved','rejected','contract','finalized','cancelled');
create type if not exists public.consortium_status as enum ('interest','simulation','proposal','contracting','active','contemplated','cancelled');
create type if not exists public.future_sale_status as enum ('planned','waiting','follow_up','converted','cancelled');
create type if not exists public.lost_reason as enum ('price','down_payment','financing_denied','other_brand','other_bike','used','postponed','no_interest','changed_plans','not_reached','other');
create type if not exists public.document_status as enum ('pending','received','validated','rejected');
create type if not exists public.document_type as enum ('personal','financing','proposal','other');
create table if not exists public.proposals(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 seller_id uuid references public.profiles(id), motorcycle_model_id uuid references public.motorcycle_models(id),
 motorcycle_name text, version text, motorcycle_price numeric not null default 0, down_payment numeric not null default 0,
 trade_in_value numeric not null default 0, financed_value numeric not null default 0, installments integer,
 estimated_installment numeric, payment_method public.payment_method not null default 'other', status public.proposal_status not null default 'draft',
 notes text, created_at timestamptz not null default now(), updated_at timestamptz not null default now(), expires_at timestamptz
);
create table if not exists public.financing_simulations(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 proposal_id uuid references public.proposals(id) on delete set null, seller_id uuid references public.profiles(id),
 motorcycle_name text, motorcycle_value numeric not null default 0, down_payment numeric not null default 0, financed_value numeric not null default 0,
 lender text, installments integer not null default 12, monthly_rate numeric not null default 0, estimated_installment numeric, estimated_cet numeric,
 total_estimated_paid numeric, status public.financing_status not null default 'simulation', notes text,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.financing_applications(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 proposal_id uuid references public.proposals(id) on delete set null, simulation_id uuid references public.financing_simulations(id) on delete set null,
 seller_id uuid references public.profiles(id), lender text, status public.financing_status not null default 'sent',
 requested_value numeric, approved_value numeric, notes text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.consortium_records(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 seller_id uuid references public.profiles(id), motorcycle_name text, letter_value numeric not null default 0, term_months integer,
 installment_value numeric, group_number text, quota_number text, administrator text, adhesion_date date,
 admin_rate numeric default 0, reserve_fund numeric default 0, estimated_total numeric, status public.consortium_status not null default 'interest',
 notes text, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.future_sales(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 seller_id uuid references public.profiles(id), motorcycle_name text, estimated_purchase_date date, reason text,
 estimated_value numeric, estimated_down_payment numeric, next_contact_at timestamptz, status public.future_sale_status not null default 'planned',
 notes text, appointment_id uuid references public.appointments(id) on delete set null, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.lost_opportunities(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 seller_id uuid references public.profiles(id), previous_stage public.pipeline_stage, reason public.lost_reason not null,
 description text, lost_at timestamptz not null default now(), competitor text, lost_value numeric, notes text,
 reopened_at timestamptz, reopened_to_stage public.pipeline_stage, created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.documents(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 proposal_id uuid references public.proposals(id) on delete set null, type public.document_type not null default 'other',
 name text not null, file_url text, status public.document_status not null default 'pending',
 created_by uuid references public.profiles(id), created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.commercial_activities(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 user_id uuid references public.profiles(id), activity_type text not null, title text not null, description text,
 reference_id uuid, due_at timestamptz, completed_at timestamptz, created_at timestamptz not null default now()
);
create table if not exists public.sales(
 id uuid primary key default gen_random_uuid(), customer_id uuid not null references public.customers(id) on delete cascade,
 seller_id uuid references public.profiles(id), motorcycle_model_id uuid references public.motorcycle_models(id),
 proposal_id uuid references public.proposals(id) on delete set null, sale_value numeric not null default 0, down_payment numeric default 0,
 financed_value numeric default 0, payment_method public.payment_method, installments integer, sale_date date not null default current_date, notes text, created_at timestamptz not null default now()
);
create index if not exists idx_proposals_customer on public.proposals(customer_id); create index if not exists idx_proposals_seller on public.proposals(seller_id); create index if not exists idx_proposals_status on public.proposals(status); create index if not exists idx_proposals_created on public.proposals(created_at);
create index if not exists idx_financing_customer on public.financing_simulations(customer_id); create index if not exists idx_financing_status on public.financing_simulations(status); create index if not exists idx_consortium_customer on public.consortium_records(customer_id); create index if not exists idx_consortium_status on public.consortium_records(status);
create index if not exists idx_future_customer on public.future_sales(customer_id); create index if not exists idx_future_status on public.future_sales(status); create index if not exists idx_future_contact on public.future_sales(next_contact_at); create index if not exists idx_lost_customer on public.lost_opportunities(customer_id);
create index if not exists idx_documents_customer on public.documents(customer_id); create index if not exists idx_activity_customer on public.commercial_activities(customer_id); create index if not exists idx_activity_due on public.commercial_activities(due_at);
alter table public.proposals enable row level security; alter table public.financing_simulations enable row level security; alter table public.financing_applications enable row level security; alter table public.consortium_records enable row level security; alter table public.future_sales enable row level security; alter table public.lost_opportunities enable row level security; alter table public.documents enable row level security; alter table public.commercial_activities enable row level security; alter table public.sales enable row level security;
do $$ declare t text; begin foreach t in array array['proposals','financing_simulations','financing_applications','consortium_records','future_sales','lost_opportunities','documents','commercial_activities','sales'] loop execute format('drop policy if exists "%s seller access" on public.%I',t,t); execute format('create policy "%s seller access" on public.%I for all to authenticated using (seller_id in (select id from public.profiles where user_id=auth.uid()) or user_id in (select id from public.profiles where user_id=auth.uid()) or public.current_role() in (''admin'',''manager'')) with check (seller_id in (select id from public.profiles where user_id=auth.uid()) or user_id in (select id from public.profiles where user_id=auth.uid()) or public.current_role() in (''admin'',''manager''))',t,t); end loop; end $$;
