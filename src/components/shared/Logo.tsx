import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <section>
      <Image src={"/icons/Logo.png"} alt="Logo" height={76} width={154.5} />
    </section>
  );
};

export default Logo;
