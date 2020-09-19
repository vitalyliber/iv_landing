import React from "react";
import { Heading, Image } from "@chakra-ui/core";

const Header = () => {
  return (
    <>
      <Heading>iv</Heading>
      <Heading mt={2} mb={3} size="md">
        Irregular Verbs
      </Heading>
      <div
        className="image"
      >
        <Image
          width="100px"
          height="100px"
          src="/logo.png"
          alt="iv. Irregular Verbs Logo"
        />
      </div>

      <style jsx>{`
        .image {
          border-radius: 10px;
          overflow: hidden;
        }
      `}</style>    </>
  );
};

export default Header;
