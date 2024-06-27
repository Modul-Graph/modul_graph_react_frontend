import {Dispatch} from "react";
import {redirect, useSearchParams} from "next/navigation";
import {Button, ButtonProps} from "@mui/material";
import isValidPath from "is-valid-path"


const StepperNextButton = ({slideNo, next, maxSlides, allowNavigation, ...props}: StepperNextButtonProps) => {
    const searchParams = useSearchParams()

    const raw_referrer_path = searchParams.get("referrer_path") ?? "/"
    let referrer_path: string = raw_referrer_path

    if (!isValidPath(raw_referrer_path)) {
        referrer_path = "/"
    }


    return slideNo < maxSlides ? <Button {...props} onClick={() => next("next")}
                                         disabled={allowNavigation}>{slideNo + 1 >= maxSlides ? "Fertig" : "Weiter"}</Button> : redirect(referrer_path)


}

export default StepperNextButton

type StepperNextButtonProps = {
    slideNo: number,
    next: Dispatch<"next">
    maxSlides: number
    allowNavigation: boolean
} & ButtonProps