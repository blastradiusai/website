const signals = [
  "GitHub PR analyzed",
  "Terraform plan reviewed",
  "Kubernetes manifests scanned",
  "Dependency CVEs checked",
  "Past incident patterns matched",
  "Remediation plan generated",
];

const stack = [
  "GitHub PRs",
  "Terraform",
  "Docker",
  "Kubernetes",
  "Dependencies",
  "Cloud",
  "Runtime Logs",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-xl font-bold">
            ⚡
          </div>
          <div>
            <div className="text-lg font-bold">BlastRadius AI</div>
            <div className="text-xs text-slate-400">
              Preventive Engineering Intelligence
            </div>
          </div>
        </div>

        <div className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#product">Product</a>
          <a href="#how">How It Works</a>
          <a href="#why">Why BlastRadius</a>
        </div>

        <a
          href="mailto:krishna@blastradiusai.com"
          className="rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold shadow-lg shadow-orange-500/30 hover:bg-orange-600"
        >
          Request Early Access
        </a>
      </nav>

      <section className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
        <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            New Category · Preventive Engineering Intelligence
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Prevent Risk
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Before It Exists.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-slate-300">
            BlastRadius AI learns from code, infrastructure, vulnerabilities,
            deployments, and production outcomes to predict risk, automate
            remediation, and prevent incidents before they happen.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:krishna@blastradiusai.com"
              className="rounded-xl bg-orange-500 px-8 py-4 text-center font-semibold shadow-xl shadow-orange-500/30 hover:bg-orange-600"
            >
              Request Early Access
            </a>

            <a
              href="#product"
              className="rounded-xl border border-slate-700 px-8 py-4 text-center font-semibold text-slate-200 hover:border-orange-500"
            >
              See Product Preview
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4 text-sm text-slate-400">
            <span>✓ AI-powered</span>
            <span>✓ Shift-left security</span>
            <span>✓ Agentic remediation</span>
            <span>✓ Continuous learning</span>
          </div>
        </div>

        <div
          id="product"
          className="relative rounded-3xl border border-slate-800 bg-slate-950/90 p-5 shadow-2xl shadow-orange-500/10"
        >
          <div className="mb-5 flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-orange-400">
                Live AI Analysis
              </p>
              <h2 className="mt-1 text-2xl font-bold">GitHub PR #2487</h2>
              <p className="text-sm text-slate-400">
                Terraform network rule + dependency updates
              </p>
            </div>

            <div className="rounded-full bg-green-500/10 px-4 py-2 text-sm text-green-400">
              Analysis Complete
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5 lg:col-span-2">
              <p className="text-sm text-slate-400">Blast Radius Map</p>

              <div className="mt-6 grid grid-cols-3 items-center gap-4 text-sm">
                <div className="space-y-4">
                  <Node label="Web App" sub="v2.1.0" />
                  <Node label="API Service" sub="v1.4.2" />
                  <Node label="Auth Service" sub="v2.3.1" />
                </div>

                <div className="flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl shadow-lg shadow-orange-500/40">
                    AI
                  </div>
                </div>

                <div className="space-y-4">
                  <Node label="S3 Bucket" sub="new" green />
                  <Node label="VPC" sub="us-east-1" green />
                  <Node label="Security Group" sub="modified" danger />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Metric title="Risk Score" value="82/100" status="High Risk" />
              <Metric title="Confidence" value="94%" status="High" />
              <Metric title="Remediation" value="Yes" status="Generated" />
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-orange-500/20 bg-orange-500/10 p-5">
            <p className="text-sm text-slate-400">AI Prevention Decision</p>
            <h3 className="mt-2 text-2xl font-bold text-orange-400">
              Remediation Required
            </h3>
            <p className="mt-3 text-slate-300">
              Similar network change caused prior incident. Hold deployment,
              review security group change, and apply generated remediation.
            </p>
          </div>
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            How BlastRadius AI Works
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-400">
            Continuous intelligence across your engineering lifecycle — from
            code to cloud to production.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-5">
          {[
            ["1", "Ingest", "Reads code, IaC, configs, dependencies, and runtime signals."],
            ["2", "Understand", "Builds context across systems, ownership, history, and risk."],
            ["3", "Predict", "Calculates risk and blast radius before deployment."],
            ["4", "Remediate", "Generates and validates fixes automatically."],
            ["5", "Prevent", "Stops preventable incidents before production impact."],
          ].map(([num, title, text]) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400">
                {num}
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
            End-to-End Coverage Across Your Stack
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-7">
            {stack.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-center text-sm text-slate-300"
              >
                <div className="mb-3 text-2xl">●</div>
                {item}
              </div>
            ))}
          </div>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-orange-500/30 bg-orange-500/10 p-6 text-center">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-3 text-2xl font-bold">BlastRadius AI</h3>
            <p className="mt-2 text-orange-300">
              Preventive Engineering Intelligence
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto grid max-w-7xl gap-6 px-6 py-20 md:grid-cols-2">
        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8">
          <h3 className="text-2xl font-bold">Traditional Tools</h3>
          <div className="mt-6 space-y-4 text-slate-400">
            <p>✕ Find vulnerabilities</p>
            <p>✕ Generate alerts</p>
            <p>✕ Create tickets</p>
            <p>✕ Wait for engineers</p>
            <p>✕ Incidents still happen</p>
          </div>
        </div>

        <div className="rounded-3xl border border-orange-500/30 bg-orange-500/10 p-8">
          <h3 className="text-2xl font-bold text-orange-400">
            BlastRadius AI
          </h3>
          <div className="mt-6 space-y-4 text-slate-200">
            <p>✓ Learns continuously</p>
            <p>✓ Predicts risk early</p>
            <p>✓ Understands engineering context</p>
            <p>✓ Remediates automatically</p>
            <p>✓ Prevents production impact</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-slate-900 p-10 md:flex md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Ready to Prevent Risk Before It Exists?
            </h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              Join engineering and security leaders building safer, faster, and
              more resilient systems with BlastRadius AI.
            </p>
          </div>

          <a
            href="mailto:krishna@blastradiusai.com"
            className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold shadow-xl shadow-orange-500/30 hover:bg-orange-600 md:mt-0"
          >
            Request Early Access
          </a>
        </div>
      </section>
    </main>
  );
}

function Node({
  label,
  sub,
  green,
  danger,
}: {
  label: string;
  sub: string;
  green?: boolean;
  danger?: boolean;
}) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
      <div
        className={
          green
            ? "text-green-400"
            : danger
            ? "text-orange-400"
            : "text-violet-400"
        }
      >
        ● {label}
      </div>
      <div className="text-xs text-slate-500">{sub}</div>
    </div>
  );
}

function Metric({
  title,
  value,
  status,
}: {
  title: string;
  value: string;
  status: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <div className="mt-2 text-3xl font-bold text-orange-400">{value}</div>
      <p className="mt-1 text-sm text-slate-500">{status}</p>
    </div>
  );
}