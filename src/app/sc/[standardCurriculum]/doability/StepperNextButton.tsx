import {Dispatch} from "react";
import {redirect, useSearchParams} from "next/navigation";
import {Button, ButtonProps} from "@mui/material";


const StepperNextButton = ({slideNo, next, maxSlides, allowNavigation, ...props}: StepperNextButtonProps) => {
    const searchParams = useSearchParams()

    const raw_referrer_path = searchParams.get("referrer_path") ?? "/"
    let referrer_path: URL;
    try {
        referrer_path = new URL(raw_referrer_path, window.origin)
    } catch (e) {
        referrer_path = new URL("/", window.origin)
    }


    console.log(referrer_path.pathname)


    return slideNo < maxSlides ? <Button {...props} onClick={() => next("next")}
                   disabled={allowNavigation}>{slideNo+1 >= maxSlides ? "Fertig" : "Weiter"}</Button>: redirect(referrer_path.pathname)


}

export default StepperNextButton

type StepperNextButtonProps = {
    slideNo: number,
    next: Dispatch<"next">
    maxSlides: number
    allowNavigation: boolean
} & ButtonProps