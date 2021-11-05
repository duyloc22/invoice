import { Container, Inner, Wrapper, Title, SmallTitle, Text, SmallText, AddressFrom, SpaceBetween, ClientInfo } from "./styles/detail";

export default function Detail({ children, ...rest }) {
    return (
        <Container {...rest}>
            <Inner>{children}</Inner>
        </Container>
    );
}

Detail.Wrapper = function DetailWrapper({ children, ...rest }) {
    return <Wrapper {...rest}>{children}</Wrapper>;
};
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
Detail.AddressFrom = function DetailAddressFrom({ children, ...rest }) {
    return <AddressFrom {...rest}>{children}</AddressFrom>;
};
Detail.SpaceBetween = function DetailSpaceBetween({ children, ...rest }) {
    return <SpaceBetween {...rest}>{children}</SpaceBetween>;
};
Detail.ClientInfo = function DetailClientInfo({ children, ...rest }) {
    return <ClientInfo {...rest}>{children}</ClientInfo>;
};
