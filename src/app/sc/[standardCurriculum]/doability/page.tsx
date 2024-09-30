import { RouteType } from "@/app/sc/[standardCurriculum]/routeType";
import DoabilityStepper from "@/app/sc/[standardCurriculum]/teacher_view/feasibility_analysis/Stepper";

const DoabilityPage = ({ params }: { params: RouteType }) => {
    const { standardCurriculum } = params;

    return <DoabilityStepper standardCurriculum={decodeURI(standardCurriculum)} />;
};

export default DoabilityPage;
