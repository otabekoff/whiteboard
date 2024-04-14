<template>
    <div class="home">
      <div class="card-container">
        <div class="card">
          <div class="hero-section">
            <h1>Welcome to Real-Time Whiteboard App</h1>
            <p>Collaborate, brainstorm, and create together in real-time!</p>
            <div class="cta-buttons">
              <router-link to="/whiteboard" class="cta-button whiteboard-button">Start Drawing</router-link>
              <router-link to="/auth" class="cta-button auth-button">Sign In</router-link>
              <router-link to="/chat" class="cta-button chat-button">Join the Chat</router-link>
            </div>
          </div>
          <div class="features-section">
            <h2>Key Features</h2>
            <ul>
              <li>Real-time collaborative whiteboard</li>
              <li>User authentication for secure access</li>
              <li>Integrated chat for communication</li>
              <!-- Add more features as needed -->
            </ul>
          </div>
          <div class="about-section">
            <h2>About Us</h2>
            <p>Real-Time Whiteboard App is a platform designed for seamless collaboration and creativity. Whether you're working on a project with teammates or expressing your artistic talents, our app provides the tools you need to bring your ideas to life together.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home'
  };
  </script>
  
  <style scoped>
  /* Add styles for the home page */
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; /* Ensure the page fills the viewport height */
    background-color: #222; /* Background color for dark theme */
  }
  
  .card-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .card {
    max-width: 800px;
    padding: 40px 20px;
    color: #fff; /* Text color for dark theme */
    background-color: #333; /* Card background color */
    border-radius: 10px;
  }
  
  .hero-section {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .hero-section h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .hero-section p {
    font-size: 18px;
    color: #aaa; /* Adjusted text color for dark theme */
  }
  
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .cta-button {
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    color: white;
  }
  
  .whiteboard-button {
    background-color: #007bff;
  }
  
  .auth-button {
    background-color: #28a745;
  }
  
  .chat-button {
    background-color: #ffc107;
  }
  
  .features-section {
    margin-top: 40px;
  }
  
  .features-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  .about-section {
    margin-top: 40px;
  }
  
  .about-section h2 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  </style>
  