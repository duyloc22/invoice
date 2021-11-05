import React from "react";
import { DetailContainer, SideNav } from "../containers";
import invoices from "../data.json";

function invoice({ invoice }) {
    return (
        <>
            <DetailContainer invoice={invoice} />
            <SideNav />
        </>
    );
}

export default invoice;

export async function getStaticProps(context) {
    const invoice = invoices.find((invoice) => invoice.id == context.params.invoice);
    return {
        props: {
            invoice,
        },
    };
}

export async function getStaticPaths() {
    const paths = invoices.map((invoice) => ({
        params: { invoice: invoice.id },
    }));

    return { paths, fallback: false };
}
