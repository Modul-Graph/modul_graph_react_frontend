
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import React from "react";



export default function SelectCreditPoints() {
    const [ creditPoints, setCreditPoints] = React.useState<string[]>([]);
    console.log(  creditPoints);

    return (
                <Autocomplete
                        multiple
                        id="tags-filled"
                        options={[]}
                        defaultValue={[]}
                        sx={{ m: 1, width: 300, mt: 3 }}
                        freeSolo
                        renderTags={(
                                value: any[],
                                getTagProps: (arg0: { index: any }) => JSX.IntrinsicAttributes
                        ) =>
                                value.map((option: any, index: any) => {
                                    setCreditPoints(value);
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