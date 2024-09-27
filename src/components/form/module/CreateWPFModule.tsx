import {useForm} from "react-hook-form";
import {z} from "zod";
import {PflichtModuleUpdateSchema} from "@/lib/zod/ModuleSchemas";
import {zodResolver} from "@hookform/resolvers/zod";
import apiClient from "@/lib/connectivity/client";
import ModuleForm from "@/components/form/module/ModuleForm";

export default function CreateWPFModule({sc_name, onSaved}: { sc_name: string, onSaved: () => void }) {
    const form = useForm<z.infer<typeof PflichtModuleUpdateSchema>>({
        resolver: zodResolver(PflichtModuleUpdateSchema)
    });

    return <ModuleForm
            sc_name={sc_name}
            form={form}
            onSubmit={async (d) => {
                const modules = await apiClient.getAllModules({queries: {sc_name: sc_name}})
                if (modules.includes(d.name)) {
                    form.setError("name", {message: "Modulname existiert bereits", type: "value"})
                    return;
                }
                const {name, cp, description, summer, winter, needs_competences, provides_competences} = d;

                await apiClient.createNewWPFModule(
                        {
                            name,
                            cp,
                            description,
                            summer: summer,
                            winter: winter,
                            needs_competences,
                            provides_competences,
                            std_curr_names: [sc_name]
                        },
                        {},
                );
                onSaved?.();
            }}
    />
}