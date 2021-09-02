import React from "react";
import Image from "next/image";
import { Link, Text } from "@chakra-ui/core";

const Download = () => {
  return (
    <>
      <Text mt={12} mb={4}>
        Get the app.
      </Text>
      <Link
        href="https://apps.apple.com/us/app/iv-irregular-verbs/id1531830827"
        target="_blank"
      >
        <Image
          mb={2}
          width={150}
          height={45}
          src="/ios_download.png"
        />
      </Link>
    </>
  );
};

export default Download;
