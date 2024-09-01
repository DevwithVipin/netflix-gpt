import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";
import { auth } from "../utils/firebase";
import { toggleGptSearchView } from "../utils/gptSlice";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => { })
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }



  return (
    <div className="absolute bg-fixed w-screen px-8 cs:px-2  bg-gradient-to-b from-black z-10 flex flex-col md:flex-row md:justify-between top-0 abosolute ">
      <img className="w-44 mx-auto md:mx-0 cs:w-[20%] cs:h-[50%] z-20 p-2 m-6" src={LOGO} alt="logo" />
      {user && (
        <div className="  flex p-10 justify-between absolute w-[100%]  top-0 ">
          <div>
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white cs:text-[10px]"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
          </div>


          <div className="w-[20%] flex justify-between right-0"><button className="py-2 cs:px-0 -py-2 rounded-lg mx-4 bg-purple-500 cs:w-[30%] cs:h-[40%]  cs:text-[10px] mr-5" onClick={handleGptSearchClick}>
            {showGptSearch ? "Homepage" : "GptSearch"}
          </button>

            <img
              className="cs:invisible rounded-lg md:block w-12 h-12 cs:w-[10%] cs:h-[30%] translate-[100%]"
              alt="usericon"
              src={user?.photoURL}
            />

            <button onClick={handleSignOut} className="font-bold text-white  cs:text-[10px]">

              (Sign Out)
            </button></div>

        </div>
      )}
    </div>
  );
};
export default Header;
