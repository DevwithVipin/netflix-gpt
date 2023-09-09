import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log("user not found",user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  
    return (
      <>
            <div  className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between"></div>
        
          <img
        className="w-44"
        src={ LOGO}
        alt="logo"
      />
       {user && (
        <div className="flex p-2">
          <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white size-10 ">
            (Sign Out)
          </button>
        </div>
      )}
       
      </div>
      </>

      
    );
  };
  export default Header;