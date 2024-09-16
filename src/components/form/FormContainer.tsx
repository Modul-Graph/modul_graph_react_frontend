import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React, { ComponentProps, ReactNode } from "react";

export default function FormContainer({
    children,
    loading,
    ...props
}: {
    children: ReactNode;
    loading?: boolean;
} & ComponentProps<"form">) {
    return (
        <form
            style={{ paddingTop: "1rem" }}
            onSubmit={(e) => {
                props.onSubmit?.(e);
                e.preventDefault();
                e.stopPropagation();
            }}
        >
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"start"}
                flexDirection={"column"}
                gap={4}
            >
                <Stack spacing={1} sx={{ width: 1 }}>
                    {children}
                </Stack>
                <Button fullWidth variant={"contained"} color={"success"} loading={loading} type="submit">
                    Speichern
                </Button>
            </Box>
        </form>
    );
}
