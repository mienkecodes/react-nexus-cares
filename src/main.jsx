// Import Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AuthProvider } from "./components/AuthProvider"

// Import Components
import NavBar from "./components/NavBar.jsx";
import TestNavBar from "./components/TestNavbar.jsx"

// Import Pages
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";

import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NewUserPage from "./pages/NewUserPage.jsx";
import NewProjectPage from "./pages/NewProjectPage.jsx";
import NewPledgePage from "./pages/NewPledgePage.jsx";
import TestNavBarPage from "./pages/TestNavbarPage.jsx"

// import UserPage from "./pages/UserProfilePage/UserProfilePage.jsx";
// import ProjectUpdatePage from "./pages/ProjectUpdatePage/ProjectUpdatePage.jsx";
// import UserUpdatePage from "./pages/UserUpdatePage/UserUpdatePage.jsx";
// import PledgeUpdatePage from "./pages/PledgeUpdatePage/PledgeUpdatePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    //can change element here to change navbar style
  //  element: <NavBar />,
  element: <TestNavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      // { path: "/update/project/:id", element: <ProjectUpdatePage /> },


      { path: "/login", element: <LoginPage/> },
      { path: "/logout", element: <LogoutPage/> },

      { path: "/about", element: <AboutPage/> },
      { path: "/contact", element: <ContactPage />},
      { path: "/create-account", element: <NewUserPage />},
      { path: "/new-project", element: <NewProjectPage />},
      { path: "/pledges", element: <NewPledgePage />},
      // { path: "/update/project/:id", element: <ProjectUpdatePage /> },
      // { path: "/profile", element: <UserPage />},
      // { path: "/profile/update", element: <UserUpdatePage />},

      //delete this test navbar if you dont like it!
      {path: "/testnavbar", element: <TestNavBarPage />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    {/* <AuthProvider> */}
      <RouterProvider router={router} />
    {/* </AuthProvider> */}
  </React.StrictMode>
);
