import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {TeacherHeaderGrid} from "@/components/dashboardHeader/TeacherHeaderGrid";

/**
 * renders Header for Teacher View
 * */

export const TeacherHeader = () => {
    return (
            <GenericHeader title="Studienverlaufsplan" child={<TeacherHeaderGrid/>}></GenericHeader>
    )

}
