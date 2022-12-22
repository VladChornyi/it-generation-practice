import React from "react";
import { Dna } from "react-loader-spinner";

export default function Loader({ size, wrapperClass }) {
  return (
    <>
      <Dna
        visible={true}
        height={size}
        width={size}
        ariaLabel="dna-loading"
        wrapperClass={wrapperClass}
      />
    </>
  );
}
