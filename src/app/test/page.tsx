"use client";

import { apiHooks } from "@/lib/connectivity/client";
import TimeTable from "@/components/timeTable/TimeTable";

export default function Page() {
    const sc_param = "SPO 2017 Informatik (Start Wintersemester)";
    const {
        data: res,
        isLoading,
        error,
    } = apiHooks.useGetTeacherScTable(
        { queries: { sc_name: sc_param } },
        {
            refetchInterval: false,
            refetchOnWindowFocus: false,
        },
    );

    if (isLoading) {
        return "Loading...";
    } else if (error) {
        return "Error";
    }
    console.log("test");

    return <TimeTable onCellClicked={(e, d) => console.log(e, d)} ttData={res} />;
}
