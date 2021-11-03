import React from "react";
import invoices from "../data.json";
import { InvoiceItem, SideNav } from "../components";
import Image from "next/image";

function invoiceList() {
    let currencyFormat = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });
    invoices = [];
    if (invoices.length == 0) {
        return (
            <InvoiceItem.SVGWrap>
                <Image src="/assets/illustration-empty.svg" alt="empty" height={300} width={300} />
                <InvoiceItem.Title>There is nothing here</InvoiceItem.Title>
                <InvoiceItem.SubTitle>
                    Create an invoice by clicking the <InvoiceItem.SSpan>New Invoice</InvoiceItem.SSpan> button and get started
                </InvoiceItem.SubTitle>
            </InvoiceItem.SVGWrap>
        );
    }
    return (
        <>
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
        </>
    );
}

export default invoiceList;
