import React from "react";
import { InvoiceItem, SideNav } from "../components";
import Image from "next/image";
import Link from "next/link";

function invoiceList({ invoices }) {
    let currencyFormat = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });
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
                        <Link href={`/${invoice.id}`}>
                            <a>
                                <Image src="/assets/icon-arrow-right.svg" alt="arrow-right" width={10} height={10} />{" "}
                            </a>
                        </Link>
                    </InvoiceItem>
                );
            })}
        </>
    );
}

export default invoiceList;
