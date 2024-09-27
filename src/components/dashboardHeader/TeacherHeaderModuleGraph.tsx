"use client";

import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import {TeacherHeaderGridModuleGraph} from "@/components/dashboardHeader/TeacherHeaderGridModuleGraph";
import HamburgerDrawer from "@/components/dashboardHeader/HamburgerDrawer";

/**
 * renders Header for Teacher View + competency filter
 * */

export const TeacherHeaderModuleGraph = ({onChange, sc_name}: {
    onChange: (v: string[]) => void
    sc_name: string
}) => {
    return (
            <GenericHeader title="Studienverlaufsplan"
                           child={<TeacherHeaderGridModuleGraph sc_name={sc_name} onChange={onChange}/>}
                           menu={<HamburgerDrawer/>}></GenericHeader>
    )

}
