import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useStore } from "../utils/appStore";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

// Protected route component
const ProtectedRoute = ({ children }) => {
  const { SignedIn } = useStore();
  return SignedIn ? children : <Navigate to="/" replace />;
};

// Authentication wrapper component
const AuthRoute = ({ children }) => {
  const { SignedIn } = useStore();
  return SignedIn ? <Navigate to="/browse" replace /> : children;
};

const Body = () => {
  const { addUser, removeUser, toggleSignedIn } = useStore();
  const [isAuthReady, setIsAuthReady] = useState(false);

  // Create router with protected routes
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <AuthRoute>
          <Login />
        </AuthRoute>
      ),
    },
    {
      path: "/browse",
      element: (
        <ProtectedRoute>
          <Browse />
        </ProtectedRoute>
      ),
    },
  ]);

  // Handle authentication state changes centrally
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        addUser(displayName, email, uid);
        toggleSignedIn(true);
      } else {
        removeUser();
        toggleSignedIn(false);
      }
      // Mark authentication as initialized
      setIsAuthReady(true);
    });

    return () => unsubscribe();
  }, [addUser, removeUser, toggleSignedIn]);

  // Show loading until auth is ready
  if (!isAuthReady) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
