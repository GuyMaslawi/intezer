import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Action = styled(NavLink)({
    textDecoration: 'none',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '9rem',

    '.MuiSvgIcon-root': {
        width: '4rem',
        height: '4rem'
    }
});