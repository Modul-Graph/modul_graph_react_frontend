import {GenericFooter} from "@/components/dashboardFooter/GenericFooter";
import {FooterButtonBack} from "@/components/buttons/FooterButtonBack";
import {FooterButtonContinue} from "@/components/buttons/FooterButtonContinue";

/**
 * renders footer for analisys view
 * */
export const AnalysisFooter = () => {
    return (<GenericFooter leftChild={<FooterButtonBack title={"abbrechen"}/>}
                           rightChild={<FooterButtonContinue title={"Machbarkeit überprüfen"}/>}/>)
}