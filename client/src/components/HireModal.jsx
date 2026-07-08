import "./HireModal.css";

function HireModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">

      <div className="modal">

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <h2>Hire Me</h2>

        <div className="info">

          <p><strong>Name:</strong> Manav Patel</p>

          <p><strong>Role:</strong> Full Stack Developer</p>

          <p><strong>Email:</strong> youremail@gmail.com</p>

          <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>

          <p><strong>Location:</strong> Gujarat, India</p>

          <p><strong>Projects:</strong> 4+</p>

          <p><strong>Skills:</strong> HTML, CSS, JavaScript, React, Node.js, Express, MongoDB</p>

        </div>

        <div className="modal-buttons">

          <a href="Professional-Resume manav.pdf" download>
            Download Resume
          </a>

          <a href="https://www.linkedin.com/in/manav-patel-096102381?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
            LinkedIn
          </a>

        </div>

      </div>

    </div>
  );
}

export default HireModal;