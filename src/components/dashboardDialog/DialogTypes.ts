import {Dispatch, SetStateAction} from "react";

export type OpenControlProps = {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};
