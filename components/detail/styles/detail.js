import styled from "styled-components";

export const Container = styled.div`
    max-width: 730px;
    width: 100%;
    margin: 1em auto;
    background-color: #ffffff;
    border-radius: 8px;
    padding: ${({ head }) => (head ? "1em 2em" : "2em")};
`;
export const Inner = styled.div``;
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

export const Button = styled.button`
    font-weight: bold;
    font-size: 12px;
    color: ${({ del, mark }) => (del || mark ? "#ffffff" : "#7e88c3")};
    background-color: ${({ del, mark }) => (del ? "#EC5757" : mark ? "#7C5DFA" : "#F9FAFE")};
    padding: 1em 1.5em;
    border-radius: 24px;
    border: 0;
    margin-left: 0.3em;
    cursor: pointer;
`;
export const GoBackWrap = styled.div`
    max-width: 730px;
    margin: 5em auto 0;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const GoBackText = styled.p`
    font-size: 12px;
    font-weight: bold;
    margin-left: 2em;
`;
