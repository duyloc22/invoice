import { Container, Id, Text, Total, Status, SVGWrap, Title, SubTitle, SSpan } from "./style/invoiceItem";

export default function InvoiceItem({ children, ...rest }) {
    return <Container {...rest}>{children}</Container>;
}

InvoiceItem.Id = function InvoiceId({ children, ...rest }) {
    return <Id {...rest}>{children}</Id>;
};
InvoiceItem.Text = function InvoiceText({ children, ...rest }) {
    return <Text {...rest}>{children}</Text>;
};
InvoiceItem.Total = function InvoiceTotal({ children, ...rest }) {
    return <Total {...rest}>{children}</Total>;
};
InvoiceItem.SVGWrap = function InvoiceSVGWrap({ children, ...rest }) {
    return <SVGWrap {...rest}>{children}</SVGWrap>;
};
InvoiceItem.Status = function InvoiceStatus({ status, children, ...rest }) {
    return (
        <Status status={status} {...rest}>
            {children}
        </Status>
    );
};

InvoiceItem.Title = function InvoiceTitle({ children, ...rest }) {
    return <Title {...rest}>{children}</Title>;
};
InvoiceItem.SubTitle = function InvoiceSubTitle({ children, ...rest }) {
    return <SubTitle {...rest}>{children}</SubTitle>;
};
InvoiceItem.SSpan = function InvoiceSSpan({ children, ...rest }) {
    return <SSpan {...rest}>{children}</SSpan>;
};
