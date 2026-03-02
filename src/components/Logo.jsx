const Logo = ({ size = 40 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "50%",
      border: "2px solid #C9A84C",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      backgroundColor: "#1C1C1E"
    }}
  >
    <img
      src="https://res.cloudinary.com/djrikegql/image/upload/v1772435756/1772289183645_obsyhw.png"
      alt="Faraz Abaya Logo"
      style={{
        width: "80%",
        height: "80%",
        objectFit: "contain"
      }}
    />
  </div>
);

export default Logo;
