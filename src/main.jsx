// Import Modules
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import Components
import NavBar from "./components/NavBar.jsx";

// Import Pages
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage-original.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import NewUserPage from "./pages/NewUserPage.jsx";
import NewProjectPage from "./pages/NewProjectPage.jsx";
import NewPledgePage from "./pages/NewPledgePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/login", element: <LoginPage/> },
      { path: "/about", element: <AboutPage/> },
      { path: "/contact", element: <ContactPage />},
      { path: "/create-account", element: <NewUserPage />},
      { path: "/new-project", element: <NewProjectPage />},
      { path: "/pledges", element: <NewPledgePage />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Here we wrap our app in the router provider so they render */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
