import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {StudentViewSCHeaderGrid} from "@/components/dashboardHeader/StudentViewSCHeaderGrid";

/**
 * renders header for the student view
 * **/
export const StudentViewSCHeader = ({sc_name}: { sc_name: string }) => {
    return (<GenericHeader title={`Regelstudienplan`}
                           child={<StudentViewSCHeaderGrid sc_name={sc_name}/>}
                           menu={<></>}/>)
}