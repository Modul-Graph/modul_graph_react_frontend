"use client";

import {AnimatePresence} from "framer-motion";
import {Reducer, useEffect, useReducer, useState} from "react";
import apiClient from "@/lib/connectivity/client";
import {DoabilityResponse} from "@/lib/zod/doabilityResponseSchema";
import {Step, Step1, Step2, Step3} from "@/app/sc/[standardCurriculum]/teacher_view/feasibility_analysis/Steps";
import {Box, Button, MobileStepper, Stack} from "@mui/material";
import StepperNextButton from "@/app/sc/[standardCurriculum]/teacher_view/feasibility_analysis/StepperNextButton";
// @ts-ignore
import JSConfetti from "js-confetti";

const DoabilityStepper = (props: DoabilityStepperProps) => {
    return <_DoabilityStepper {...props} />;
};

const _DoabilityStepper = ({standardCurriculum}: DoabilityStepperProps) => {
    const [{allowNavigation, slideNo}, dispatcher] = useReducer(reducer, {
        allowNavigation: STEPS_WITHOUT_NAVIGATION.includes(0),
        slideNo: 0,
    });
    const [data, setData] = useState<DoabilityResponse>({
        status: "error",
        message: "Machbarkeitsanalyse fehlgeschlagen",
    });

    useEffect(() => {
        if (slideNo === 1) {
            apiClient.getDoability({params: {standardCurriculum}}).then((data) => {
                setData(data);
                dispatcher("next");
            });
        }
    }, [slideNo, standardCurriculum]);

    return (
            <Stack justifyContent={"stretch"} alignContent={"stretch"} height={1}>
                <Box flexGrow={1} position={"relative"} p={30}>
                    <AnimatePresence initial={false}>
                        {
                            [
                                <Step key={0}>
                                    <Step1 standardCurriculumName={standardCurriculum}/>
                                </Step>,
                                <Step key={1}>
                                    <Step2 standardCurriculumName={standardCurriculum}/>
                                </Step>,
                                <Step
                                        onAnimationComplete={() => {
                                            if (data.status === "success" || data.status === "info") {
                                                const jsConfetti = new JSConfetti();
                                                jsConfetti.addConfetti().then(() => jsConfetti.destroyCanvas());
                                            }
                                        }}
                                        key={2}
                                >
                                    <Step3
                                            standardCurriculumName={standardCurriculum}
                                            status={data.status}
                                            message={data.message}
                                    />
                                </Step>,
                            ][slideNo]
                        }
                    </AnimatePresence>
                </Box>
                <MobileStepper
                        sx={{position: "relative"}}
                        backButton={<Button disabled>Zurück</Button>}
                        nextButton={
                            <StepperNextButton
                                    allowNavigation={allowNavigation}
                                    slideNo={slideNo}
                                    maxSlides={NUM_STEPS}
                                    next={dispatcher}
                            />
                        }
                        steps={3}
                        activeStep={slideNo}
                />
            </Stack>
    );
};

const NUM_STEPS = 3;

// Array containing indexes of steps that should not have a navigation button
const STEPS_WITHOUT_NAVIGATION = [1];

/**
 * Reducer for the stepper state logic
 * @param slideNo
 * @param allowNavigation
 * @param action
 */
const reducer: Reducer<{ allowNavigation: boolean; slideNo: number }, "next"> = ({slideNo, allowNavigation}) => {
    // If user reached the end of the slides don't do anything
    if (slideNo >= 3) {
        return {allowNavigation: allowNavigation, slideNo: NUM_STEPS};
    }
    if (STEPS_WITHOUT_NAVIGATION.includes(slideNo)) {
        return {allowNavigation: false, slideNo: slideNo + 1};
    } else {
        return {allowNavigation: true, slideNo: slideNo + 1};
    }
};

type DoabilityStepperProps = {
    standardCurriculum: string;
};

export default DoabilityStepper;
