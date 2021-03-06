import Heading from "@govuk-react/heading";
import Breadcrumbs from "@govuk-react/breadcrumbs";
import TopNav, { asNavLinkAnchor } from "@govuk-react/top-nav";
import { Link } from "react-router-dom";
import Page from "@govuk-react/page";

// Our components
import LoginButton from "../components/LoginButton";

const NavLink = asNavLinkAnchor(Link);

const LoginPage = (props) => (
  <>
    <Page
      header={
        <TopNav serviceTitle="HMRC-HR">
          <NavLink to={"/"}>Sign in</NavLink>
          <NavLink to={"#"}>About</NavLink>
        </TopNav>
      }
      beforeChildren={
        <Breadcrumbs>
          <Breadcrumbs.Link href="/">HMRC-HR</Breadcrumbs.Link>
          Login
        </Breadcrumbs>
      }
    >
      <Heading>Login</Heading>
      <LoginButton />
    </Page>
  </>
);

export default LoginPage;
