import styled from "@emotion/styled";

export const Wrapper = styled("div")({
    backgroundColor: '#000',
    height: 'calc(100vh - 13rem)',
    position: 'relative',
    zIndex: 0,
    width: '100%'
});

export const Text = styled("div", {
    shouldForwardProp: (prop) => prop !== 'top' && prop !== 'left' && prop !== 'color',
})(({ top, left, color }) => ({
    width: '20rem',
    fontSize: '10rem',
    position: 'absolute',
    zIndex: 0,
    top: top,
    left: left,
    color: color,
    lineHeight: 1,
}));