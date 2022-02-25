import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NewCallArrived from '../NewCallArrived/NewCallArrived';
import MobileCallReviewPage from '../MobileCallReviewPage/MobileCallReviewPage';
import SelectMode from '../SelectMode/SelectMode';
import MainMenu from '../MainMenu/MainMenu';
import TreatmentPage from '../TreatmentPage/TreatmentPage';
import TreatmentReview from '../TreatmentReview/TreatmentReview';
import Customize from '../Customize/Customize';
import './App.css';
import MobileRunDetailsPage from '../MobileRunDetailsPage/MobileRunDetailsPage';
import { RootState } from '../../redux/reducers/_root.reducer';
import { User } from '../../redux/types/types';

function App() {
  const dispatch = useDispatch();

  const user: User = useSelector((store: RootState) => store.user);

  const theme = createTheme({
    palette: {
      primary: {
        main: '#7f5539',
      }
    }
  })

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
    dispatch({ type: 'FETCH_CURRENT_RUN' });
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      {/* <div className='bg-img'>
        <img src='shutterstock_1258334020.eps' alt="Star of Life" />
        </div> */}
      <Router>
        <div>
          <Nav />
          {/* <img id='bg-img' src='Star_of_life2.png' alt="Star of Life" /> */}
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>
            <Route
              exact
              path="/newCall"
            >
              <NewCallArrived />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/user"
              component={SelectMode}
            >
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            >
            </ProtectedRoute>

            <Route
              exact
              path="/login"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect to the /user page
                <Redirect to="/" />
                :
                // Otherwise, show the login page
                <LoginPage />
              }
            </Route>
            <ProtectedRoute
              exact
              path='/mobileReview'
              component={MobileCallReviewPage}
            >
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path='/select'
              component={SelectMode}
            >
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path='/mainMenu'
              component={MainMenu}
            >
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path='/treatmentPage/:category'
              component={TreatmentPage}
            >
              </ProtectedRoute>
            <ProtectedRoute
              exact
              path='/mobileReview/:run'
              component={MobileRunDetailsPage}
              >
            </ProtectedRoute>
            <ProtectedRoute
              exact
              path='/treatmentReview/:id'
              component={TreatmentReview}
              >
              </ProtectedRoute>
            <ProtectedRoute
              exact
              path='/customize'
              component={Customize}>
              {/* <Customize /> */}
            </ProtectedRoute>

            <Route
              exact
              path="/registration"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the registration page
                <RegisterPage />
              }
            </Route>

            <Route
              exact
              path="/home"
            >
              {user.id ?
                // If the user is already logged in, 
                // redirect them to the /user page
                <Redirect to="/user" />
                :
                // Otherwise, show the Landing page
                <LandingPage />
              }
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
