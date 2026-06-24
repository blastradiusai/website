const signals = [
  "Learning from code changes",
  "Analyzing vulnerabilities",
  "Reviewing Terraform risk",
  "Scanning Kubernetes configs",
  "Checking deployment history",
  "Generating remediation plan",
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816] text-white">
      <section className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl" />

        <div className="relative">
          <div className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            BlastRadius AI · Preventive Engineering Intelligence
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Prevent Risk
            <br />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Before It Exists.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-8 text-slate-300">
            BlastRadius AI learns from code, infrastructure, vulnerabilities,
            deployments, and operational outcomes to predict risk, automate
            remediation, and prevent production incidents before they happen.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:krishna@blastradiusai.com"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-600"
            >
              Request Early Access
            </a>

            <a
              href="#ai-brain"
              className="rounded-xl border border-slate-700 px-8 py-4 font-semibold text-slate-200 hover:border-orange-500"
            >
              See How It Works
            </a>
          </div>

          <img
            src="/blastradius-preview.png"
            alt="BlastRadius AI product preview"
            className="mx-auto mt-16 rounded-3xl border border-orange-500/20 shadow-2xl shadow-orange-500/20"
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-20 text-center">
        <h2 className="text-3xl font-bold md:text-5xl">
          Engineering Intelligence That Learns.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          Unlike traditional scanners that generate alerts and tickets,
          BlastRadius AI continuously learns from engineering changes, system
          behavior, vulnerabilities, remediation outcomes, and production
          incidents to reduce risk before it impacts customers.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-2xl font-semibold text-orange-400">Learn</h3>
          <p className="mt-4 text-slate-400">
            Continuously learns from code changes, infrastructure updates,
            vulnerabilities, incidents, and remediation outcomes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-2xl font-semibold text-orange-400">Predict</h3>
          <p className="mt-4 text-slate-400">
            Identifies security, operational, and deployment risks before
            production deployment.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h3 className="text-2xl font-semibold text-orange-400">Remediate</h3>
          <p className="mt-4 text-slate-400">
            Automatically recommends and validates remediation actions to
            eliminate preventable risk.
          </p>
        </div>
      </section>

      <section id="ai-brain" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
          <div className="mb-6 flex items-center justify-between border-b border-slate-800 pb-4">
            <div>
              <p className="text-sm text-slate-400">
                Preventive Engineering Intelligence
              </p>
              <h2 className="text-2xl font-bold">GitHub PR #2487</h2>
            </div>
            <div className="rounded-full bg-orange-500/10 px-4 py-2 text-sm text-orange-400">
              Risk Score: 82
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              {signals.map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-left text-slate-300"
                >
                  <span className="mr-2 text-orange-400">●</span>
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-orange-500/20 bg-slate-950 p-6 text-left">
              <p className="text-sm text-slate-400">AI Prevention Decision</p>
              <h3 className="mt-3 text-3xl font-bold text-orange-400">
                Remediation Required
              </h3>

              <div className="mt-6 space-y-4 text-slate-300">
                <p>⚠ Terraform network rule modified</p>
                <p>⚠ Similar change caused prior incident</p>
                <p>✅ Dependency vulnerabilities remediated</p>
                <p>✅ Suggested rollback path generated</p>
              </div>

              <div className="mt-8 rounded-xl bg-orange-500/10 p-4 text-orange-300">
                Confidence Score: 94% · Predicted Blast Radius: Medium ·
                Remediation Generated: Yes
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h3 className="text-2xl font-bold text-slate-200">
              Traditional Security
            </h3>
            <div className="mt-6 space-y-3 text-slate-400">
              <p>Finds problems.</p>
              <p>Creates tickets.</p>
              <p>Waits for engineers.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-orange-500/30 bg-orange-500/10 p-8">
            <h3 className="text-2xl font-bold text-orange-400">
              BlastRadius AI
            </h3>
            <div className="mt-6 space-y-3 text-slate-200">
              <p>Learns continuously.</p>
              <p>Predicts risk early.</p>
              <p>Remediates automatically.</p>
              <p>Prevents production impact.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}