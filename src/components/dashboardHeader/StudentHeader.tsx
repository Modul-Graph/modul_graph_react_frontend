import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {StudentHeaderGrid} from "@/components/dashboardHeader/StudentHeaderGrid";

export const StudentHeader = () => {
    return (<GenericHeader child={<StudentHeaderGrid/>}/>)
}