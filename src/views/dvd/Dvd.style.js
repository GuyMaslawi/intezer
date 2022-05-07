import styled from "@emotion/styled";

export const Wrapper = styled("div")({
    backgroundColor: '#000',
    height: 'calc(100vh - 18rem)',
    position: 'relative',
});

export const Img = styled("img", {
    shouldForwardProp: (prop) => prop !== 'top' && prop !== 'left',
})(({ top, left }) => ({
    width: '10rem',
    height: '10rem',
    position: "absolute",
    top: top,
    left: left,
}));