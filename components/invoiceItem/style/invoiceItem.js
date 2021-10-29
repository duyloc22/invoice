import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    padding: 1em;
    border-radius: 6px;
    max-width: 730px;
    width: 100%;
    height: 72px;

    &:nth-last-child(1) {
        margin-bottom: 0;
    }
`;
export const Id = styled.h3`
    font-size: 12px;
`;
export const Text = styled.p`
    font-size: 12px;
    color: #858bb2;
`;
export const Total = styled.p`
    color: #0c0e16;
    font-weight: bold;
`;
export const Status = styled.p`
    font-size: 12px;
    width: 104px;
    background-color: rgba(51, 214, 159, 0.1);
    color: rgba(51, 214, 159, 1);
    padding: 1em 1.5em;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    border-radius: 6px;

    ${({ status }) =>
        status == "pending"
            ? "background-color: rgba(255, 143, 0, 0.1);color: rgba(255, 143, 0, 1)"
            : status == "draft"
            ? "background-color: rgba(55, 59, 83, 0.1);color: rgba(55, 59, 83, 1)"
            : null};
`;
