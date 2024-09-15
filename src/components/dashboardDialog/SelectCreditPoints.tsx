
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";



export default function SelectCreditPoints({creditPointsVal, setCreditPoints}: CreditPointsProps) {

    return (
                <Autocomplete
                        multiple
                        id="tags-filled"
                        options={[]}
                        value={creditPointsVal}
                        onChange={(e, v) => {setCreditPoints(v)}}
                        sx={{ m: 1, mt: 3 }}
                        freeSolo
                        renderTags={(
                                value,
                                getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes
                        ) =>
                                value.map((option, index) => {
                                    return (
                                            <Chip
                                                    key={index}
                                                    variant="outlined"
                                                    label={option}
                                                    {...getTagProps({index})}
                                            />
                                    );
                                })
                        }
                        renderInput={(params: any) => (
                                <TextField
                                        {...params}
                                        label="Credit Points"
                                />
                        )}
                />
    )
}

type CreditPointsProps = {creditPointsVal: string[], setCreditPoints: (cps: string[])=>void}
