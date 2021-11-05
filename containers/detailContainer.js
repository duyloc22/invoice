import React from "react";
import { Detail } from "../components";
import Image from "next/image";

function detailContainer({ invoice }) {
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
        </Detail>
    );
}

export default detailContainer;
