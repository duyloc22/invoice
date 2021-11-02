import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 103px;
    height: 100vh;
    background-color: #373b53;
    border-radius: 0 20px 20px 0;
    z-index: 0;
`;

export const Square = styled(Container)`
    height: 103px;
    background-color: #7c5dfa;
    z-index: 1;
`;
export const Rect = styled(Container)`
    position: absolute;
    top: 50%;
    height: 51px;
    background-color: #9277ff;
    border-radius: 20px 0 20px 0;
    z-index: 2;
`;
export const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
`;
export const Triangle = styled.div`
    position: absolute;
    bottom: 50%;
    left: 50%;
    z-index: 4;
    border-top: 40px solid #7c5dfa;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    transform: translateX(-50%);
`;

export const Toggler = styled.div``;

export const Avatar = styled(Image)`
    border-radius: 50%;
    cursor: pointer;
`;
export const AvatarWrap = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    width: 40px;
    z-index: 1;
    transform: translateX(-50%);
`;
