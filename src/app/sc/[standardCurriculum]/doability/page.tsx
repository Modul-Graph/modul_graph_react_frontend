import {RouteType} from "@/app/sc/[standardCurriculum]/routeType";
import DoabilityStepper from "@/app/sc/[standardCurriculum]/doability/Stepper";

const DoabilityPage = ({params}: { params: RouteType }) => {
    const {standardCurriculum} = params
    return <DoabilityStepper standardCurriculum={decodeURIComponent(standardCurriculum)}/>

}

export default DoabilityPage