import { Container, Wrapper, ItemWrap, ItemDetailWrap, AmountWrap, Title, BlackText, GreyText, AmountDue } from "./styles/calculate";

export default function Calculate({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

Calculate.Wrapper = function CalculateWrapper({ children, ...rest }) {
    return <Wrapper {...rest}>{children}</Wrapper>;
};
Calculate.ItemWrap = function CalculateItemWrap({ children, ...rest }) {
    return <ItemWrap {...rest}>{children}</ItemWrap>;
};
Calculate.ItemDetailWrap = function CalculateItemDetailWrap({ children, ...rest }) {
    return <ItemDetailWrap {...rest}>{children}</ItemDetailWrap>;
};
Calculate.AmountWrap = function CalculateAmountWrap({ children, ...rest }) {
    return <AmountWrap {...rest}>{children}</AmountWrap>;
};
Calculate.Title = function CalculateTitle({ children, ...rest }) {
    return <Title {...rest}>{children}</Title>;
};

Calculate.BlackText = function CalculateBlackText({ children, ...rest }) {
    return <BlackText {...rest}>{children}</BlackText>;
};

Calculate.GreyText = function CalculateGreyText({ children, ...rest }) {
    return <GreyText {...rest}>{children}</GreyText>;
};

Calculate.AmountDue = function CalculateAmountDue({ children, ...rest }) {
    return <AmountDue {...rest}>{children}</AmountDue>;
};
