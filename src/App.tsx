import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Highlights from "./views/Highlights";
import Home from "./views/Home";
import Query from "./views/Query";
import CustomerList from "./views/customerList/CustomerList";
import CustomerDetails from "./views/customerDetails";
import Signup from "./views/authentication/Signup";
import Login from "./views/authentication/Login";
import { TOKEN } from "./constants/authentication";
import PageNotFound from "./views/authentication/PageNotFound";
import WorkFlow from "./views/WorkFlow";
import Settings from "./views/settings";
import MultiFormStepper from "./views/FromSteper";
import Agreement from "./views/agreement";
import NewAgreement from "./views/agreement/NewAgreement";

const App = (): JSX.Element => {
  const PrivateRoute = ({ children }: any) => {
    const userKey = localStorage.getItem(TOKEN);
    return userKey ? children : <Navigate to="/login" />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<MultiFormStepper />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path="/query"
            element={
              <PrivateRoute>
                <Query />
              </PrivateRoute>
            }
          />
          <Route
            path="/customers"
            element={
              <PrivateRoute>
                <CustomerList />
              </PrivateRoute>
            }
          />
          <Route
            path="/customer/:id"
            element={
              <PrivateRoute>
                <CustomerDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/highlights"
            element={
              <PrivateRoute>
                <Highlights />
              </PrivateRoute>
            }
          />
          <Route
            path="/workflow"
            element={
              <PrivateRoute>
                <WorkFlow />
              </PrivateRoute>
            }
          />
          <Route
            path="/agreements"
            element={
              <PrivateRoute>
                <Agreement />
              </PrivateRoute>
            }
          />
          <Route
            path="/agreements/:new"
            element={
              <PrivateRoute>
                <NewAgreement />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
