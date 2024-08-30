import Button from "@mui/material/Button";

/**
 * functional component for a custom button for student view footer
 * **/
export const FooterStudentButton = ({onClick}: FooterStudentButtonProps) => {

    // export PDF function in student_view page
    return(<Button variant={"outlined"} onClick={onClick}>als PDF exportieren</Button>)
}

export type FooterStudentButtonProps = {
    onClick?: () => Promise<void>
}
