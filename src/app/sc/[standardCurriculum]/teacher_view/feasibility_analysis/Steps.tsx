import React, {ReactNode} from "react";
import Grid from "@mui/material/Grid";
import {Alert, AlertTitle, Box, CircularProgress, ListItemText, Paper, Typography} from "@mui/material";
import {DiscList, DiscListItem} from "@/components/lists/DiscList";
import {AlertColor} from "@mui/material/Alert/Alert";
import {motion} from "framer-motion";


export const Step = ({children, onAnimationComplete}: { children: ReactNode, onAnimationComplete?: () => void }) => {
    return (
            <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                    initial={{
                        x: 1000,
                        opacity: 0
                    }}
                    animate={{
                        x: 0,
                        opacity: 1
                    }}
                    exit={{
                        x: -1000,
                        opacity: 0
                    }}
                    onAnimationComplete={onAnimationComplete}

                    transition={{
                        duration: 0.5,
                        type: "tween",
                        ease: "easeInOut"
                    }}
            >

                {children}
            </motion.div>
    )
}

export const Step1 = ({standardCurriculumName}: StepsProps) => {
    return <Paper sx={{maxWidth: "60vw"}}>
        <Grid container sx={{height: 1}} padding={2}>
            <Grid item xs={12}>
                <Typography variant={"h4"}>
                    {`Machbarkeitsanalyse für "${standardCurriculumName}"`}
                </Typography>
            </Grid>
            <Grid item>
                <Typography>
                    Dieses Tool soll Ihnen helfen, die Machbarkeit eines Regelstudienplans zu analysieren.
                </Typography>
                <Typography>
                    Machbarkeit ist folgendermaßen definiert:
                </Typography>
                <DiscList sx={{backgroundColor: 'background.paper'}}>
                    <DiscList subheader={"Regelstundenplan-Konformität:"}>
                        <DiscListItem>
                            <ListItemText>Es gibt genügend Module um den Regelstudienplan zu füllen</ListItemText>
                        </DiscListItem>
                        <DiscListItem>
                            <ListItemText>Jedes Modul muss die exakten CP haben, wie es im Regelstudienplan definiert
                                ist</ListItemText>
                        </DiscListItem>
                        <DiscListItem>
                            <ListItemText>Die Module müssen in der Semester-Reihenfolge wie im Regelstudieplan
                                beschrieben
                                belegbar sein.</ListItemText>
                        </DiscListItem>
                    </DiscList>
                    <DiscList subheader={"Kompetenz-Konformität:"}>
                        <DiscListItem>
                            <ListItemText>
                                Alle Module müssen die Kompetenzvoraussetzungen erfüllen. D.h.: Wenn ein Modul eine
                                Kompetenz Vorraussetzt, muss diese in einem vorherigen Modul erworben worden sein.
                            </ListItemText>
                        </DiscListItem>
                    </DiscList>
                </DiscList>
            </Grid>
        </Grid>
    </Paper>

}

export const Step2 = ({standardCurriculumName}: StepsProps) => {
    return <Box sx={{maxWidth: "60vw"}} display={"flex"} flexDirection={"column"} gap={1} alignItems={"center"} justifyContent={"center"}
                width={1} height={1}>
        <CircularProgress/>
        <Typography>{`Analysiere ${standardCurriculumName}...`}</Typography>
    </Box>
}

export const Step3 = ({status, message}: Step3Props) => {
    return <Box sx={{maxWidth: "60vw"}} display={"flex"} alignItems={"center"} justifyContent={"center"} height={1}>
        <Alert severity={status}>
            <AlertTitle>
                <Typography>{status[0].toUpperCase() + status.slice(1)}</Typography>
            </AlertTitle>
            {message}
        </Alert>
    </Box>
}

type StepsProps = {
    standardCurriculumName: string
}

type Step3Props = StepsProps & {
    status: AlertColor,
    message: string
}