import { useEffect } from "react";
import { useRouter } from "next/router";

const RegistrationForm = () => {
  const router = useRouter();

  useEffect(() => {
    window.location.href = "https://forms.gle/12da9jrM75JJDCgj7";
  }, []);

  return null;
};

export default RegistrationForm;
