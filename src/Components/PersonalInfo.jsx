import { Mail, MapPin, User } from 'lucide-react';
import '../styles/personal-info.css';

const PersonalInfo = () => {
  return (
    <div className="personal-info-container">
      <div className="personal-info-wrapper">
        {/* Animated background elements */}
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        
        {/* Main card */}
        <div className="personal-info-card">
          {/* Profile section */}
          <div className="profile-section">
            <div className="profile-avatar-wrapper">
              <div className="profile-avatar">
                <User className="profile-icon" />
              </div>
              <div className="status-indicator"></div>
            </div>
            
            <h2 className="main-title">Personal Information</h2>
            <div className="title-underline"></div>
          </div>

          {/* Information cards */}
          <div className="info-cards">
            {/* Name */}
            <div className="info-card info-card-name">
              <div className="info-card-content">
                <div className="info-icon-wrapper info-icon-purple">
                  <User className="info-icon" />
                </div>
                <div className="info-text">
                  <p className="info-label info-label-purple">Full Name</p>
                  <p className="info-value">Vedhavani Venkatesan</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="info-card info-card-email">
              <div className="info-card-content">
                <div className="info-icon-wrapper info-icon-blue">
                  <Mail className="info-icon" />
                </div>
                <div className="info-text">
                  <p className="info-label info-label-blue">Email Address</p>
                  <p className="info-value">vedhavaniv@react.com</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="info-card info-card-location">
              <div className="info-card-content">
                <div className="info-icon-wrapper info-icon-green">
                  <MapPin className="info-icon" />
                </div>
                <div className="info-text">
                  <p className="info-label info-label-green">Location</p>
                  <p className="info-value">Chennai, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom section */}
          <div className="decorative-section">
            <div className="decorative-dots">
              <div className="dot dot-purple"></div>
              <div className="dot dot-blue"></div>
              <div className="dot dot-green"></div>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="floating-element floating-element-1"></div>
        <div className="floating-element floating-element-2"></div>
      </div>
    </div>
  );
};

export default PersonalInfo;