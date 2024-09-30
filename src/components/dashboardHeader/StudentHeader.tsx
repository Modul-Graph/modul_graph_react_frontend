import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {StudentHeaderGrid} from "@/components/dashboardHeader/StudentHeaderGrid";

/**
 * renders header for the student view
 * **/
export const StudentHeader = ({onCompetenceChange, sc_name}: {
    onCompetenceChange: (v: string[]) => void,
    sc_name: string
}) => {
    return (<GenericHeader title="individueller Studienplan"
                           child={<StudentHeaderGrid onCompetenceChange={onCompetenceChange} sc_name={sc_name}/>}
                           menu={<></>}/>)
}