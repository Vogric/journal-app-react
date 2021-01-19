import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { AuthRouter } from "./AuthRouter";
import { firebase } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { login } from "../actions/auth";
import { Loading } from "../components/ui/Loading";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { startLoadingNotes } from "../actions/notes";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLogged(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLogged(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLogged]);

  if (checking) {
    return <Loading />;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          isAuthenticated={isLogged}
          path="/auth"
          component={AuthRouter}
        />
        <PrivateRoute
          isAuthenticated={isLogged}
          exact
          path="/"
          component={JournalScreen}
        />
        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
