import { Routes, Route } from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./index.css";

import SignupTemplate from "./components/account/signup-form/signup-template/Index";
import CheckMailTemplate from "./components/account/check-email/template/Index";
import VerifyMailTemplate from "./components/account/verifyEmail/template/Index";
import VerifiedMailTemplate from "./components/account/verifiedMail/template/Index";
import AccountTemplate from "./components/account/template/Index";
import NavbarTemplate from "./components/dashboard/navbar/template/Index";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<AccountTemplate />} />
        <Route path="/signup" element={<SignupTemplate />} />
        <Route path="/checkmail" element={<CheckMailTemplate />} />
        <Route path="/verify" element={<VerifyMailTemplate />} />
        <Route path="/signup/verified" element={<VerifiedMailTemplate />} />
        <Route path="/Dashboard" element={<NavbarTemplate />} />
      </Routes>
    </>
  );
}

export default App;
