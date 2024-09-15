import {Button, Card, CardActions, CardContent, CardHeader, Modal, Stack} from "@mui/material";
import {DiscList, DiscListItem} from "@/components/lists/DiscList";

export default function TeacherViewModulePopup(props: TeacherViewModulePopupProps) {
    return <Modal open={props.open}>
        <Card>
            <CardHeader title={props.moduleName}/>
            <CardContent>
                <Stack spacing={1}>
                    <Card variant={"outlined"}>
                        <CardHeader title="Credits"/>
                        <CardContent>
                            {props.credits.map(credit => <div>{credit.name}: {credit.cp} CP</div>)}
                        </CardContent>
                    </Card>
                    <Card variant={"outlined"}>
                        <CardHeader title="Semester"/>
                        <CardContent>
                            {props.providedAt}
                        </CardContent>
                    </Card>
                    <Card variant={"outlined"}>
                        <CardHeader title="Required Competences"/>
                        <CardContent>
                            <DiscList>
                                {props.requriedCompetences.map(comp => <DiscListItem>{comp}</DiscListItem>)}
                            </DiscList>
                        </CardContent>
                    </Card>
                    <Card variant={"outlined"}>
                        <CardHeader title="Provided Competences"/>
                        <CardContent>
                            <DiscList>
                                {props.providedCompetences.map(comp => <DiscListItem>{comp}</DiscListItem>)}
                            </DiscList>
                        </CardContent>
                    </Card>
                </Stack>

            </CardContent>
            <CardActions>
                <Button onClick={props.onClose}>Close</Button>
            </CardActions>
        </Card>
    </Modal>
}

interface TeacherViewModulePopupProps {
    onClose: () => void;
    open: boolean;
    moduleName: string;
    credits: { name: string, cp: number }[];
    providedAt: "Sommersemester" | "Wintersemester" | "Sommer- und Wintersemester";
    requriedCompetences: string[];
    providedCompetences: string[];
}

