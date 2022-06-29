import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Redirect404 = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  });

  return null;
};

export default Redirect404;
