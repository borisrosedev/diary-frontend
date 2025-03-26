import LandingContainer from "../containers/landing/Landing.container";
import LoginContainer from "../containers/login/Login.container";
import landingPage from "../ui/pages/landing/landing.page";
import loginPage from "../ui/pages/login/login.page";

enum Paths {
    Landing = "",
    Login = "#login",
}


const routes = {
    landing: {
        path: Paths.Landing,
        business: LandingContainer,
        ui: landingPage

    },
    login: {
        path: Paths.Login,
        business: LoginContainer,
        ui: loginPage

    }
};

export default routes;