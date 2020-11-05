import React from "react";
import Head from "next/head";

const Meta = () => {
  const title = "Irregular Verbs App";
  const desc = "Learn english using push notifications";
  return (
    <Head>
      <title>{title}</title>
      <meta name="Description" content={desc} />
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://iv.casply.com/favicon.png"
      />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="https://iv.casply.com/favicon.png"
      />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:image"
        content="https://iv.casply.com/twitter-card.png"
      />
    </Head>
  );
};

export default Meta;
