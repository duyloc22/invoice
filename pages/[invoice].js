import React from "react";
import detailContainer from "../containers/detailContainer";
import invoices from "../data.json";

function invoice({ invoice }) {
    console.log(invoice);
    return (
        <div>
            {/* <detailContainer /> */}
            <h2>hello</h2>
        </div>
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
