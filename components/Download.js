import React from "react";
import { Image, Link, Text } from "@chakra-ui/core";

const Download = () => {
  return (
    <>
      <Text mt={12} mb={4}>
        Get the app.
      </Text>
      <Link href="https://apps.apple.com/us/app/iv-irregular-verbs/id1531830827" target="_blank">
        <Image
          mb={2}
          objectFit="contain"
          width="150px"
          height="45px"
          src="/ios_download.png"
        />
      </Link>
      <Link href="https://play.google.com/store/apps/details?id=com.casply.irregular" target="_blank">
        <Image objectFit="contain" width="150px" src="/android_download.png" />
      </Link>
    </>
  );
};

export default Download;
