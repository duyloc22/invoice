import styled from "styled-components";

export const Container = styled.div`
    max-width: 730px;
    width: 100%;
    margin: 5em auto;
    background-color: #ffffff;
    border-radius: 8px;
`;
export const Inner = styled.div`
    padding: 2em;
`;
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h3`
    font-size: 16px;
`;
export const SmallTitle = styled.h3`
    font-size: 15px;
`;

export const Text = styled.p`
    font-size: 12px;
    color: #7e88c3;
`;
export const SmallText = styled.p`
    font-size: 11px;
    color: #7e88c3;
`;

export const AddressFrom = styled.div`
    text-align: right;
`;

export const SpaceBetween = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${({ date }) => date && "flex-direction:column;width:unset"}
`;
export const ClientInfo = styled.div`
    width: 50%;
`;
