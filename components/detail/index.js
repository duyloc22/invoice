import { Container, Inner, Wrapper, Title, SmallTitle, Text, SmallText } from "./styles/detail";

export default function Detail({ children, ...rest }) {
    return (
        <Container {...rest}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Detail.Title = function DetailTitle({ children, ...rest }) {
    return <Title {...rest}>{children}</Title>;
};
Detail.SmallTitle = function DetailSmallTitle({ children, ...rest }) {
    return <SmallTitle {...rest}>{children}</SmallTitle>;
};
Detail.Text = function DetailText({ children, ...rest }) {
    return <Text {...rest}>{children}</Text>;
};
Detail.SmallText = function DetailSmallText({ children, ...rest }) {
    return <SmallText {...rest}>{children}</SmallText>;
};
