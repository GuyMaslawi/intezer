import { Grid, Typography } from "@mui/material";
import { USERS } from "../../constants/users";
import User from "../../components/user/User";
import { Wrapper } from "./Users.style";

const Users = () => {
    return (
        <Wrapper container>
            <Grid item xs={12} md={6}>
                <Typography
                    textAlign="center"
                    variant="h2"
                    gutterBottom>
                    Users
                </Typography>
            </Grid>
            <Grid container item xs={12} md={6} spacing={2} justifyContent="center">
                {USERS.map(user => (
                    <Grid item key={user.id}>
                        <User firstName={user.name} lastName={user.lastName} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default Users;