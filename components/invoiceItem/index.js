import { Container, Id, Text, Total, Status } from "./style/invoiceItem";

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
InvoiceItem.Status = function InvoiceStatus({ status, children, ...rest }) {
    return (
        <Status status={status} {...rest}>
            {children}
        </Status>
    );
};
