import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserInfo from "./pages/UserInfo";
import PartnerInfo from "./pages/PartnerInfo";
import Chat from "./pages/Chat";
import { useState } from "react";

function App() {
  // logic
  const [userInfo, setUserInfo] = useState();
  const [partnerInfo, setPartnerInfo] = useState();

  const handlePartnerInfo = (data) => {
    setPartnerInfo(data);
  };

  const handleUserInfo = (data) => {
    setUserInfo(data);
  };

  // view
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/user-info"
          element={<UserInfo handleUserInfo={handleUserInfo} />}
        />
        <Route
          path="/partner-info"
          element={<PartnerInfo handlePartnerInfo={handlePartnerInfo} />}
        />
        <Route
          path="/chat"
          element={<Chat userInfo={userInfo} partnerInfo={partnerInfo} />}
        />
      </Routes>
    </>
  );
}

export default App;
