import {PflichtModuleUpdateType} from "@/lib/zod/ModuleSchemas";
import {Stack} from "@mui/material";
import InertTextField from "@/components/dashboardDialog/InertTextField";
import {getList} from "@/components/dashboardDialog/util";
import {ModuleResponseType} from "@/lib/zod/moduleResponseSchema";

export default function({data}: {data: ModuleResponseType}) {
    return <Stack paddingTop={2} gap={2}>
        <InertTextField value={data.name} label={"Name"} />
        <InertTextField value={data.cp_plus_description.DEFAULT} label={"CP"} />
        <InertTextField value={data.description} label={"Beschreibung"} multiline minRows={4} maxRows={15} />
        {getList(data.needs_competences, "Benötigte Kompetenzen")}
        {getList(data.provides_competences, "Bereitgestellte Kompetenzen")}
    </Stack>
}