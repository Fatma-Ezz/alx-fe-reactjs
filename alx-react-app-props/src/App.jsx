import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import ProfilePage from './ProfilePage';  // Correct the path if needed
import UserContext from './UserContext';  // Correct the path if needed

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div>
        <Header />
        <WelcomeMessage />
        <MainContent />
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <ProfilePage />  {/* Add ProfilePage */}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
