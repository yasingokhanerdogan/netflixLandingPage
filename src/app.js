import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom";
import * as ROUTES from "./constants/routes";
import * as PAGES from "./pages";
import {Helmet} from "react-helmet";

import favicon from "./assets/images/favicon.ico";

const App = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="ReactJS Netflix Project"/>
                <link rel="icon" href={favicon}/>
                <title>ReactJS Netflix Project</title>
            </Helmet>
            <Router>
                <Switch>
                    <Route exact path={ROUTES.HOME} element={<PAGES.Home/>}/>
                    <Route exact path={ROUTES.SIGN_IN} element={<PAGES.SignIn/>}/>
                </Switch>
            </Router>
        </>
    );
}

export default App;
