import { ArrowRight, BadgeCheck, CalendarDays, Check, ChevronRight, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ghlComparison from "@/assets/ghl-comparison.png";
import ghlNurture from "@/assets/ghl-nurture.png";

const supportEmail = "crm@arwebcrafts.com";
const currentYear = new Date().getFullYear();

const features = [
  ["GHL CRM & Pipelines", "Capture leads, manage contacts, track deals, and follow every conversation in GoHighLevel’s built-in CRM. Move leads through drag-and-drop pipelines from new prospect to closed client."],
  ["Funnels, Websites & Landing Pages", "Use the GoHighLevel page builder to create funnels, sales pages, and full websites. Replace tools like ClickFunnels and basic landing plugins with a single GHL interface."],
  ["Automations & Workflows", "Automate follow-ups, onboarding, reminders, and nurture sequences using GoHighLevel workflows. Trigger emails, SMS, WhatsApp, and internal actions automatically."],
  ["Email, SMS & WhatsApp Messaging", "Send broadcast campaigns and automated sequences by email and SMS. Connect Twilio or WhatsApp providers so you can message prospects directly from inside your GHL CRM."],
  ["Calendars & Online Booking", "Let prospects book calls directly into your calendar. Reduce no-shows with automatic reminders and confirmations through GoHighLevel."],
  ["Chat Widget & AI Chatbot", "Add a GoHighLevel chat widget to any website you or your clients own. Route chats to yourself, your team, or an AI assistant to capture leads 24/7."],
  ["Reputation & Reviews", "Request and manage Google reviews from inside GoHighLevel. Build social proof using review campaigns and automated follow-ups."],
  ["Analytics & Reporting", "Track leads, pipeline value, close rates, and campaign performance in one GoHighLevel dashboard so you know exactly what’s working."],
];

const plans = [
  { name: "Solo – Annual", price: "$49 / year", badge: "Best for starters", cta: "Get Annual GHL Account – $49", bullets: ["1 full GoHighLevel CRM sub-account for your own business", "All core GHL tools: CRM, funnels, automations, calendars, email/SMS, chat widget", `Email support from Guaranteed CRM (${supportEmail})`, "Upgrade later to Lifetime or Mini Agency by paying only the difference"] },
  { name: "Solo – Lifetime", price: "$99 one-time", badge: "Most popular", cta: "Get Lifetime GHL – $99", featured: true, bullets: ["Everything in Solo Annual", "Pay once, keep your GoHighLevel account as long as our agency license is active", "No renewals, no surprise price increases"] },
  { name: "Mini Agency – 10 Accounts", price: "$199 / year", badge: "For small agencies", cta: "Get 10 GHL Accounts – $199 / year", bullets: ["Up to 10 GoHighLevel sub-accounts under your name", "Use them for your own brands or resell to clients", "Clone funnels and automations across GHL client accounts", "Priority email support for technical questions"] },
];

const faqs = [
  ["Is this a real GoHighLevel account?", "Yes. This is a real GoHighLevel CRM sub-account provisioned under the Guaranteed CRM agency account — not a clone, mockup, or knockoff."],
  ["Why is it cheaper than $97/month?", "We already pay for a licensed GoHighLevel agency account, so extra sub-accounts cost us far less. Our mission is helping people who can’t afford the full monthly GHL subscription experience the platform at wholesale pricing."],
  ["Who is this best for?", "Freelancers, SMMA owners, solo agencies, local businesses, and anyone who has heard of GHL but wants to start without a large monthly commitment."],
  ["Are usage costs included?", "Your sub-account access is included. Usage-based costs such as SMS, phone, email credits, and connected providers are billed separately based on what you actually use."],
  ["How fast do I get access?", "You receive activation instructions right after checkout. Most fresh GHL sub-accounts are provisioned within 24 hours after setup details are submitted."],
  ["Where do I get help?", `Email Guaranteed CRM support at ${supportEmail} and our team will help with setup questions.`],
];

const WhatsAppButton = () => (
  <a href="https://wa.me/+13072784862" aria-label="Chat with Guaranteed CRM on WhatsApp" className="fixed left-4 top-1/2 z-50 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
    <MessageCircle className="h-7 w-7" />
  </a>
);

const Index = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <WhatsAppButton />
      <nav className="sticky top-0 z-40 border-b border-border/70 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3 font-extrabold"><span className="grid h-10 w-10 place-items-center rounded-lg bg-cta-gradient text-primary-foreground">G</span><span>Guaranteed CRM</span></a>
          <Button asChild variant="hero" size="lg"><a href="#pricing">Get GHL Account</a></Button>
        </div>
      </nav>

      <section id="top" className="bg-hero-gradient px-5 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary"><Sparkles className="h-4 w-4" /> Wholesale GoHighLevel CRM sub-accounts</p>
            <h1 className="max-w-5xl text-5xl font-black leading-[0.98] md:text-7xl">Full GoHighLevel (GHL) CRM for <span className="text-price-gradient">$49/year</span> – or <span className="text-price-gradient">$99 Lifetime</span></h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted-foreground">Get a REAL GoHighLevel sub-account under our Guaranteed CRM agency instead of paying $97/month. Same all-in-one CRM, funnels, automations & calendars – you just pay wholesale.</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <div className="rotate-[-3deg] text-3xl font-black text-danger line-through decoration-[8px] md:text-5xl">$97 / month</div>
              <div className="rounded-xl border border-primary/40 bg-primary/10 px-5 py-3 text-3xl font-black text-primary shadow-glow md:text-5xl">$49 / YEAR</div>
              <div className="rounded-xl border border-accent/50 bg-accent/10 px-5 py-3 text-2xl font-black text-accent md:text-4xl">or $99 LIFETIME</div>
            </div>
            <p className="mt-4 text-sm font-bold text-muted-foreground">Real GoHighLevel (GHL) CRM sub-account by Guaranteed CRM.</p>
            <div className="mt-7 grid gap-3 text-base text-foreground/90 sm:grid-cols-3">{["All-in-one GHL CRM, funnels, automations & calendars", "Perfect for agencies, SMMAs, freelancers & local businesses", "No long contracts. No hidden upsells."].map((item) => <div key={item} className="flex gap-2"><Check className="mt-1 h-5 w-5 shrink-0 text-primary" />{item}</div>)}</div>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row"><Button asChild variant="hero" size="xl" className="animate-pulse-glow"><a href="#pricing">Get $49 / Year GHL Account <ArrowRight /></a></Button><Button asChild variant="heroOutline" size="xl"><a href="#pricing">Go Lifetime – $99</a></Button></div>
            <p className="mt-5 max-w-2xl text-sm font-semibold text-warning">Limited number of wholesale GHL accounts released each month. Once they’re taken, prices go up for new buyers.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-primary/10 blur-3xl" />
            <img src={ghlComparison} alt="GoHighLevel comparison table showing included CRM features and $97 pricing" className="relative rounded-2xl border border-border shadow-card animate-float-soft" />
          </div>
        </div>
      </section>

      <section className="px-5 py-20"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><h2 className="text-4xl font-black md:text-5xl">Why is this GoHighLevel (GHL) deal so affordable?</h2><p className="mt-6 text-lg leading-relaxed text-muted-foreground">GoHighLevel normally charges agencies $97–$497/month for access to its all-in-one CRM and unlimited client sub-accounts. We already pay for a real GoHighLevel agency account. That means we can create extra sub-accounts at very low additional cost.</p><p className="mt-4 text-lg leading-relaxed text-muted-foreground">Guaranteed CRM exists to help people who <strong className="text-foreground">can’t afford</strong> the full $97/month GHL subscription get started. We resell some of our spare GoHighLevel sub-accounts at wholesale pricing so freelancers, new agencies and small businesses can test, learn and experience the power of GHL without a huge monthly bill.</p></div><div className="rounded-2xl border border-border bg-card-gradient p-7 shadow-card"><ul className="space-y-4 text-lg">{["You get a full GoHighLevel CRM sub-account for your own business.", "You log in through the standard GoHighLevel interface and use all the tools.", "You pay Guaranteed CRM (Ar WebCrafts) for the sub-account, so we can pass on our wholesale cost."].map((item) => <li key={item} className="flex gap-3"><BadgeCheck className="mt-1 h-6 w-6 shrink-0 text-primary" />{item}</li>)}</ul><div className="mt-7 rounded-xl border border-primary/40 bg-primary/10 p-5 text-lg font-bold text-primary">Important: This is NOT a clone or knockoff. It’s the real GoHighLevel all-in-one CRM platform, provisioned as a sub-account under our licensed agency account.</div></div></div></section>

      <section className="bg-surface-soft px-5 py-20 text-surface-soft-foreground"><div className="mx-auto max-w-7xl"><div className="mx-auto max-w-3xl text-center"><h2 className="text-4xl font-black md:text-5xl">What’s inside your GoHighLevel (GHL) CRM account?</h2><p className="mt-4 text-lg opacity-75">A real GHL workspace with the tools agencies use to capture, nurture, close, and reactivate leads.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{features.map(([title, text]) => <article key={title} className="rounded-xl border border-border/50 bg-background/95 p-6 text-foreground shadow-card transition-transform hover:-translate-y-1"><Zap className="mb-4 h-7 w-7 text-primary" /><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div><div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center"><img src={ghlNurture} alt="GoHighLevel account tools showing nurture workflows and CRM features" className="rounded-2xl border border-border shadow-card" /><div className="rounded-2xl border border-border bg-background p-7 text-foreground shadow-card"><h3 className="text-3xl font-black">GHL logo comparison table included</h3><p className="mt-4 text-muted-foreground">Visitors can see the same GoHighLevel feature categories, tool replacement value, and real platform positioning your offer provides.</p></div></div></div></section>

      <section id="pricing" className="px-5 py-20"><div className="mx-auto max-w-7xl"><div className="text-center"><h2 className="text-4xl font-black md:text-6xl">Pick your GoHighLevel (GHL) plan</h2><p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">All plans include a full GoHighLevel CRM sub-account with the features above. Choose how long you want to lock in your pricing.</p></div><div className="mt-12 grid gap-6 lg:grid-cols-3">{plans.map((plan) => <article key={plan.name} className={`relative rounded-2xl border p-7 shadow-card ${plan.featured ? "border-primary bg-primary/10" : "border-border bg-card-gradient"}`}><span className="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-black text-accent-foreground">{plan.badge}</span><h3 className="mt-5 text-2xl font-black">{plan.name}</h3><p className="mt-3 text-5xl font-black text-price-gradient">{plan.price}</p><ul className="mt-7 space-y-3 text-sm text-muted-foreground">{plan.bullets.map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{item}</li>)}</ul><Button asChild variant="hero" size="xl" className="mt-8 w-full"><a href="/thank-you">{plan.cta}</a></Button></article>)}</div><p className="mt-8 text-center text-muted-foreground">All payments are processed securely. You’ll receive an instant email with your activation link and next-step instructions right after checkout.</p><p className="mt-2 text-center text-sm font-bold text-warning">We only release a limited number of wholesale GHL accounts each month. When those slots are full, new buyers pay higher prices.</p></div></section>

      <section className="bg-surface-soft px-5 py-20 text-surface-soft-foreground"><div className="mx-auto max-w-7xl"><h2 className="text-center text-4xl font-black md:text-5xl">How your GoHighLevel account gets activated</h2><div className="mt-12 grid gap-5 md:grid-cols-5">{[["Choose your plan", "Select $49 Annual, $99 Lifetime or $199 Mini Agency."], ["Secure checkout", "Pay online with card or PayPal on our encrypted checkout page."], ["Receive activation email", "Within a few minutes, you’ll receive a confirmation email from Guaranteed CRM with a link to your next step."], ["Go to the GHL setup page", "Click the setup link on the thank-you page to go to GoHighLevel’s secure setup portal."], ["We provision your GHL sub-account", "Our team connects your login to a fresh GoHighLevel sub-account under our agency license, usually within 24 hours."]].map(([title, text], index) => <article key={title} className="rounded-xl border border-border/50 bg-background p-5 text-foreground shadow-card"><div className="mb-4 grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground font-black">{index + 1}</div><h3 className="font-black">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="px-5 py-20"><div className="mx-auto max-w-4xl"><h2 className="text-center text-4xl font-black md:text-5xl">Frequently asked questions about this GHL deal</h2><div className="mt-10 space-y-4">{faqs.map(([q, a]) => <details key={q} className="group rounded-xl border border-border bg-card-gradient p-5"><summary className="cursor-pointer list-none text-lg font-black">{q}</summary><p className="mt-3 leading-relaxed text-muted-foreground">{a}</p></details>)}</div><p className="mt-8 text-center text-lg">Still have questions?<br />Email: <a className="font-bold text-primary" href={`mailto:${supportEmail}`}>{supportEmail}</a></p></div></section>

      <section className="px-5 pb-20"><div className="mx-auto max-w-5xl rounded-3xl border border-primary/30 bg-hero-gradient p-8 text-center shadow-glow md:p-14"><h2 className="text-4xl font-black md:text-6xl">Ready to finally get GoHighLevel without $97/month?</h2><p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">Lock in your GoHighLevel CRM account today at wholesale pricing and start running your funnels, automations and clients from one powerful dashboard.</p><div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild variant="hero" size="xl"><a href="#pricing">Get $49 Annual GHL Deal <ChevronRight /></a></Button><Button asChild variant="heroOutline" size="xl"><a href="#pricing">Upgrade to Lifetime – $99</a></Button></div></div></section>

      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">© {currentYear} Guaranteed CRM by Ar WebCrafts – Wholesale GoHighLevel (GHL) CRM Accounts | Email: <a className="text-primary" href={`mailto:${supportEmail}`}>{supportEmail}</a></footer>
    </main>
  );
};

export default Index;