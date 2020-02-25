import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    &:before {
        content: "";
        position: absolute;
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        top: 0;
        left: 0;
        transform: translate(50%, 50%);
    }
    &.black:before {
        background-color: #000;
    }
    &.white:before {
        background-color: #fff;
    }
`;
