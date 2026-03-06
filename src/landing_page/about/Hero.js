export default function Hero() {
  return (
    <div className="container hero-section">
      <div className="row">
        <h1 className="hero-title">
          Smart Trading Platform built with modern technology.
          <br />
          Our goal is to simplify investing for everyone.
        </h1>
      </div>

      <div className="row about-content text-muted">
        <div className="col-md-6 p-4">
          <p>
            Our project is a modern trading platform developed using the MERN
            stack (MongoDB, Express, React, Node.js). The platform allows users
            to explore market data, manage their portfolios, and perform
            trading-related operations through a simple and user-friendly
            interface.
          </p>

          <p>
            The goal of this project is to create a responsive and scalable
            system that provides users with an intuitive trading experience
            similar to modern investment platforms.
          </p>

          <p>
            Our platform focuses on performance, security, and simplicity so
            that users can easily access financial information and manage their
            investments efficiently.
          </p>
        </div>

        <div className="col-md-6 p-4">
          <p>
            This project was developed as a group project by a team of four
            members who collaborated to design the frontend interface, implement
            backend APIs, and manage database operations.
          </p>

          <p>
            The system includes features like secure login/signup, dashboard
            analytics, portfolio management, and responsive UI for mobile and
            desktop devices.
          </p>

          <p>
            Through this project we gained practical experience in full-stack
            development, UI/UX design, and teamwork while building a real-world
            trading application.
          </p>
        </div>
      </div>
    </div>
  );
}
