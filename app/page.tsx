"use client";

import { useState } from "react";
import Bouquet3D from "./Bouquet3D";

export default function OctoberPage() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f2ec] text-[#332d2b]">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#d9aab7]/20 blur-[120px]" />
        <div className="absolute -right-32 top-[35%] h-[420px] w-[420px] rounded-full bg-[#c9bfd3]/20 blur-[130px]" />
        <div className="absolute bottom-[-180px] left-[30%] h-[420px] w-[420px] rounded-full bg-[#e8d9a8]/15 blur-[130px]" />
      </div>

      {!opened ? (
        <section className="relative flex min-h-screen items-center justify-center px-6 py-12">
          <div className="relative z-10 w-full max-w-[680px] text-center">
            <div className="mb-10 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#b77b87]/30" />

              <span className="text-[9px] uppercase tracking-[0.42em] text-[#b77b87]">
                October · 2026
              </span>

              <span className="h-px w-10 bg-[#b77b87]/30" />
            </div>

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#b77b87]/20 bg-[#fbf8f4]/80 shadow-[0_15px_50px_rgba(183,123,135,0.10)]">
              <span className="text-2xl text-[#d58c9b]">✿</span>
            </div>

            <h1 className="mt-8 font-serif text-[48px] leading-[0.98] tracking-[-0.055em] sm:text-[72px]">
              October
              <br />
              is here.
            </h1>

            <p className="mx-auto mt-7 max-w-[390px] text-[13px] leading-7 text-[#746b67]">
              And since it happens to be your birthday month,
              <br className="hidden sm:block" />
              I couldn't let it pass quietly.
            </p>

            <div className="mx-auto mt-12 max-w-[420px] rounded-[28px] border border-[#d58c9b]/20 bg-[#fbf8f4]/80 p-2 shadow-[0_25px_80px_rgba(183,123,135,0.10)] backdrop-blur-sm">
              <button
                onClick={() => setOpened(true)}
                className="group flex w-full items-center justify-between rounded-[21px] bg-[#d58c9b] px-6 py-5 text-left text-[#fff9fa] transition-all duration-500 hover:bg-[#c77d8c] active:scale-[0.985]"
              >
                <div>
                  <p className="text-[9px] uppercase tracking-[0.30em] text-[#fff0f2]">
                    A little something
                  </p>

                  <p className="mt-1 font-serif text-xl">
                    I got you flowers.
                  </p>
                </div>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[0.28em] text-[#a18f89]">
              Open when you're ready
            </p>
          </div>
        </section>
      ) : (
        <section className="relative min-h-screen px-5 pb-20 pt-10 sm:px-8 sm:pt-14">
          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#b77b87]/20 text-sm text-[#d58c9b]">
                  ✿
                </span>

                <span className="text-[9px] uppercase tracking-[0.32em] text-[#746b67]">
                  October 2026
                </span>
              </div>

              <span className="text-[9px] uppercase tracking-[0.32em] text-[#b77b87]">
                For Marwa
              </span>
            </header>

            <div className="mx-auto mt-14 max-w-xl text-center sm:mt-16">
              <p className="text-[9px] uppercase tracking-[0.42em] text-[#b77b87]">
                The beginning of your month
              </p>

              <h2 className="mt-5 font-serif text-[43px] leading-[0.98] tracking-[-0.05em] sm:text-[64px]">
                Some virtual flowers for
                <br />
                you, hehe^^
              </h2>

              <p className="mx-auto mt-6 max-w-[390px] text-[13px] leading-7 text-[#746b67]">
                Your actual birthday is still away.
                <br className="hidden sm:block" />
                But honestly, why wait?
              </p>
            </div>

            <div className="relative mx-auto mt-2 h-[620px] w-full max-w-[900px] sm:h-[720px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[410px] w-[410px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b77b87]/10 sm:h-[500px] sm:w-[500px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b77b87]/10 sm:h-[390px] sm:w-[390px]" />

              <span className="absolute left-[9%] top-[29%] text-sm text-[#b77b87]/45">
                ✦
              </span>

              <span className="absolute right-[9%] top-[35%] text-xs text-[#b77b87]/40">
                ✦
              </span>

              <span className="absolute left-[18%] top-[62%] text-[10px] text-[#b77b87]/35">
                •
              </span>

              <span className="absolute right-[18%] top-[57%] text-[10px] text-[#b77b87]/35">
                •
              </span>

              <div className="absolute inset-0">
                <Bouquet3D />
              </div>
            </div>

            <div className="mx-auto mt-[-12px] max-w-[520px] text-center sm:mt-[-25px]">
              <div className="mx-auto mb-7 flex items-center justify-center gap-4">
                <span className="h-px w-12 bg-[#b77b87]/20" />
                <span className="text-[#d58c9b]">♡</span>
                <span className="h-px w-12 bg-[#b77b87]/20" />
              </div>

              <p className="font-serif text-[25px] leading-tight tracking-[-0.025em] sm:text-[30px]">
                For all the little things
                <br />
                that make you, you.
              </p>

              <p className="mx-auto mt-5 max-w-[390px] text-[12px] leading-7 text-[#746b67]">
                Consider this the opening ceremony of your
                birthday month. 
              </p>

              <p className="mt-7 font-serif text-lg italic text-[#b77b87]">
                — Nisha
              </p>
            </div>

            <div className="mt-14 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#b77b87]/20" />

            

              <span className="h-px w-8 bg-[#b77b87]/20" />
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes reveal {
          from {
            opacity: 0;
            transform: translateY(28px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: reveal 0.9s cubic-bezier(0.22, 1, 0.36, 1);
        }
      `}</style>
    </main>
  );
}