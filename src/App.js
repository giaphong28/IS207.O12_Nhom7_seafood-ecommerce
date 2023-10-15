import 'bulma/css/bulma.css';
import CrabPage from "../src/pages/CrabPage";
import SalmonPage from "./pages/SalmonPage";
import DiscountPage from "../src/pages/DiscountPage";
import FishPage from "./pages/FishPage";
import SaucePage from "./pages/SaucePage";
import HomePape from "./pages/HomePape";
import ReadyToEatPage from "./pages/ReadyToEatPage"
import ClamOysterSnailPage from "../src/pages/ClamOysterSnailPage"
import ShrimpPage from "../src/pages/ShrimpPage"
import SquidPage from "../src/pages/SquidPage";
import SignUpPage from "../src/pages/SignUpPage";
import LogInPage from '../src/pages/LogInPage';

import Route from '../src/components/Route';
import AccountPage from './pages/AccountPage';
import ManageAddress from './pages/ManageAddress';
import ProfileInformation from './pages/ProfileInformation';
import ChangePassword from './pages/ChangePassword';

function App() {
    return (
        <div>
            <div className="">
                <Route path="/">
                    <HomePape />
                </Route>

                <Route path="/signup">
                    <SignUpPage />
                </Route>

                <Route path="/login">
                    <LogInPage />
                </Route>

                <Route path="/account-page">
                    <AccountPage />
                </Route>

                <Route path="/profile-information">
                    <ProfileInformation />
                </Route>

                <Route path="/manage-address">
                    <ManageAddress />
                </Route>

                <Route path="/change-password">
                    <ChangePassword />
                </Route>

                
                
                

                <Route path="/discount">
                    <DiscountPage />
                </Route>

                <Route path="/fish">
                    <FishPage />
                </Route>

                <Route path="/sauce">
                    <SaucePage />
                </Route>

                <Route path="/readytoeat">
                    <ReadyToEatPage />
                </Route>

                <Route path="/salmon">
                    <SalmonPage />
                </Route>

                <Route path="/clam-oyster-snail">
                    <ClamOysterSnailPage />
                </Route>

                <Route path="/crab">
                    <CrabPage />
                </Route>

                <Route path="/shrimp">
                    <ShrimpPage />
                </Route>

                <Route path="/squid">
                    <SquidPage />
                </Route>
            </div>
        </div>
    )
}

export default App;