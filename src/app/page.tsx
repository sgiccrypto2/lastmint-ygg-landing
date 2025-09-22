// Drop this file in a Next.js App Router project as app/page.tsx
// Tailwind CSS recommended. Colors: teal + dark blue.

import React from "react";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-800">
        <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              YGG × LastMint Guild Competition
            </h1>
            <p className="mt-4 text-slate-300 md:text-lg">
              YGG guilds compete on LastMint by driving the most collective mints. Top guild wins
              <span className="text-teal-300 font-semibold"> $500 USDC</span> paid directly to the guild wallet.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 shadow-lg shadow-teal-900/20">
              <div className="grid grid-cols-2 gap-4 text-center">
                <Stat label="Prize" value="$500 USDC" accent />
                <Stat label="Chain" value="Solana" />
                <Stat label="Starts" value="Sep 22 (Mon) — 11:00 AM UTC / 7:00 PM SGT" />
                <Stat label="Ends" value="Sep 29 (Mon) — 10:59 AM UTC / 6:59 PM SGT" />
              </div>
              <p className="mt-4 text-xs text-slate-400">
                Note: Only guild leaders that complete registration by <span className="text-slate-200 font-medium">Sep 19 @ 11:59PM UTC</span> appear on the leaderboard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section id="overview" title="Overview">
        <p>
          LastMint is teaming up with <span className="font-semibold">Yield Guild Games</span> for an exclusive guild competition.
          YGG guilds will battle it out on LastMint by driving the most collective mints during the event. The guild with the most mints across its members wins
          <span className="text-teal-300 font-semibold"> $500 USDC</span>, paid directly to the guild’s wallet.
        </p>
      </Section>

      {/* How It Works */}
      <Section id="how" title="How It Works">
        <ul className="list-disc pl-6 space-y-3">
          <li>
            Guild members sign up for LastMint using the guild’s referral code/link.
          </li>
          <li>
            Connect your <span className="font-semibold">Solana wallet</span> on LastMint so your mints count toward your guild’s score.
          </li>
          <li>
            All mints from players using that guild code will count toward the guild’s total. The leaderboard ranks guilds by total collective mints across all members.
          </li>
        </ul>
        <Callout>
          <p className="font-semibold">Free Gold Mints = Easy Points.</p>
          <p className="text-slate-300">
            Gold Mints are free to mint (you only cover the blockchain fee). LastMint frequently runs Gold Mint events and will run at least one during the competition (likely more). This is the fastest way for guilds to stack mints without extra cost.
          </p>
        </Callout>
      </Section>

      {/* Key Dates */}
      <Section id="dates" title="Key Dates">
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <h4 className="text-slate-200 font-semibold">Competition Start</h4>
            <p className="text-slate-300">Sep 22 (Mon) — 11:00 AM UTC / 7:00 PM SGT</p>
          </Card>
          <Card>
            <h4 className="text-slate-200 font-semibold">Competition End</h4>
            <p className="text-slate-300">Sep 29 (Mon) — 10:59 AM UTC / 6:59 PM SGT</p>
          </Card>
        </div>
      </Section>

      {/* Prize */}
      <Section id="prize" title="Prize & Payouts">
        <p>
          <span className="text-teal-300 font-semibold">$500 USDC</span> to the top guild on the leaderboard at competition end. Reward will be paid directly to the guild wallet submitted in the registration form. Prize distribution handled by LastMint. Additionally, all members of the winning guild will receive 100 XP each!
        </p>
        <p className="mt-3 text-slate-400 text-sm">
          Eligibility: Guild leaders must complete the registration form before <span className="text-slate-200">Sep 19 @ 11:59PM UTC</span> to appear on the leaderboard.
        </p>
      </Section>

      {/* About */}
      <Section id="about" title="About LastMint">
        <p>
          LastMint is a new gamified NFT experience on Solana. Every mint is like a degen game—prize pools, random rewards, and referral earnings built in. You can mint, win SOL, launch your own collections, and now… battle as a guild.
        </p>
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-8">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} LastMint. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-8 md:py-10">
      <h2 className="text-xl md:text-2xl font-bold tracking-tight flex items-center gap-3">
        <span className="h-6 w-1.5 rounded bg-gradient-to-b from-teal-300 to-cyan-400" />
        {title}
      </h2>
      <div className="mt-4 text-slate-200 leading-relaxed">{children}</div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4 shadow-inner">
      {children}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-teal-600/30 bg-gradient-to-br from-slate-900/60 to-slate-900/20 p-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-teal-400 shadow shadow-teal-700/40" />
        <div className="text-slate-200">{children}</div>
      </div>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-5">
      <p className="text-xs uppercase tracking-wider text-slate-400">{label}</p>
      <p className={`mt-1 text-xl font-bold ${accent ? "text-teal-300" : "text-slate-100"}`}>{value}</p>
    </div>
  );
}
