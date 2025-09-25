import React, { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { AboutSection } from "./components/AboutSection";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";
import { AuthForms } from "./components/AuthForms";

export default function App() {
  const [currentView, setCurrentView] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState("");

  const handleLogin = (type: string) => {
    setIsLoggedIn(true);
    setUserType(type);
    setCurrentView("dashboard");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType("");
    setCurrentView("home");
  };

  const handleGetStarted = () => {
    if (isLoggedIn) {
      setCurrentView("dashboard");
    } else {
      setCurrentView("register");
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard userType={userType} />;

      case "login":
        return (
          <AuthForms
            isLogin={true}
            onLogin={handleLogin}
            onSwitchToRegister={() =>
              setCurrentView("register")
            }
            onSwitchToLogin={() => setCurrentView("login")}
          />
        );

      case "register":
        return (
          <AuthForms
            isLogin={false}
            onLogin={handleLogin}
            onSwitchToRegister={() =>
              setCurrentView("register")
            }
            onSwitchToLogin={() => setCurrentView("login")}
          />
        );

      case "about":
        return (
          <div>
            <AboutSection />
            <Footer />
          </div>
        );

      case "features":
        return (
          <div>
            <FeaturesSection />
            <Footer />
          </div>
        );

      case "contact":
        return (
          <div>
            <div className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">
                  Contact Us
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Get in touch with our team for support,
                  partnerships, or general inquiries.
                </p>
                <div className="grid md:grid-cols-3 gap-8 mt-12">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      Emergency Hotline
                    </h3>
                    <p className="text-red-600 font-bold text-xl">
                      +91 98765 43211
                    </p>
                    <p className="text-gray-600 text-sm">
                      24/7 Emergency Services
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      General Support
                    </h3>
                    <p className="text-blue-600 font-bold text-xl">
                      +91 98765 43210
                    </p>
                    <p className="text-gray-600 text-sm">
                      Mon-Fri 9AM-6PM
                    </p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">
                      Email Support
                    </h3>
                    <p className="text-green-600 font-bold">
                      support@raktasanjivini.com
                    </p>
                    <p className="text-gray-600 text-sm">
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        );

      default:
        return (
          <div>
            <HeroSection onGetStarted={handleGetStarted} />
            <FeaturesSection />
            <AboutSection />
            <Footer />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentView={currentView}
        setCurrentView={setCurrentView}
        isLoggedIn={isLoggedIn}
        userType={userType}
        onLogout={handleLogout}
      />
      {renderContent()}
    </div>
  );
}