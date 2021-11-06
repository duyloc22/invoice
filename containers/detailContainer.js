import React from "react";
import { Detail, Calculate, Invoices } from "../components";
import Image from "next/image";

function detailContainer({ invoice }) {
    let currencyFormat = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
    });

    return (
        <Detail>
            {/* <Detail.Wrapper>
                <Image src="/assets/icon-arrow-left.svg" alt="arrow-left" width={10} height={10} />
                <Detail.Text>Go back</Detail.Text>
            </Detail.Wrapper> */}
            <div>
                <Detail.SpaceBetween>
                    <div>
                        <Detail.Title>{invoice.id}</Detail.Title>
                        <Detail.Text>{invoice.description}</Detail.Text>
                    </div>
                    <Detail.AddressFrom>
                        <Detail.SmallText>{invoice.senderAddress.street}</Detail.SmallText>
                        <Detail.SmallText>{invoice.senderAddress.city}</Detail.SmallText>
                        <Detail.SmallText>{invoice.senderAddress.postCode}</Detail.SmallText>
                        <Detail.SmallText>{invoice.senderAddress.country}</Detail.SmallText>
                    </Detail.AddressFrom>
                </Detail.SpaceBetween>
                <Detail.SpaceBetween>
                    <Detail.SpaceBetween>
                        <Detail.SpaceBetween date>
                            <div>
                                <Detail.Text>Invoice Date</Detail.Text>
                                <Detail.SmallTitle>{invoice.createdAt}</Detail.SmallTitle>
                            </div>
                            <div>
                                <Detail.Text>Payment Due</Detail.Text>
                                <Detail.SmallTitle>{invoice.paymentDue}</Detail.SmallTitle>
                            </div>
                        </Detail.SpaceBetween>
                        <Detail.ClientInfo>
                            <Detail.Text>Bill To</Detail.Text>
                            <Detail.SmallTitle>{invoice.clientName}</Detail.SmallTitle>
                            <Detail.SmallText>{invoice.clientAddress.street}</Detail.SmallText>
                            <Detail.SmallText>{invoice.clientAddress.city}</Detail.SmallText>
                            <Detail.SmallText>{invoice.clientAddress.postCode}</Detail.SmallText>
                            <Detail.SmallText>{invoice.clientAddress.country}</Detail.SmallText>
                        </Detail.ClientInfo>
                    </Detail.SpaceBetween>
                    <Detail.ClientInfo>
                        <Detail.Text>Send To</Detail.Text>
                        <Detail.SmallTitle>{invoice.clientEmail}</Detail.SmallTitle>
                    </Detail.ClientInfo>
                </Detail.SpaceBetween>
            </div>
            <Calculate>
                <Calculate.Wrapper>
                    <Calculate.ItemWrap>
                        <Calculate.Title>Item Name</Calculate.Title>
                        <Calculate.ItemDetailWrap>
                            <Calculate.Title>QTY.</Calculate.Title>
                            <Calculate.Title>Price</Calculate.Title>
                            <Calculate.Title>Total</Calculate.Title>
                        </Calculate.ItemDetailWrap>
                    </Calculate.ItemWrap>
                    <>
                        {invoice.items.map((item) => {
                            return (
                                <Calculate.ItemWrap key={item.name}>
                                    <Calculate.BlackText>{item.name}</Calculate.BlackText>
                                    <Calculate.ItemDetailWrap>
                                        <Calculate.GreyText>{item.quantity}</Calculate.GreyText>
                                        <Calculate.GreyText>{currencyFormat.format(item.price).replace(/^(\D+)/, "$1 ")}</Calculate.GreyText>
                                        <Calculate.BlackText>{currencyFormat.format(item.total).replace(/^(\D+)/, "$1 ")}</Calculate.BlackText>
                                    </Calculate.ItemDetailWrap>
                                </Calculate.ItemWrap>
                            );
                        })}
                    </>
                </Calculate.Wrapper>
                <Calculate.AmountWrap>
                    <Calculate.Title amount>Amount Due</Calculate.Title>
                    <Calculate.AmountDue>{currencyFormat.format(invoice.total).replace(/^(\D+)/, "$1 ")}</Calculate.AmountDue>
                </Calculate.AmountWrap>
            </Calculate>
        </Detail>
    );
}

export default detailContainer;
