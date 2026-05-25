import React, { Suspense } from "react";
import { HealthCheck } from "./health-check";
import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

function Page() {
  prefetch(trpc.health.queryOptions());
  return (
    <HydrateClient>
      <div className="flex flex-col">
        <ErrorBoundary fallback={<div>Something went wrong.</div>}>
          <Suspense fallback={<div>loading......</div>}>
            <HealthCheck />
          </Suspense>
        </ErrorBoundary>
      </div>
    </HydrateClient>
  );
}

export default Page;
