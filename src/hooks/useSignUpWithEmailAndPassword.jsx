import { auth } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signup = async (inputs) => {
    if (
      !inputs.email ||
      !inputs.password ||
      !inputs.fullName ||
      !inputs.username
    ) {
      console.log("Please fill all the fields");
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );

      if (!newUser || error) {
        console.log(error);
        return;
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          fullName: inputs.fullName,
          username: inputs.username,
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
      }
    } catch (error) {
      console.error(error);
    }
  };
  return { loading, error, signup };
};

export default useSignUpWithEmailAndPassword;
