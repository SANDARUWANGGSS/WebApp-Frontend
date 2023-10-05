import Logo from "../../assets/images/LogoSide.png";

export default function FormLogo() {
  return (
    <div className="text-center">
      <img src={Logo} alt="logo" height={100} className="mb-3" />
    </div>
  );
}
