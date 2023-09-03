import React, { useEffect, useCallback } from "react";

const AllScrollLock= React.memo(() => {
  useEffect(() => {
    document.addEventListener("touchmove", scrollNo, { passive: false });

    return () => {
      document.removeEventListener("touchmove", scrollNo);
    };
  }, []);
  const scrollNo = useCallback((e: { preventDefault: () => void; }) => {
    e.preventDefault();
  }, []);

  return <></>;
});

export default AllScrollLock;
