import Meta from "../components/Meta";
import { Heading, Text, Flex, Box } from "@chakra-ui/core";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <Flex justifyContent="center">
      <Head>
        <title>Terms of Use</title>
      </Head>
      <Box mt={4} maxWidth={700} paddingX={6}>
        <Meta />
        <Heading mt={4} mb={4}>Terms of Use</Heading>
        <Text mb={4}>Last updated: Nov 5, 2020</Text>
        <Text mb={4}>
          These Terms of Use (“Terms”) apply to your access and use of our
          applications (“Service”) provided by IV. Irregular Verbs.(“Irregular
          Verbs” or “IV”). By downloading IV mobile application, you agree to
          these Terms. If you do not agree to these Terms, do not access or use
          our Services.
        </Text>
        <Text mb={4}>
          If you have any questions about these Terms or our Services, please
          contact us at vitalii.liber@icloud.com
        </Text>
        <Heading mt={4} mb={4}>Description of Services</Heading>
        <Text mb={4}>
          IV is an application based software that uses own data base of the
          words and phrases for learning foreign languages. All content is
          original.
        </Text>
        <Heading mt={4} mb={4}>Eligibility</Heading>
        <Text mb={4}>
          You must be at least 6 years of age to access or use our Services.
          Service content does not have swear words and phrases. If you are
          accessing or using our Services on behalf of another person or entity,
          you represent that you are authorized to accept these Terms on that
          person or entity’s behalf and that the person or entity agrees to be
          responsible to us if you or the other person or entity violates these
          Terms.
        </Text>
        <Heading mt={4} mb={4}>Intellectual Property</Heading>
        <Text mb={4}>
          The Service and its original content (excluding Content provided by
          users), features and functionality are and will remain the exclusive
          property of Vitalii Liber and its licensors. The Service is protected
          by copyright. Our trademarks and trade dress may not be used in
          connection with any product or service without the prior written
          consent of Vitalii Liber. Our Service may contain links to third-party
          web sites or services.
        </Text>
        <Heading mt={4} mb={4}>Changes</Heading>
        <Text mb={4}>
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time. If a revision is material we will try to
          provide at least 30 days notice prior to any new terms taking effect.
          What constitutes a material change will be determined at our sole
          discretion. By continuing to access or use our Service after those
          revisions become effective, you agree to be bound by the revised
          terms. If you do not agree to the new terms, please stop using the
          Service.
        </Text>
        <Heading mt={4} mb={4}>Contact Us</Heading>
        <Text mb={4}>
          If you have any questions about these Terms, please contact us.
          vitalii.liber@icloud.com
        </Text>
      </Box>
    </Flex>
  );
}
