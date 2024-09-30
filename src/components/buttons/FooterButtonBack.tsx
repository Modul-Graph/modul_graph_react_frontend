import Button from "@mui/material/Button";

/**
 * functional component for a custom back button for footer
 * **/
export const FooterButtonBack = ({title}: FooterButtonBackProps) => {
    return (
            <Button variant={"outlined"}>{title}</Button>
    )
}

type FooterButtonBackProps = { title: string }