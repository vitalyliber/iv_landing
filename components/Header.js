import React from "react";
import { Heading } from "@chakra-ui/core";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <Heading>iv</Heading>
      <Heading mt={2} mb={3} size="md">
        Irregular Verbs
      </Heading>
      <div className="image">
        <Image
          width={100}
          height={100}
          src="/logo.png"
          alt="iv. Irregular Verbs Logo"
        />
      </div>
      <style jsx>{`
        .image {
          width: 100px;
          height: 100px;
          border-radius: 10px;
          overflow: hidden;
        }
      `}</style>{" "}
    </>
  );
};

export default Header;
