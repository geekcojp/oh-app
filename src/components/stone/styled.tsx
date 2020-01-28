import styled from 'styled-components';

export const Container = styled.div`
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    border-radius: 50%;
    &.black {
        background-color: #000;
    }
    &.white {
        background-color: #fff;
    }
`;
