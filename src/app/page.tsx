import {
  Clock,
  MapPin,
  DollarSign,
  Shield,
  Smartphone,
  Calculator,
  ChevronRight,
  Mail,
  Star,
  TrendingUp,
  CalendarDays,
  Truck,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <DetailsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

/* ─────────────────────────── Header ─────────────────────────── */

function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            PostalPay
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="transition-colors hover:text-primary">
            Features
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-primary"
          >
            How It Works
          </a>
          <a href="#details" className="transition-colors hover:text-primary">
            Details
          </a>
        </nav>

        <a
          href="#download"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
        >
          Get the App
        </a>
      </div>
    </header>
  );
}

/* ─────────────────────────── Hero ──────────────────────────── */

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/80 via-white to-white" />
      <div className="absolute -top-24 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pb-24 pt-24 text-center lg:pt-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
          <Star className="h-3.5 w-3.5 fill-primary" />
          Built for USPS Rural Carriers
        </div>

        <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Know Your Pay.{" "}
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Every Shift.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          PostalPay tracks your hours, mileage, and pay in real time — so you
          always know exactly what you&apos;ve earned. Built specifically for
          USPS rural carriers, with city carrier support coming soon.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30"
          >
            Download Free
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-4 text-base font-semibold text-foreground shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
          >
            See Features
          </a>
        </div>

        {/* Stats bar */}
        <div className="mt-20 grid w-full max-w-2xl grid-cols-3 divide-x divide-border rounded-2xl border border-border bg-white p-6 shadow-sm">
          <Stat value="Real-Time" label="Pay Calculations" />
          <Stat value="Rural" label="Carrier Focused" />
          <Stat value="Offline" label="First Architecture" />
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4">
      <span className="text-lg font-bold text-primary sm:text-2xl">
        {value}
      </span>
      <span className="text-xs text-slate-500 sm:text-sm">{label}</span>
    </div>
  );
}

/* ────────────────────────── Features ────────────────────────── */

function FeaturesSection() {
  const features = [
    {
      icon: Calculator,
      title: "Accurate Pay Tracking",
      description:
        "Automatic calculations for base pay, overtime, evaluation pay, holiday pay, and package day premiums — all based on current USPS rates.",
    },
    {
      icon: MapPin,
      title: "Mileage Tracking",
      description:
        "Log trips with simple mileage input or odometer readings. Track reimbursement across multiple routes and offices automatically.",
    },
    {
      icon: Clock,
      title: "Hours & Overtime",
      description:
        "Clock in and out each shift with automatic overtime calculation once you cross the weekly threshold. Every minute counts.",
    },
    {
      icon: TrendingUp,
      title: "Weekly Summaries",
      description:
        "See exactly how your week breaks down — daily details, pay-type breakdowns, and projections so there are no surprises on payday.",
    },
    {
      icon: Shield,
      title: "Private & Secure",
      description:
        "Your data is encrypted and protected with biometric authentication. PIN lock and Face ID / fingerprint support keep your info safe.",
    },
    {
      icon: Smartphone,
      title: "Works Offline",
      description:
        "Built offline-first so you can log entries on rural routes with no signal. Everything syncs automatically when you reconnect.",
    },
  ];

  return (
    <section id="features" className="scroll-mt-16 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to track your pay
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Designed around the real complexity of USPS compensation — from
            evaluation routes to green card runs.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-white p-8 transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────── How It Works ──────────────────────── */

function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      icon: Smartphone,
      title: "Set Up Your Profile",
      description:
        "Enter your position, pay rate, and the offices and routes you work. PostalPay handles the rest.",
    },
    {
      step: "02",
      icon: Clock,
      title: "Log Your Shifts",
      description:
        "Tap to clock in and out each day. Add mileage, route info, and any special pay categories like holiday or package day.",
    },
    {
      step: "03",
      icon: DollarSign,
      title: "See Your Earnings",
      description:
        "Get instant, accurate pay breakdowns for each day and week — including overtime, evaluation pay, and mileage reimbursement.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="scroll-mt-16 bg-muted py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start tracking in minutes
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/20">
                <s.icon className="h-7 w-7" />
              </div>
              <span className="mt-4 inline-block text-xs font-bold uppercase tracking-widest text-primary/60">
                Step {s.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────── Details / Positions ─────────────────── */

function DetailsSection() {
  const positions = [
    {
      icon: MapPin,
      title: "Rural Carriers (RCA & Regular)",
      description:
        "Evaluation-based pay, green card secondary route tracking, and own-vehicle mileage calculations — all built in and ready to use today.",
    },
    {
      icon: Truck,
      title: "City Carriers — Coming Soon",
      description:
        "Full city carrier support is on the way, including hourly pay with overtime, evaluation route pay, and mileage reimbursement.",
    },
    {
      icon: CalendarDays,
      title: "More Positions — Coming Soon",
      description:
        "Support for PSE and other USPS positions is in development, with customizable pay rates, overtime thresholds, and multipliers.",
    },
  ];

  return (
    <section id="details" className="scroll-mt-16 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Who It&apos;s For
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built for rural carriers. Expanding soon.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            PostalPay currently supports USPS rural carriers with full
            pay tracking. City carrier and additional position support is
            actively in development.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {positions.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-border bg-muted p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {p.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── CTA ───────────────────────────── */

function CTASection() {
  return (
    <section id="download" className="scroll-mt-16 bg-muted py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-blue-700 px-8 py-16 text-center text-white shadow-2xl shadow-primary/20 sm:px-16">
          {/* Decorative elements */}
          <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-16 -left-16 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to know exactly what you earn?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
              Download PostalPay today and take control of your pay tracking.
              Free to get started.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              {/* App Store placeholder */}
              <button
                disabled
                className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-6 py-3.5 text-left backdrop-blur-sm transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <div className="text-xs text-blue-200">Coming soon on</div>
                  <div className="text-base font-semibold">App Store</div>
                </div>
              </button>

              {/* Google Play placeholder */}
              <button
                disabled
                className="inline-flex items-center gap-3 rounded-xl bg-white/10 px-6 py-3.5 text-left backdrop-blur-sm transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current">
                  <path d="M3.18 23.68c-.17-.3-.18-.66-.18-1.05V1.37c0-.39.01-.75.18-1.05l11.2 11.68L3.18 23.68zM15.78 13.4l-2.8 2.8 8.52 4.86c.67.38 1.27.2 1.45-.42L15.78 13.4zM15.78 10.6L22.95 3.36c-.18-.62-.78-.8-1.45-.42L12.98 7.8l2.8 2.8zM12.28 12l-8.5-8.86-.01.01a1.47 1.47 0 0 0-.09.22l8.6 8.63z" />
                </svg>
                <div>
                  <div className="text-xs text-blue-200">Coming soon on</div>
                  <div className="text-base font-semibold">Google Play</div>
                </div>
              </button>
            </div>

            <p className="mt-6 text-sm text-blue-200">
              Available for iOS and Android
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────── Footer ─────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-foreground">
              PostalPay
            </span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-600">
            <a
              href="#features"
              className="transition-colors hover:text-primary"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="transition-colors hover:text-primary"
            >
              How It Works
            </a>
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:text-primary"
            >
              Terms of Service
            </Link>
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} PostalPay LLC. All rights
            reserved.
          </p>
          <p className="mt-1">
            PostalPay is not affiliated with or endorsed by the United States
            Postal Service.
          </p>
        </div>
      </div>
    </footer>
  );
}
