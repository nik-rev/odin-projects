import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";

const useStatus = () => {
  const [error, setError] = useState<undefined | string>("");
  const [success, setSuccess] = useState<undefined | string>("");
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  return {
    startTransition,
    searchParams,
    setSuccess,
    isPending,
    setError,
    success,
    error,
  };
};

export default useStatus;
