import styled from "@emotion/styled";

export const Container = styled("div")({
    backgroundColor: '#000',
    margin: '0 auto',
    height: '10rem',
    width: '37rem',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    position: 'fixed',
    left: '50%',
    transform: 'translateX(-50%)',
});