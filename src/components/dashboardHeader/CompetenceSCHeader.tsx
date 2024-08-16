import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {TeacherHeaderGrid} from "@/components/dashboardHeader/TeacherHeaderGrid";
import HamburgerDrawer from "@/components/dashboardHeader/HamburgerDrawer";

/**
 * renders header study program table and competency analysis
 * */
export const CompetenceSCHeader = () => {
    return (<GenericHeader title={"Kompetenzanalyse"} child={<TeacherHeaderGrid/>} menu={<HamburgerDrawer/>}/>)
}