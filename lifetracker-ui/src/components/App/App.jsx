import * as React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import apiClient from "../services/apiClient"
import Navbar from 'components/Navbar/Navbar'
import LandingPage from '../LandingPage/LandingPage'
import LoginPage from '../LoginPage/LoginPage'
import RegistrationPage from 'components/RegistrationPage/RegistrationPage'
import ActivityPage from 'components/ActivityPage/ActivityPage'
import ExercisePage from 'components/ExercisePage/ExercisePage'
import Nutrition from 'components/NutritionPage/NutritionPage'
import SleepPage from 'components/SleepPage/SleepPage'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'

import NutritionNew from 'components/NutritionNew/NutritionNew'
import { AuthContextProvider, useAuthContext } from 'components/contexts/auth'
import NotFound from 'components/NotFound/NotFound'

export default function AppContainer() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  )
}

function App() {
  const { appState, setAppState, loggedIn, setIsLoggedIn} = useAuthContext()
  
  console.log("appStateApp",appState)

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setAppState({})
    setIsLoggedIn(false)
  
  }


  console.log("App",appState)
  return (
    <div className="app">
      <React.Fragment>
        <BrowserRouter>
          <main>
            <Navbar handleLogout={handleLogout} loggedIn={loggedIn} />
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route
                path="/login"
                element={
                  <LoginPage setAppState={setAppState} appState={appState} />
                }
              ></Route>
              <Route
                path="/register"
                element={
                  <RegistrationPage setAppState={setAppState} appState={appState}/>
                }
              />
              <Route
                path="/activity"
                element={
                  <ProtectedRoute
                    element={<ActivityPage setAppState={setAppState} appState={appState} user={appState?.user}/> }/>
                }
              ></Route>
              <Route
                path="/exercise"
                element={
                  <ProtectedRoute
                    element={<ExercisePage appState={appState} />}
                  />
                }
              ></Route>
              <Route
                path="/nutrition"
                element={
                  <ProtectedRoute element={<Nutrition appState={appState} />} />
                }
              ></Route>
              <Route
                path="/sleep"
                element={
                  <ProtectedRoute element={<SleepPage appState={appState} />} />
                }
              ></Route>
              <Route
                path="/nutrition/create"
                element={
                  <ProtectedRoute
                    element={<NutritionNew  setAppState={setAppState}  appState={appState} />}/>
                }
              ></Route>
              <Route path='*' element={<NotFound/>}>
              
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </React.Fragment>
    </div>
  )
}
