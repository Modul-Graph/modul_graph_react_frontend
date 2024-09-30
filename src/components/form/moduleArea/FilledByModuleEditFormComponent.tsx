import {useTsController} from "@ts-react/form";
import React from "react";
import {apiHooks} from "@/lib/connectivity/client";
import {FilledByModuleType} from "@/lib/zod/general";
import TransferList from "@/components/TransferList";

export default function FilledByModuleEditFormComponent({sc_name}: { sc_name: string }) {
    const {
        field: {onChange, value: _value},
        error,
    } = useTsController<FilledByModuleType>();

    const {
        data,
        error: queryError,
        isLoading,
    } = apiHooks.useGetAllModules(
            {queries: {sc_name, ignore_wpf: true}},
            {
                refetchInterval: false,
                refetchOnWindowFocus: false,
                refetchIntervalInBackground: false,
            },
    );
    const value = _value ?? [];

    if (queryError) {
        console.error(queryError);
    }

    if (isLoading) {
        return <></>;
    }

    const initialLeft = Array.from(new Set(data ?? []).difference(new Set(value)))

    return (
            <TransferList
                    titleLeft={"Module im SPO"}
                    titleRight={"WPF belegbarte Module"}
                    initialLeft={initialLeft}
                    initialRight={value ?? []}
                    onChange={(v) => onChange(v)}
                    error={queryError?.message ?? error?.errorMessage}
            />
    );
}
