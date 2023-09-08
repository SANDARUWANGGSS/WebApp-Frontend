import Logo from "../../assets/images/logo.png";

export default function FormLogo() {
  return (
    <div className="text-center">
      <img src={Logo} alt="logo" height={50} className="mb-3" />
    </div>
  );
}
