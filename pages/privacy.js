import Meta from "../components/Meta";
import { Heading, Text, Flex, Box } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <Box mt={4} maxWidth={700} paddingX={6}>
        <Meta />
        <Heading mt={4} mb={4}>
          Privacy Policy
        </Heading>
        <Text mb={4}>Last updated: Nov 5, 2020</Text>
        <Text mb={4}>
          Vitalii Liber ("us", "we", or "our") operates the IV mobile
          application (the "Service"). This page informs you of our policies
          regarding the collection, use and disclosure of Personal Information
          when you use our Service.
        </Text>
        <Text mb={4}>
          We will not use or share your information with anyone except as
          described in this Privacy Policy.
        </Text>
        <Text mb={4}>
          We use your Personal Information for providing and improving the
          Service. By using the Service, you agree to the collection and use of
          information in accordance with this policy. Unless otherwise defined
          in this Privacy Policy, terms used in this Privacy Policy have the
          same meanings as in our Terms and Conditions.
        </Text>
        <Heading mt={4} mb={4}>
          Information Collection And Use
        </Heading>
        <Text mb={4}>
          While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used for only to
          identify you and for only to manage auto-renewable subscriptions.
        </Text>
        <Heading mt={4} mb={4}>
          Log Data
        </Heading>
        <Text mb={4}>
          When you access the Service by or through a mobile device, we may
          collect certain information automatically, including, but not limited
          to, the type of mobile device you use, your mobile device unique ID,
          the IP address of your mobile device, your mobile operating system,
          the type of mobile Internet browser you use and other statistics ("Log
          Data"). In addition, we may use third party services such as Facebook
          Bussiness that collect, monitor and analyze this type of information
          in order to increase our Service's functionality. These third party
          service providers have their own privacy policies addressing how they
          use such information.
        </Text>
        <Heading mt={4} mb={4}>
          Cookies
        </Heading>
        <Text mb={4}>We don't use "cookies" to collect information.</Text>
        <Heading mt={4} mb={4}>
          Security
        </Heading>
        <Text mb={4}>
          The security of your Personal Information is important to us, but
          remember that no method of transmission over the Internet, or method
          of electronic storage is 100% secure. While we strive to use
          commercially acceptable means to protect your Personal Information, we
          cannot guarantee its absolute security.
        </Text>
        <Heading mt={4} mb={4}>
          Confidentiality & Security
        </Heading>
        <Text mb={4}>
          We shall take measures to protect personal data using reasonable and
          industry standard security safeguards against loss or theft, as well
          as unauthorised access, disclosure, copying, improper use or
          modification.
        </Text>
        <Heading mt={4} mb={4}>
          Changes To This Privacy Policy
        </Heading>
        <Text mb={4}>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. You are
          advised to review this Privacy Policy periodically for any changes.
          Changes to this Privacy Policy are effective when they are posted on
          this page.
        </Text>
        <Heading mt={4} mb={4}>
          Contact Us
        </Heading>
        <Text mb={4}>
          If you have any questions about this Privacy Policy, please contact
          us.
        </Text>
      </Box>
    </Flex>
  );
}
