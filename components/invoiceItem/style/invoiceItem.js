import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
    padding: 0 2em;
    border-radius: 6px;
    height: 72px;

    &:nth-last-child(1) {
        margin-bottom: 0;
    }
`;
export const Id = styled.h3`
    color: #0c0e16;
    font-size: 12px;
`;
export const Text = styled.p`
    font-size: 12px;
    color: #858bb2;
`;
export const Total = styled(Id)`
    font-size: 16px;
`;
export const Status = styled.p`
    font-size: 12px;
    width: 104px;
    background-color: ${({ status }) =>
        status == "pending" ? "rgba(255, 143, 0, 0.1)" : status == "draft" ? "rgba(55, 59, 83, 0.1)" : " rgba(51, 214, 159, 0.1)"};
    color: ${({ status }) => (status == "pending" ? "rgba(255, 143, 0, 1)" : status == "draft" ? "rgba(55, 59, 83, 1)" : " rgba(51, 214, 159, 1)")};
    padding: 1em 1.5em;
    font-weight: bold;
    text-transform: capitalize;
    text-align: center;
    border-radius: 6px;
    margin-left: 2em;
`;
export const StyleArrow = styled(Image)``;
export const SVGWrap = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 230px;
    text-align: center;
`;
export const Title = styled(Id)`
    font-size: 20px;
    margin-top: 3em;
`;
export const SubTitle = styled(Text)``;

export const SSpan = styled.span`
    font-weight: bold;
`;
