import Head from "next/head";
import Image from "next/image";
import { InvoiceList, SideNav } from "../containers";
import { Invoices } from "../components";

export default function Home() {
    return (
        <Invoices>
            <SideNav />
            <Invoices.Wrapper>
                <div>
                    <Invoices.Title>Invoices</Invoices.Title>
                    <Invoices.SubTitle>There are 7 invoices</Invoices.SubTitle>
                </div>
                <div>
                    <Invoices.Button>
                        <Invoices.Plus>+</Invoices.Plus> New Invoice
                    </Invoices.Button>
                </div>
            </Invoices.Wrapper>
            <Invoices.ListWrap>
                <InvoiceList />
            </Invoices.ListWrap>
        </Invoices>
    );
}
