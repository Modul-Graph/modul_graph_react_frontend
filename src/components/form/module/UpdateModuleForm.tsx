"use client"
import {ModuleResponseType} from "@/lib/zod/moduleResponseSchema";
import {PflichtModuleUpdateSchema} from "@/lib/zod/ModuleSchemas";
import {z} from "zod";
import apiClient, {apiHooks} from "@/lib/connectivity/client";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import ModuleForm from "@/components/form/module/ModuleForm";
import {useEffect} from "react";


export default function ({
                             module,
                             onSaved,
                             sc_name
                         }: {
    sc_name: string;
    module: ModuleResponseType;
    onSaved?: () => void;
}) {

    const {
        name: oldName,
        cp_plus_description,
        description,
        summer,
        winter,
        provides_competences,
        needs_competences,
            module_areas
    } = module;

    const {
        data: sem_data,
        isLoading: sem_isLoading,
        error: sem_error
    } = apiHooks.useGetModuleWinterSummerInfo({params: {moduleName: oldName}}, {
        refetchInterval: false,
        refetchIntervalInBackground: false,
        refetchOnWindowFocus: false
    });

    const form = useForm<z.infer<typeof PflichtModuleUpdateSchema>>({
        resolver: zodResolver(PflichtModuleUpdateSchema),
    });

    useEffect(() => {
        form.reset({
            name: oldName,
            cp: cp_plus_description.DEFAULT,
            description: description ?? "" as String,
            summer,
            winter,
            provides_competences,
            needs_competences,
            isPflicht: module_areas.length === 1
        })
    }, [module]);


    if (sem_error || sem_isLoading) {
        return <></>
    }


    return (
            <ModuleForm
                    sc_name={sc_name}
                    defaultValues={{
                        name: oldName,
                        cp: cp_plus_description.DEFAULT,
                        description: description ?? "" as String,
                        summer,
                        winter,
                        provides_competences,
                        needs_competences,
                        isPflicht: module_areas.length === 1
                    }}
                    form={form}
                    onSubmit={async (d) => {

                        const modules = await apiClient.getAllModules({queries: {sc_name: sc_name}})

                        if (modules.filter((e) => e !== oldName).includes(d.name)) {
                            form.setError("name", {message: "Modulname existiert bereits", type: "value"})
                            return;
                        }

                        const prevName = oldName;
                        const {name, cp, description, summer, winter, needs_competences, provides_competences} = d;

                        await apiClient.updateModule(
                                {
                                    name,
                                    cp,
                                    description,
                                    summer: summer || sem_data[1],
                                    winter: winter || sem_data[0],
                                    needs_competences,
                                    provides_competences
                                },
                                {params: {old_name: prevName}},
                        );
                        form.reset()
                        onSaved?.();
                    }}
            />
    )
}

//
