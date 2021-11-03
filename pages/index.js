import Head from "next/head";
import Image from "next/image";
import { InvoiceList, SideNav } from "../containers";
import { Invoices } from "../components";
import data from "../data.json";

export default function Home({ invoices }) {
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
                        <Invoices.Plus>
                            <Image src="/assets/icon-plus.svg" alt="plus" width={10} height={10} />
                        </Invoices.Plus>
                        New Invoice
                    </Invoices.Button>
                </div>
            </Invoices.Wrapper>
            <Invoices.ListWrap>
                <InvoiceList invoices={invoices} />
            </Invoices.ListWrap>
        </Invoices>
    );
}

export async function getStaticProps() {
    return {
        props: {
            invoices: data,
        },
    };
}
