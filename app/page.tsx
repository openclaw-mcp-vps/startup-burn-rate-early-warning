export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Startup Finance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Get early warnings before<br />
          <span className="text-[#58a6ff]">running out of money</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          BurnAlert connects to your bank accounts and sends email or SMS alerts the moment your burn rate trends signal a runway problem — before it becomes a crisis.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $39/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">No finance team required. Cancel anytime.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '🏦', title: 'Bank Integration', body: 'Connects via Plaid to read transactions automatically — no manual CSV uploads.' },
            { icon: '📉', title: 'Burn Rate Tracking', body: 'Calculates your real monthly burn and projects runway with configurable thresholds.' },
            { icon: '🔔', title: 'Smart Alerts', body: 'Email and SMS warnings when trends predict you have less runway than your target.' }
          ].map(({ icon, title, body }) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{icon}</div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-sm text-[#8b949e]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Founder Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$39</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Up to 5 bank accounts via Plaid',
              'Daily burn rate calculations',
              'Configurable runway warning thresholds',
              'Email + SMS alerts',
              'Runway prediction dashboard',
              'Cancel anytime'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does BurnAlert connect to my bank?',
              a: 'We use Plaid, the same technology trusted by thousands of fintech apps. Your credentials are never stored — Plaid handles authentication securely.'
            },
            {
              q: 'When will I get an alert?',
              a: 'You set your own runway target (e.g. 6 months). BurnAlert checks daily and sends an alert the moment your projected runway drops below that threshold.'
            },
            {
              q: 'Do I need an accountant or finance background?',
              a: 'No. BurnAlert is built for founders who just want a simple safety net — not a full accounting suite. Setup takes under 10 minutes.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} BurnAlert. Built for founders who move fast.
      </footer>
    </main>
  )
}
