import { useEffect } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import ghlCheckout from "@/assets/ghl-checkout.png";

const supportEmail = "crm@arwebcrafts.com";
const whatsappNumber = "+13072784862";
const whatsappLink = "https://wa.me/13072784862";
const currentYear = new Date().getFullYear();

const ThankYou = () => {
  useEffect(() => {
    const fbq = (window as typeof window & { fbq?: (...args: unknown[]) => void }).fbq;
    fbq?.("track", "Purchase", { currency: "USD", value: 49 });
  }, []);

  return (
    <main className="min-h-screen bg-hero-gradient text-foreground">
      <nav className="border-b border-border/70 bg-background/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-3 font-extrabold"><span className="grid h-10 w-10 place-items-center rounded-lg bg-cta-gradient text-primary-foreground">G</span><span>Guaranteed CRM</span></a>
          <Button asChild variant="heroOutline"><a href="/">Back to deal</a></Button>
        </div>
      </nav>

      <section className="px-5 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-bold text-primary"><CheckCircle2 className="h-4 w-4" /> Purchase received</div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl">Thank you for your purchase – your GoHighLevel setup is next</h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground">You’re just one step away from activating your Guaranteed CRM (GoHighLevel) account.</p>
            <p className="mt-5 leading-relaxed text-muted-foreground">The reason this deal is so affordable is simple: we already have a full GoHighLevel agency account. We’re reselling some of our extra sub-accounts at wholesale to people who can’t justify $97/month yet, so you can test, learn and experience the real power of GHL without the standard price.</p>
          </div>

          <div className="rounded-3xl border border-border bg-card-gradient p-6 shadow-card">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <h2 className="mt-5 text-3xl font-black">Start setting up your GoHighLevel account.</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">Click the button below to access the official GoHighLevel setup page. You’ll be asked for your <strong className="text-foreground">business name</strong> and <strong className="text-foreground">email address</strong>, then to add your <strong className="text-foreground">card details</strong> directly with GoHighLevel.</p>
            <div className="mt-5 rounded-xl border border-primary/40 bg-primary/10 p-5 text-sm leading-relaxed text-primary"><strong>Don’t worry</strong> — GoHighLevel will only charge <strong>$1 to verify your card</strong>. After that, any costs are <strong>usage-based only</strong>, for example SMS, phone, and email credits, and are billed through their wallet system based on what you actually use. No extra subscription fees, no surprise monthly charges.</div>
            <Button asChild variant="hero" size="xl" className="mt-7 w-full animate-pulse-glow"><a href="https://guaranteedcrm.io/crm">Go to GoHighLevel Setup Page <ArrowRight /></a></Button>
            <Button asChild variant="heroOutline" size="xl" className="mt-4 w-full"><a href={whatsappLink}><MessageCircle /> Connect on WhatsApp</a></Button>
            <p className="mt-4 text-sm text-muted-foreground">If you have any issues with the setup link or questions about the $1 verification, email us at <a className="font-bold text-primary" href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
            <p className="mt-2 text-sm text-muted-foreground">For faster support, message us on WhatsApp at <a className="font-bold text-primary" href={whatsappLink}>{whatsappNumber}</a>.</p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-border bg-surface-soft p-5 text-center text-surface-soft-foreground shadow-card md:p-8">
          <img src={ghlCheckout} alt="GoHighLevel setup and card verification screenshot reference" className="mx-auto max-h-[460px] rounded-2xl border border-border object-cover object-top shadow-card" />
          <p className="mt-4 text-lg font-bold">Start setting up your GoHighLevel account in just a few minutes.</p>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-8 text-center text-sm text-muted-foreground">© {currentYear} Guaranteed CRM by Ar WebCrafts | Email: <a className="text-primary" href={`mailto:${supportEmail}`}>{supportEmail}</a> | WhatsApp: <a className="text-primary" href={whatsappLink}>{whatsappNumber}</a></footer>
    </main>
  );
};

export default ThankYou;