"use client";

import { useState } from "react";

export default function Home() {
  const [activeMode, setActiveMode] = useState<"track" | "budget" | "invest">(
    "track",
  );

  const metrics = [
    { label: "Average spend saved", value: "18%" },
    { label: "Free intro", value: "3 months" },
    { label: "AI data points", value: "5,000+" },
    { label: "Monthly plan", value: "₹49" },
  ];

  const demoModes = {
    track: {
      label: "Expense tracking",
      title: "Watch spending by category as it happens.",
      body: "FinPilot reads transaction signals, tags them automatically, and shows a clean view of where money is going.",
      stat: "Overspend alerts: active",
      progress: "72%",
    },
    budget: {
      label: "Budget planning",
      title: "Adjust budgets before the month drifts off course.",
      body: "The budget engine compares expected versus actual spend and suggests a better split for the next cycle.",
      stat: "Savings buffer: +₹4,200",
      progress: "64%",
    },
    invest: {
      label: "SIP growth",
      title: "See long-term money decisions more clearly.",
      body: "FinBot explains SIPs, mutual funds, and goal progress in simple language so users can act confidently.",
      stat: "Goal success forecast: 84%",
      progress: "84%",
    },
  } as const;

  const features = [
    {
      title: "Smart expense tracking",
      description:
        "Reads SMS and UPI signals, tags spending automatically, and keeps the transaction trail clean.",
      accent: "from-cyan-400/25 to-cyan-400/5",
    },
    {
      title: "AI budget planning",
      description:
        "Suggests practical budgets, flags overspending early, and turns vague goals into weekly actions.",
      accent: "from-emerald-400/25 to-emerald-400/5",
    },
    {
      title: "FinBot guidance",
      description:
        "Answers finance questions in plain language and introduces SIPs, mutual funds, and investing basics.",
      accent: "from-amber-300/25 to-amber-300/5",
    },
    {
      title: "Goal and SIP progress",
      description:
        "Makes savings goals visible with progress charts, growth forecasts, and a simpler view of future outcomes.",
      accent: "from-sky-300/25 to-sky-300/5",
    },
  ];

  const audience = [
    "Students starting their first budget",
    "New earners building financial discipline",
    "Working professionals tracking cash flow",
    "Families planning savings, SIPs, and loans",
  ];

  const steps = [
    "Connect SMS and UPI sources.",
    "FinPilot tags transactions and detects spending patterns.",
    "The budget engine forecasts goal success and suggests corrections.",
    "FinBot explains the next best move in simple language.",
  ];

  const revenue = [
    ["Free intro access", "3 months"],
    ["Subscription", "₹49/month"],
    ["Ads", "Only in free plan"],
    ["Future growth", "Mutual fund affiliates"],
  ];

  const budget = [
    ["App development", "40%"],
    ["AI/ML services", "15%"],
    ["Infrastructure", "5%"],
    ["Marketing", "25%"],
    ["Legal & compliance", "5%"],
    ["Contingency", "10%"],
  ];

  const DashboardPreview = () => (
    <>
      <div className="flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-cyan-100/70">
            FinPilot dashboard
          </p>
          <p className="text-xl font-semibold text-white sm:text-2xl">₹42,680</p>
        </div>
        <div className="inline-flex w-fit rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">
          {demoModes[activeMode].stat}
        </div>
      </div>

      <div className="mt-5 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[1.25rem] border border-white/10 bg-[var(--panel-strong)] p-4 sm:rounded-[1.5rem]">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">{demoModes[activeMode].label}</p>
            <p className="text-sm text-cyan-100">Live preview</p>
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <p className="text-base font-semibold text-white sm:text-lg">{demoModes[activeMode].title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-[15px]">{demoModes[activeMode].body}</p>
          </div>
          <div className="mt-4 flex h-40 items-end gap-2 sm:h-48 sm:gap-3">
            {[36, 48, 62, 54, 74, 66, 80].map((height, index) => {
              const adjustedHeight =
                activeMode === "budget"
                  ? height + 10
                  : activeMode === "invest"
                    ? height - 2
                    : height;

              return (
                <div key={index} className="flex-1">
                  <div
                    className="rounded-t-2xl bg-gradient-to-t from-cyan-400 to-emerald-300 transition-all duration-300"
                    style={{ height: `${adjustedHeight * 2}px` }}
                  />
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-5 gap-1 text-center text-[10px] text-slate-400 sm:text-xs">
            <span>{activeMode === "track" ? "Food" : "Month 1"}</span>
            <span>{activeMode === "track" ? "Bills" : "Month 2"}</span>
            <span>{activeMode === "track" ? "Travel" : "Month 3"}</span>
            <span>{activeMode === "track" ? "Invest" : "Month 4"}</span>
            <span>{activeMode === "track" ? "Others" : "Month 5"}</span>
          </div>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-[var(--panel-strong)] p-4">
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm text-slate-300">AI alerts</p>
            <p className="mt-1 text-base font-medium text-white sm:text-lg">{demoModes[activeMode].stat}</p>
            <div className="mt-3 h-2 rounded-full bg-white/10">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300 transition-all duration-300"
                style={{ width: demoModes[activeMode].progress }}
              />
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                {activeMode === "invest" ? "SIP growth" : "Budget health"}
              </p>
              <p className="mt-2 text-2xl font-semibold text-white">
                {activeMode === "invest" ? "+18.4%" : activeMode === "budget" ? "92%" : "88%"}
              </p>
              <p className="text-sm text-emerald-200">
                {activeMode === "invest"
                  ? "Projected over 12 months"
                  : activeMode === "budget"
                    ? "Spending is within range"
                    : "Monthly plan is on track"}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                FinBot status
              </p>
              <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">Online</p>
              <p className="text-sm text-cyan-100">
                {activeMode === "invest"
                  ? "Explains finance in simple language"
                  : activeMode === "budget"
                    ? "Suggests the next budget adjustment"
                    : "Detects spending patterns"}
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,197,94,0.16),rgba(103,232,249,0.08))] p-4">
            <p className="text-sm text-slate-200">Budget vs actual</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="h-20 w-20 rounded-full border-[10px] border-emerald-300/80 border-r-cyan-300 border-t-cyan-300/35" />
              <div className="space-y-1 text-sm text-slate-200">
                <p>Budget: 100%</p>
                <p>Actual spend: 86%</p>
                <p className="text-emerald-200">Still within target this month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <main className="relative overflow-hidden" id="top">
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-10">
        <header className="flex flex-col gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div className="flex items-center gap-3 self-start sm:self-auto">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-sm font-semibold text-cyan-100 shadow-[0_0_40px_rgba(103,232,249,0.18)]">
              FP
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.24em] text-cyan-100 uppercase sm:text-sm">
                FinPilot
              </p>
              <p className="text-xs text-slate-300">
                AI-powered personal finance
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center gap-3 text-xs text-slate-300 sm:gap-4 sm:text-sm">
            <a href="#features" className="transition hover:text-white">
              Features
            </a>
            <a href="#workflow" className="transition hover:text-white">
              Workflow
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>
        </header>

        <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              Plan smart. Spend wise. Grow wealth.
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
                A finance app that teaches, tracks, and nudges people toward
                better money habits.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
                FinPilot combines AI expense tracking, budget planning, spending
                alerts, SIP guidance, and a simple FinBot assistant into one
                India-first personal finance platform.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#interactive-demo"
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 sm:w-auto"
              >
                See the live demo
              </a>
              <a
                href="#features"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:w-auto"
              >
                Explore the product
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-3xl border border-white/10 bg-white/6 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 h-28 w-28 rounded-full bg-cyan-300/20 blur-3xl" />
            <div className="absolute bottom-6 right-6 h-32 w-32 rounded-full bg-emerald-300/15 blur-3xl" />

            <div className="relative rounded-[1.5rem] border border-white/10 bg-[var(--panel)] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-5 lg:rounded-[2rem]">
              <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
                {Object.entries(demoModes).map(([key, mode]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveMode(key as keyof typeof demoModes)}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      activeMode === key
                        ? "bg-cyan-300 text-slate-950"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>

              <DashboardPreview />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-8 sm:px-6 lg:px-10">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            "Built for Indian users with UPI, SMS, SIPs, and finance habits in mind.",
            "Turns scattered money information into one structured financial view.",
            "Combines budgeting, learning, and investing guidance in a single flow.",
            "Designed as a standalone site for product launch and separate deployment.",
          ].map((point) => (
            <div
              key={point}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300 backdrop-blur"
            >
              {point}
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="mb-10 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
            Core features
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            FinPilot is built as a single financial operating system for everyday life.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-br ${feature.accent} p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur`}
            >
              <div className="rounded-2xl border border-white/10 bg-[var(--panel)] p-5">
                <h3 className="text-2xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 max-w-xl text-base leading-7 text-slate-300">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="interactive-demo" className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-10">
        <div className="rounded-[1.75rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(103,232,249,0.12),rgba(34,197,94,0.08))] p-5 backdrop-blur-xl sm:p-6 lg:rounded-[2rem]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
                Interactive demo
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                Tap through the product without leaving the page.
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                This is a static site, so the interaction stays in the browser. No backend, no sign-up flow, just a product story that reacts to clicks.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {Object.entries(demoModes).map(([key, mode]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveMode(key as keyof typeof demoModes)}
                  className={`rounded-full px-5 py-3 text-sm font-semibold transition sm:w-auto ${
                    activeMode === key
                      ? "bg-white text-slate-950"
                      : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[var(--panel)] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.45)] sm:p-5">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div id="workflow" className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 lg:rounded-[2rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/70">
              AI workflow
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">From transaction to advice</h2>
            <div className="mt-6 space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-[var(--panel)] p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-300/15 text-sm font-semibold text-cyan-100">
                    0{index + 1}
                  </div>
                  <p className="pt-1 text-slate-300">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.75rem] border border-white/10 bg-[var(--panel)] p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
                Why it matters
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {[
                  ["Most people don’t track spending", "Automates the first step."],
                  ["Goals get ignored", "Shows progress visibly."],
                  ["Investment awareness is low", "Teaches the basics."],
                  ["Tools are fragmented", "One app, one flow."],
                ].map(([problem, response]) => (
                  <div key={problem} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm font-medium text-white">{problem}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{response}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-100/70">
                Target audience
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {audience.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-[var(--panel)] px-4 py-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-6 lg:rounded-[2rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
              Revenue model
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Freemium first, subscription second</h2>
            <div className="mt-6 space-y-3">
              {revenue.map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[var(--panel)] px-4 py-4">
                  <span className="text-slate-300">{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-emerald-300/15 bg-[linear-gradient(180deg,rgba(34,197,94,0.12),rgba(103,232,249,0.06))] p-5 sm:p-6 lg:rounded-[2rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-100/70">
              Budget allocation
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Year-one investment plan</h2>
            <div className="mt-6 space-y-3">
              {budget.map(([label, value]) => (
                <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-[var(--panel)] px-4 py-4">
                  <div className="h-2.5 w-24 rounded-full bg-white/10">
                    <div
                      className="h-2.5 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                      style={{
                        width:
                          label === "App development"
                            ? "40%"
                            : label === "AI/ML services"
                              ? "15%"
                              : label === "Infrastructure"
                                ? "5%"
                                : label === "Marketing"
                                  ? "25%"
                                  : label === "Legal & compliance"
                                    ? "5%"
                                    : "10%",
                      }}
                    />
                  </div>
                  <span className="flex-1 text-slate-300">{label}</span>
                  <span className="font-medium text-white">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-4 pb-20 sm:px-6 lg:px-10">
        <div className="grid gap-6 rounded-[1.75rem] border border-white/10 bg-[var(--panel)] p-5 lg:grid-cols-[1.08fr_0.92fr] lg:rounded-[2.25rem] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
              Marketing strategy
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
              Built to launch, learn, and spread through useful finance education.
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Beta launch with QR posters in colleges and early access trial users.",
                "Social reels, Instagram tips, blog content, and LinkedIn explainers.",
                "Referral rewards that convert early users into advocates.",
                "Monthly webinars and finance creator collaborations.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div id="contact" className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(103,232,249,0.14),rgba(34,197,94,0.08))] p-5 sm:p-6 lg:rounded-[2rem]">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100/70">
              Contact and launch
            </p>
            <div className="mt-4 rounded-3xl border border-white/10 bg-[var(--panel-strong)] p-5">
              <p className="text-lg font-semibold text-white">Ready for a separate deployment</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                This folder is a standalone FinPilot website and can be deployed independently from the other ideas in the repo.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#top"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  Back to top
                </a>
                <a
                  href="mailto:hello@finpilot.app"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  hello@finpilot.app
                </a>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Built for India
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                AI + finance education
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
