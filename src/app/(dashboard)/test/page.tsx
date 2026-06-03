import React, { Suspense } from "react";
import { HealthCheck } from "./health-check";
import { HydrateClient } from "@/trpc/server";
import { ErrorBoundary } from "react-error-boundary";

function Page() {
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
