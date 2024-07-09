import Button from "@mui/material/Button";

/**
 * functional component for a custom continue button for footer
 * **/
export const FooterButtonContinue = ({title}: FooterButtonContinueProps) => {
    return (
            <Button variant={"contained"}>{title}</Button>
    )
}
type FooterButtonContinueProps = { title: string }