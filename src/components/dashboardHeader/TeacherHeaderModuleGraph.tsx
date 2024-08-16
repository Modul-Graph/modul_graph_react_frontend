import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {TeacherHeaderGridModuleGraph} from "@/components/dashboardHeader/TeacherHeaderGridModuleGraph";
import HamburgerDrawer from "@/components/dashboardHeader/HamburgerDrawer";

/**
 * renders Header for Teacher View + competency filter
 * */

export const TeacherHeaderModuleGraph = () => {
    return (
            <GenericHeader title="Studienverlaufsplan" child={<TeacherHeaderGridModuleGraph/>} menu={<HamburgerDrawer/>}></GenericHeader>
    )

}
