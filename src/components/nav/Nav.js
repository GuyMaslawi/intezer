import { LINKS } from "../../constants/nav";
import { Action } from "./Nav.style";

const Nav = () => {
    return (
        LINKS.map(link =>
            <Action key={link.id}
                    to={link.path}
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "rgb(25, 118, 210)" : "",
                        };
                    }}>
                {link.icon} {link.name}
            </Action>
        )
    );
};

export default Nav;