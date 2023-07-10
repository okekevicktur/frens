import Signup from "../signup/Index";
import BriefNote from "../briefNote/Index";

function AccountTemplate() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-full grid md:grid-flow-col">
        <BriefNote />
        <Signup />
      </div>
    </>
  );
}

export default AccountTemplate;
