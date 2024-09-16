"use client";

import CompetenceTimeTable from "@/app/sc/[standardCurriculum]/competence_sc/CompetenceTimeTable";
import { RouteType } from "@/app/sc/[standardCurriculum]/routeType";

export default function Page({ params }: { params: RouteType }) {
    return <CompetenceTimeTable sc={params.standardCurriculum} />;
}
