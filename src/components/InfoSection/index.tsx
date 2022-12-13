import { StyledInfoSection } from "./style";
// import logo from "../../assets/img/logo.svg";

interface iLogo {
  img: string;
}
// import { LogoDefaul } from "../Logo/Logo";

export const InfoSection = () => {
  return (
    <StyledInfoSection>
      {/* <LogoDefaul src="../../assets/img/logo.svg" alt="" /> */}
      {/* <img src={logo} /> */}
      <h2>KEnzie burger</h2>

      <div>
        <span>Bag</span>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os melhores
          ingredientes.
        </p>
      </div>
    </StyledInfoSection>
  );
};
