import {Button} from "@mui/material";

export const HeaderButtonViewRSP = ({sc_name}: { sc_name: string }): JSX.Element => {
    return (
            <Button variant={"contained"} disableElevation={true}
                    href={`/sc/${encodeURI(sc_name)}/student_view/sc_view`}>Regelstudienplan anschauen</Button>
    )
}