import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
// import { auth } from "../src/firebase/firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);
  const showToast = useShowToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-info");
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return { error, isLoggingOut, handleSignOut };
};

export default useLogout;
