import Header from "../components/Header";
import Formlogin from "../components/FormLogin"

function LoginPage() {
  return (
    <div className="w-screen h-screen flex flex-col bg-[#e0e0e0]">
      <Header />
      <Formlogin />
    </div>
  );
}

export default LoginPage;
