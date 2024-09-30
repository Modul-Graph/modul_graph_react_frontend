import {Grid, Skeleton} from "@mui/material";

export const CompetencyGraphSkeleton = () => {
    return (
            <Grid container padding={2}  spacing={6} direction={"row"} justifyContent={"space-around"} alignItems={"center"} >
                <Grid container direction={"column"} spacing={4} xs={4}>
                    <Grid item lg={2} >

                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                </Grid>

                <Grid container direction={"column"} spacing={6} xs={5}>
                    <Grid item lg={3}>

                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={1.5}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={2}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                    <Grid item lg={2}>
                        <Skeleton variant={"circular"} width={40} height={40}/>
                    </Grid>
                </Grid>
            </Grid>
    )
}