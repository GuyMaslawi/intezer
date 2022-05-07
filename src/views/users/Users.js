import { Grid, Typography } from "@mui/material";
import { USERS } from "../../constants/users";
import User from "../../components/user/User";
import { Wrapper } from "./Users.style";

const Users = () => {
    return (
        <Wrapper container>
            <Grid item xs={12} sm={12} md={6}>
                <Typography
                    textAlign="center"
                    variant="h2"
                    gutterBottom>
                    Users
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={6} container spacing={2}>
                {USERS.map(user => (
                    <Grid item xs={6} sm={4} md={3} lg={2} key={user.id}>
                        <User firstName={user.name} lastName={user.lastName} />
                    </Grid>
                ))}
            </Grid>
        </Wrapper>
    );
};

export default Users;