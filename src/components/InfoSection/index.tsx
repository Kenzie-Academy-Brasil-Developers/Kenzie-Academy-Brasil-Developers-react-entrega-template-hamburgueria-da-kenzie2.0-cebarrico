import { StyledInfoSection } from "./style";
import logo from "../../assets/img/logo.svg";
import bag from "../../assets/img/bag.svg";

interface iLogo {
  img: string;
}
// import { LogoDefaul } from "../Logo/Logo";

export const InfoSection = () => {
  return (
    <StyledInfoSection>
      {/* <LogoDefaul src="../../assets/img/logo.svg" alt="" /> */}
      <img src={logo} />

      <div>
        <img className="bag" src={bag} />

        <p>
          A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
          ingredientes.
        </p>
      </div>
    </StyledInfoSection>
  );
};
