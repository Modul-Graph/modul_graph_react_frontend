import {GenericHeader} from "@/components/dashboardHeader/GenericHeader";
import HamburgerDrawer from "@/components/dashboardHeader/HamburgerDrawer";

/**
 * renders header for feasibility analysis view
 * */
export const AnalysisHeader = () => {
    return (<GenericHeader title={"Machbarkeitsanalyse"} child={<></>} menu={<HamburgerDrawer/>}/>)
}