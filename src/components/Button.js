const Button = ({ icon, text }) => {
  return (
    <div className="button">
      {icon}
      <div className="button-text">{text}</div>
    </div>
  );
};

export default Button;
