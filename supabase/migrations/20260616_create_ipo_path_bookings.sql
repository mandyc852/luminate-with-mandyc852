create table if not exists ipo_path_bookings (
  id            bigint generated always as identity primary key,
  email         text not null,
  name          text,
  stripe_session_id    text unique not null,
  stripe_payment_intent text,
  amount_paid   numeric(10,2) not null default 0,
  currency      text not null default 'USD',
  created_at    timestamptz not null default now()
);

create index if not exists idx_ipo_path_bookings_email on ipo_path_bookings (email);
