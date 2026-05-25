"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";

export function HealthCheck() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.health.queryOptions());

  return (
    <div className="">
      <p>
        health check {data.status} {data.code}
      </p>
      <p>Trpc Status</p>
    </div>
  );
}
