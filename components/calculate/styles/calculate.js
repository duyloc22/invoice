import styled from "styled-components";

export const Container = styled.div`
    margin-top: 2em;
    background-color: #f9fafe;
    border-radius: 8px 8px 0 0;
`;
export const Wrapper = styled.div`
    padding: 2em;
`;
export const ItemWrap = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const ItemDetailWrap = styled(ItemWrap)`
    width: 50%;
`;
export const AmountWrap = styled(ItemWrap)`
    background-color: #373b53;
    border-radius: 0 0 8px 8px;
    padding: 1em 2em;
    color: #ffffff;
    font-weight: bold;
    align-items: center;
`;

export const Title = styled.p`
    font-size: 11px;
    color: #7e88c3;

    ${({ amount }) => amount && "color:#ffffff"}
`;
export const BlackText = styled.p`
    color: #0c0e16;
    font-size: 12px;
    font-weight: bold;
`;
export const GreyText = styled.p`
    color: #7e88c3;
    font-size: 12px;
    font-weight: bold;
    margin-left: 1em;
`;
export const AmountDue = styled.p`
    font-size: 24px;
`;
