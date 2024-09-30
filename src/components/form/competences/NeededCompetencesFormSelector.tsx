import {useTsController} from "@ts-react/form";
import React from "react";
import {apiHooks} from "@/lib/connectivity/client";
import {FilledByModuleType} from "@/lib/zod/general";
import TransferList from "@/components/TransferList";

export default function NeededCompetencesFormSelector() {
    const {
        field: {onChange, value: _value},
        error,
    } = useTsController<FilledByModuleType>();

    const {
        data,
        error: queryError,
        isLoading,
    } = apiHooks.useGetAllCompetences({},
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
                    titleLeft={"Kompetenzen im SPO"}
                    titleRight={"Benötigte Kompetenzen"}
                    initialLeft={initialLeft}
                    initialRight={value ?? []}
                    onChange={(v) => onChange(v)}
                    error={queryError?.message ?? error?.errorMessage}
            />
    );
}
