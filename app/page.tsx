const CONTACT_EMAIL = "info@blastradiusai.com";
const APP_URL = "https://app.blastradiusai.com";

const metrics = [
  ["120", "Risk Score"],
  ["98%", "Confidence"],
  ["7 min", "EDT"],
  ["45 min", "EES"],
];

const flow = [
  ["Engineering Evidence", "GitHub PRs, Terraform, Kubernetes, scanners, and cloud context."],
  ["Engineering Context", "Production tier, ownership, service criticality, incidents, and blast radius."],
  ["Engineering Reasoning", "AI explains impact, prioritizes risk, and recommends the safest action."],
  ["Engineering Decision", "One trusted decision with remediation before risky changes reach production."],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <img
          src="/BlastRadius-logo.png"
          alt="BlastRadius AI"
          className="h-24 w-auto"
        />

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#product" className="hover:text-white">Product</a>
          <a href="#how" className="hover:text-white">How It Works</a>
          <a href="#why" className="hover:text-white">Why BlastRadius</a>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=BlastRadius AI Enterprise Demo`}
            className="hover:text-white"
          >
            Contact
          </a>
        </div>

        <a
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600"
        >
          Launch App →
        </a>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            Engineering Decision Intelligence
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Engineering Decision Intelligence
          </h1>

          <p className="mt-6 max-w-3xl text-2xl font-light leading-9 text-slate-300">
            AI-powered engineering decisions built from code changes,
            infrastructure context, security evidence, deployment history,
            and automated reasoning.
          </p>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            BlastRadius AI transforms engineering evidence into trusted
            engineering decisions. Instead of overwhelming developers with
            scanner results, BlastRadius understands engineering context,
            explains risk, calculates blast radius, and recommends the safest
            path forward before changes reach production.
          </p>

          <p className="mt-5 text-xl font-semibold text-orange-400">
            Prevent Risk Before It Exists.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-orange-500 px-8 py-4 text-center font-semibold shadow-xl shadow-orange-500/30 hover:bg-orange-600 transition-all hover:scale-105"
            >
              Launch App →
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=BlastRadius AI Enterprise Demo`}
              className="rounded-xl border border-slate-700 px-8 py-4 text-center font-semibold text-slate-200 hover:border-orange-500 hover:bg-slate-900 transition-all"
            >
              Talk to Sales
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>✓ Engineering Decisions</span>
            <span>✓ AI-Powered Risk Reasoning</span>
            <span>✓ Blast Radius Analysis</span>
            <span>✓ Autonomous Remediation</span>
          </div>
        </div>

        <div
          id="product"
          className="relative rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl shadow-orange-500/10"
        >
          <div className="mb-6 border-b border-slate-800 pb-5">
            <p className="text-xs uppercase tracking-widest text-orange-400">
              BlastRadius AI Decision Card
            </p>
            <h2 className="mt-2 text-2xl font-bold">db-control-plane PR</h2>
            <p className="text-sm text-slate-400">
              Terraform security group change · Production · Tier-1
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-4">
            {metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center"
              >
                <div className="text-2xl font-bold text-orange-400">
                  {value}
                </div>
                <div className="mt-1 text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
            <p className="text-sm text-slate-400">Engineering Decision</p>
            <h3 className="mt-2 text-3xl font-bold text-red-400">
              BLOCK MERGE
            </h3>
            <p className="mt-3 text-slate-300">
              Public SSH ingress was introduced on a Tier-1 production control
              plane service responsible for customer database provisioning.
            </p>
          </div>

          <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
            <p className="text-sm text-slate-400">Blast Radius</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <p>• Production VPC</p>
              <p>• RDS PostgreSQL</p>
              <p>• Platform EKS Cluster</p>
              <p>• Database Control Plane</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">
            <p className="text-sm text-slate-400">Recommended Action</p>
            <p className="mt-2 text-green-300">
              Restrict ingress to private CIDR or corporate VPN. Remediation
              patch ready.
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            From Evidence to Engineering Decision
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            BlastRadius does not replace your scanners. It uses them as
            engineering evidence, adds context, and produces one trusted
            decision with a remediation path.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-4">
          {flow.map(([title, text], index) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-center text-3xl font-bold">
            Built for Real Enterprise Engineering
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <Card
              title="Engineering Context"
              text="Understands repositories, services, Terraform, Kubernetes, cloud resources, ownership, and criticality."
            />
            <Card
              title="AI Reasoning"
              text="Thinks like a Staff Engineer by combining findings with production impact and incident history."
            />
            <Card
              title="Remediation Path"
              text="Explains the safest action and prepares the fix path engineers can approve."
            />
          </div>
        </div>
      </section>

      <section
        id="why"
        className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2"
      >
        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
          <h3 className="text-2xl font-bold">Today</h3>
          <div className="mt-6 space-y-4 text-slate-400">
            <p>✕ Multiple tools generate disconnected findings</p>
            <p>✕ Engineers manually gather production context</p>
            <p>✕ Risk decisions take hours</p>
            <p>✕ Remediation becomes ticket-driven</p>
            <p>✕ Incidents still reach production</p>
          </div>
        </div>

        <div className="rounded-3xl border border-orange-500/30 bg-orange-500/10 p-8">
          <h3 className="text-2xl font-bold text-orange-400">
            With BlastRadius AI
          </h3>
          <div className="mt-6 space-y-4 text-slate-200">
            <p>✓ Evidence normalized from existing tools</p>
            <p>✓ Context built across code, infra, cloud, and runtime</p>
            <p>✓ Decision generated in minutes</p>
            <p>✓ Remediation path created automatically</p>
            <p>✓ Production risk reduced before merge</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-slate-900 p-10 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Reduce Engineering Decision Time.
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Give engineers one trusted decision, one explanation, and one
              remediation path before risky changes reach production.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-0">
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold shadow-xl shadow-orange-500/30 hover:bg-orange-600"
            >
              Launch App →
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=BlastRadius AI Enterprise Demo`}
              className="inline-block rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-200 hover:border-orange-500"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-500">
        <div className="flex flex-col justify-between gap-4 border-t border-slate-800 pt-8 md:flex-row">
          <p>© 2026 BlastRadius AI. Engineering Decision Intelligence.</p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-slate-400 hover:text-orange-400"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </footer>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
      <h3 className="text-xl font-bold text-orange-400">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}