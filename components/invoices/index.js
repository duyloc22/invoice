import { Container, Wrapper, Title, SubTitle, ListWrap, Button, Plus } from "./styles/home";

export default function Home({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Home.Wrapper = function HomeWrapper({ children, ...rest }) {
    return <Wrapper {...rest}>{children}</Wrapper>;
};
Home.Title = function HomeTitle({ children, ...rest }) {
    return <Title {...rest}>{children}</Title>;
};
Home.SubTitle = function HomeSubTitle({ children, ...rest }) {
    return <SubTitle {...rest}>{children}</SubTitle>;
};
Home.ListWrap = function HomeListWrap({ children, ...rest }) {
    return <ListWrap {...rest}>{children}</ListWrap>;
};
Home.Button = function HomeButton({ children, ...rest }) {
    return <Button {...rest}>{children}</Button>;
};
Home.Plus = function HomePlus({ children, ...rest }) {
    return <Plus {...rest}>{children}</Plus>;
};
