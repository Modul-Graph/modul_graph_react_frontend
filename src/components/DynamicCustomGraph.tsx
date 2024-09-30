import dynamic from "next/dynamic";
import React from "react";
import {Box, CircularProgress} from "@mui/material";

export const DynamicCustomGraph = dynamic(() => import("@/components/studyProgramGraph/CustomGraph").then(r => r.CustomGraph), {
    ssr: false,
    loading: () => <Box w={1} h={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <CircularProgress/>
    </Box>
});