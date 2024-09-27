import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {TeacherHeaderGrid} from "@/components/dashboardHeader/TeacherHeaderGrid";
import HamburgerDrawer from "@/components/dashboardHeader/HamburgerDrawer";

/**
 * renders Header for Teacher View without competency filter
 * */

export const TeacherHeader = ({sc_name}: { sc_name: string }) => {
    return (
            <GenericHeader title="Studienverlaufsplan" child={<TeacherHeaderGrid sc_name={sc_name}/>}
                           menu={<HamburgerDrawer/>}></GenericHeader>
    )

}
