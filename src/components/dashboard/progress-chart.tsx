"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { getUserDemoResults, type DemoResultItem } from "@/lib/results";

type ProgressChartProps = {
  userId: string;
};

type ChartPoint = {
  intento: string;
  porcentaje: number;
};

export function ProgressChart({ userId }: ProgressChartProps) {
  const [results, setResults] = useState<DemoResultItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadResults() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const items = await getUserDemoResults(userId);
        if (!isMounted) return;
        setResults(items);
      } catch {
        if (!isMounted) return;
        setErrorMessage("No se pudo cargar la evolucion del rendimiento.");
      } finally {
        if (!isMounted) return;
        setIsLoading(false);
      }
    }

    void loadResults();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  const chartData = useMemo<ChartPoint[]>(() => {
    return [...results]
      .reverse()
      .map((item, index) => ({ intento: `Intento ${index + 1}`, porcentaje: item.scorePercentage }));
  }, [results]);

  return (
    <section className="rounded-2xl border border-mq-border-strong bg-mq-surface p-5 sm:p-6">
      <h2 className="text-lg font-semibold text-white">Evolucion del rendimiento</h2>
      <p className="mt-1 text-sm text-mq-muted">
        Visualiza como cambia tu porcentaje en cada intento.
      </p>

      {isLoading ? (
        <div className="mt-5 h-72 w-full animate-pulse rounded-2xl border border-mq-border-strong bg-white/[0.04]" />
      ) : errorMessage ? (
        <p className="mt-4 rounded-lg border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
          {errorMessage}
        </p>
      ) : chartData.length === 0 ? (
        <div className="mt-4 rounded-2xl border border-mq-border-strong bg-white/[0.03] p-4">
          <p className="text-sm text-mq-muted">Aun no tienes intentos. Empieza ahora</p>
          <Link
            href="/demo"
            className="mt-4 inline-flex min-h-12 items-center justify-center rounded-xl bg-mq-accent px-6 text-sm font-semibold text-mq-accent-foreground shadow-[0_14px_34px_-16px_rgb(0_209_255/0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            Entrenar ahora
          </Link>
        </div>
      ) : (
        <div className="mt-5 h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 10, right: 12, left: -10, bottom: 8 }}>
              <CartesianGrid stroke="rgb(255 255 255 / 0.12)" strokeDasharray="4 4" />
              <XAxis
                dataKey="intento"
                tick={{ fill: "rgb(232 238 247 / 0.75)", fontSize: 12 }}
                axisLine={{ stroke: "rgb(255 255 255 / 0.2)" }}
                tickLine={{ stroke: "rgb(255 255 255 / 0.2)" }}
              />
              <YAxis
                domain={[0, 100]}
                tick={{ fill: "rgb(232 238 247 / 0.75)", fontSize: 12 }}
                axisLine={{ stroke: "rgb(255 255 255 / 0.2)" }}
                tickLine={{ stroke: "rgb(255 255 255 / 0.2)" }}
              />
              <Tooltip
                cursor={{ stroke: "rgb(0 209 255 / 0.5)", strokeWidth: 1 }}
                contentStyle={{
                  background: "rgb(10 31 68 / 0.95)",
                  border: "1px solid rgb(255 255 255 / 0.16)",
                  borderRadius: 12,
                  color: "#E8EEF7",
                }}
                formatter={(value: number) => [`${value}%`, "Puntaje"]}
              />
              <Line
                type="monotone"
                dataKey="porcentaje"
                stroke="#00D1FF"
                strokeWidth={3}
                dot={{ r: 4, fill: "#00D1FF" }}
                activeDot={{ r: 6, fill: "#00D1FF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
