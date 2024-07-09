import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {StudentHeaderGrid} from "@/components/dashboardHeader/StudentHeaderGrid";
/**
 * renders header for the student view
 * **/
export const StudentHeader = () => {
    return (<GenericHeader title="individueller Studienplan" child={<StudentHeaderGrid/>}/>)
}