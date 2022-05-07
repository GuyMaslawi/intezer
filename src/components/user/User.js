import { USER_IMAGE } from "../../constants/users";
import { Div, Img, Name } from "./User.style";

const User = ({ firstName, lastName }) => {
    return (
        <Div>
            <Img src={USER_IMAGE} />
            <Name>{firstName} {lastName}</Name>
        </Div>
    );
};

export default User;