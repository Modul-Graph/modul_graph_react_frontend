import {useTsController} from "@ts-react/form";
import React from "react";
import {apiHooks} from "@/lib/connectivity/client";
import TransferList from "@/components/TransferList";
import {ModuleAreaListType} from "@/lib/zod/general";

export default function ({sc_name}: { sc_name: string }) {
    const {
        field: {onChange, value: _value},
        error,
    } = useTsController<ModuleAreaListType>();

    const {
        data,
        error: queryError,
        isLoading,
    } = apiHooks.useGetWPFAreas(
            {queries: {sc_name}},
            {
                refetchInterval: false,
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
            },
    );

    const value = _value ?? [];

    if (isLoading) {
        return <></>;
    }
    const initialLeft = Array.from(new Set(data).difference(new Set(value)));

    return (
            <TransferList
                    titleLeft={"Verfügbare Module"}
                    titleRight={"Ausgewählte Module"}
                    initialLeft={initialLeft ?? []}
                    initialRight={value ?? []}
                    onChange={onChange}
                    error={queryError?.message ?? error?.errorMessage}
            />
    );
}
