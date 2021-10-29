import React from "react";
import invoices from "../data.json";
import { InvoiceItem } from "../components";

function invoiceList() {
    let currencyFormat = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    return (
        <div>
            {invoices.map((invoice) => {
                return (
                    <InvoiceItem key={invoice.id}>
                        <InvoiceItem.Id>{invoice.id}</InvoiceItem.Id>
                        <InvoiceItem.Text>Due {invoice.paymentDue}</InvoiceItem.Text>
                        <InvoiceItem.Text>{invoice.clientName}</InvoiceItem.Text>
                        <InvoiceItem.Total>{currencyFormat.format(invoice.total)}</InvoiceItem.Total>
                        <InvoiceItem.Status status={invoice.status}>&#9679; {invoice.status}</InvoiceItem.Status>
                        <InvoiceItem.Id>&gt;</InvoiceItem.Id>
                    </InvoiceItem>
                );
            })}
        </div>
    );
}

export default invoiceList;
