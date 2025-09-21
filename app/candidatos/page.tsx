import { Suspense } from "react";

import CandidateList from "./components/CandidateList";

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <PageContent />
    </Suspense>
  );
}

function PageContent() {
  return (
    <div className="flex w-full flex-col gap-6">
      <CandidateList />
    </div>
  )
}
