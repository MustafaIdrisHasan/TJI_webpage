import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messages from './pages/Messages';
import Settings from './pages/Settings';
import Explore from './pages/Explore';
import Create from './pages/Create';
import TicketChats from './pages/TicketChats';
import GroupChats from './pages/GroupChats';
import Requests from './pages/Requests';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Notifications from './pages/Notifications';
import { NotificationProvider } from './context/NotificationContext';
import './styles/theme.css';
import './styles/neumorphic.css';
import './App.css';

// Temporary auth check (replace with actual auth logic)
const isAuthenticated = () => {
  return localStorage.getItem('user') !== null;
};

// Protected Route wrapper
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return (
    <MainLayout>
      {children}
    </MainLayout>
  );
};

// Auth Route wrapper (for login/signup pages without layout)
const AuthRoute = ({ children }) => {
  if (isAuthenticated()) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="auth-layout">
      {children}
    </div>
  );
};

function App() {
  return (
    <NotificationProvider>
      <Router>
        <div className="app">
          <Routes>
            {/* Auth Routes */}
            <Route path="/login" element={
              <AuthRoute>
                <Login />
              </AuthRoute>
            } />
            <Route path="/signup" element={
              <AuthRoute>
                <SignUp />
              </AuthRoute>
            } />

            {/* Protected Routes with MainLayout */}
            <Route path="/" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/home" element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="/explore" element={
              <ProtectedRoute>
                <Explore />
              </ProtectedRoute>
            } />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } />
            <Route path="/messages" element={
              <ProtectedRoute>
                <Messages />
              </ProtectedRoute>
            } />
            <Route path="/settings" element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            } />
            <Route path="/create" element={
              <ProtectedRoute>
                <Create />
              </ProtectedRoute>
            } />
            <Route path="/ticket-chats" element={
              <ProtectedRoute>
                <TicketChats />
              </ProtectedRoute>
            } />
            <Route path="/group-chats" element={
              <ProtectedRoute>
                <GroupChats />
              </ProtectedRoute>
            } />
            <Route path="/requests" element={
              <ProtectedRoute>
                <Requests />
              </ProtectedRoute>
            } />
            <Route path="/notifications" element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            } />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </NotificationProvider>
  );
}

export default App; 