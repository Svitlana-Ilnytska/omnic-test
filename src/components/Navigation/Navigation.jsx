import { Link } from "react-router-dom";

import { ReactComponent as OmnicLogo } from "../../assets/logo.svg";
import css from "./Navigation.module.scss";

export default function Navigation() {
  return (
    <>
      <nav className={css.navigation}>
        <Link className={css.logo} to="/">
          <OmnicLogo />
        </Link>

        <div className={css.navigationBlock}>
          <Link className={css.navigationDesc} to="/*">
            Інструкція
          </Link>

          <div className={css.currentItem}>Поштомат №1234</div>
        </div>
      </nav>
    </>
  );
}
