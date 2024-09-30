import {createTsForm} from "@ts-react/form";
import {ModuleAreaUpdateSchema} from "@/lib/zod/moduleAreaUpdateSchema";
import FilledByModuleEditFormComponent from "@/components/form/moduleArea/FilledByModuleEditFormComponent";
import CPTextField from "@/components/form/CPTextField";
import FormTextField from "@/components/form/FormTextField";
import {CPSchema, FilledByModuleSchema, ModuleAreaNameSchema} from "@/lib/zod/general";
import FormContainer from "@/components/form/FormContainer";
import apiClient from "@/lib/connectivity/client";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const formMapping = [
    [FilledByModuleSchema, FilledByModuleEditFormComponent] as const,
    [CPSchema, CPTextField] as const,
    [ModuleAreaNameSchema, FormTextField] as const,
] as const;

const Form = createTsForm(formMapping, {FormComponent: FormContainer});

export default function CreateModuleAreaForm({
                             sc_name,
                             onSaved,
                         }: {
    sc_name: string;
    onSaved?: () => void;
}) {

    const form = useForm<z.infer<typeof ModuleAreaUpdateSchema>>({
        resolver: zodResolver(ModuleAreaUpdateSchema),
    });

    return (
            <Form
                    form={form}
                    props={{
                        filled_by_module: {
                            sc_name: sc_name,
                        },
                    }}
                    onSubmit={async (d) => {

                        const moduleAreas = await apiClient.getAllModuleAreas();

                        const {name, cp, filled_by_module} = d;

                        if (moduleAreas.includes(name)) {
                            form.setError("name", {message: "WPF Name existiert bereits", type: "value"})
                            return;
                        }

                        await apiClient.createModuleArea(
                                {
                                    name,
                                    cp,
                                    filled_by_module,
                                },
                        );
                        onSaved?.();
                    }}
                    schema={ModuleAreaUpdateSchema}
            />
    );
}
