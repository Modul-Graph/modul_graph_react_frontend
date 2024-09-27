"use client"

import {apiHooks} from "@/lib/connectivity/client";
import React, {memo, useEffect} from "react";
import _ from "lodash";
import {DynamicCustomGraph} from "@/components/DynamicCustomGraph";
import {Box, CircularProgress} from "@mui/material";

export const CompetencyGraph = memo(({sc_name, competences}: { sc_name: string, competences: string[] }) => {
    const {
        data: _data,
        isLoading,
        isError
    } = apiHooks.useImmutableQuery("/analysis/suggestion", {
        standard_curriculum: sc_name,
        competences
    }, {}, {staleTime: 1000 * 60 * 60 * 24 * 7});

    useEffect(() => {

    }, []);

    const [nodes, edges] = _data ?? [[], []]

    if (isLoading) {
        return <Box height={1} width={1} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <CircularProgress/>
        </Box>
    }

    return <DynamicCustomGraph nodes={nodes} edges={edges} onClick={(d) => {
        console.log(d)
    }}/>
}, (prevProps, nextProps) => {
    return _.isEqual(prevProps.competences, nextProps.competences) && prevProps.sc_name === nextProps.sc_name
})