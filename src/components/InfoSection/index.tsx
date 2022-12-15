import { StyledInfoSection } from "./style";
import logo from "../../assets/img/logo.svg";
import bag from "../../assets/img/bag.svg";
import { LogoDefaul } from "../Logo/Logo";

export const InfoSection = () => {
  return (
    <StyledInfoSection>
      <LogoDefaul src={logo} alt="" />

      <div>
        <img className="bag" src={bag} alt={"icone sacola"} />

        <p>
          A vida é como um sanduíche, é preciso recheá-la com os <b>melhores</b>{" "}
          ingredientes.
        </p>
      </div>
    </StyledInfoSection>
  );
};
