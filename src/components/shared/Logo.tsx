import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <>
      <Link href={"/"}>
        <Image src={"/icons/Logo.png"} alt="Logo" height={76} width={154.5} />
      </Link>
    </>
  );
};

export default Logo;
