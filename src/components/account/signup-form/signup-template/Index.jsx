// import BriefNote from "../../ ../account/briefNote/Index";
import BriefNote from "../../briefNote/Index";
import SignupForm from "../Index";

function SignupTemplate() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div className=" w-full grid md:grid-flow-col">
        <BriefNote />
        <SignupForm />
      </div>
    </>
  );
}

export default SignupTemplate;
