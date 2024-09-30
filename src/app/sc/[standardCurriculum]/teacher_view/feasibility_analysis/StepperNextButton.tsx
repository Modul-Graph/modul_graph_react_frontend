"use client"

import {Dispatch, useEffect, useState} from "react";
import {redirect, useSearchParams} from "next/navigation";
import {Button, ButtonProps} from "@mui/material";
import {LoadingButton} from "@mui/lab"


const StepperNextButton = ({slideNo, next, maxSlides, allowNavigation, ...props}: StepperNextButtonProps) => {

    const searchParams = useSearchParams()
    const [origin, setOrigin] = useState<string>()

    useEffect(() => {
        setOrigin(window.origin)
    }, []);

    if (!origin) return <LoadingButton>Loading...</LoadingButton>

    const raw_referrer_path = searchParams.get("referrer_path") ?? "/"
    let referrer_path: URL;
    try {
        referrer_path = new URL(raw_referrer_path, origin)
    } catch (e) {
        referrer_path = new URL("/", origin)
    }


    return slideNo < maxSlides ? <Button {...props} onClick={() => next("next")}
                                         disabled={allowNavigation}>{slideNo + 1 >= maxSlides ? "Fertig" : "Weiter"}</Button> : redirect(referrer_path.pathname)


}

export default StepperNextButton

type StepperNextButtonProps = {
    slideNo: number,
    next: Dispatch<"next">
    maxSlides: number
    allowNavigation: boolean
} & ButtonProps