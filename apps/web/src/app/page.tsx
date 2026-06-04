"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGreeting } from "@/lib/api";

export default function Home() {
  const { data, error, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["greeting"],
    queryFn: fetchGreeting,
  });

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(180deg,#f8fafc_0%,#eef2ff_45%,#ffffff_100%)] px-6 py-12 text-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[size:42px_42px] opacity-40" />
      <main className="relative w-full max-w-3xl rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur md:p-12">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-500">
              Frontend fetch demo
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">
              TanStack Query + API fetch
            </h1>
          </div>
          <button
            type="button"
            onClick={() => refetch()}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            Refresh
          </button>
        </div>

        <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm font-medium text-slate-500">API result</p>

          {isLoading ? (
            <p className="mt-4 text-lg text-slate-700">Loading greeting...</p>
          ) : error ? (
            <p className="mt-4 text-lg text-rose-600">
              {(error as Error).message}
            </p>
          ) : (
            <div className="mt-4 space-y-3">
              <p className="text-2xl font-semibold text-slate-950">
                {data?.message}
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="rounded-full bg-white px-3 py-1">
                  Service: {data?.service}
                </span>
                <span className="rounded-full bg-white px-3 py-1">
                  Timestamp: {data?.timestamp}
                </span>
                <span className="rounded-full bg-white px-3 py-1">
                  {isFetching ? "Refreshing..." : "Fresh from the API"}
                </span>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
