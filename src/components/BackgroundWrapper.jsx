import bgLogo from "../assets/bg-logo.png";

export default function BackgroundWrapper({ children }) {
  return (
    <div style={styles.wrapper}>
      {/* Watermark Logo */}
      <div style={styles.overlay}></div>

      {/* App Content */}
      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {
  wrapper: {
    position: "relative",
    minHeight: "100vh",
    backgroundColor: "#ffff",
    overflowX: "hidden",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    backgroundImage: `url(${bgLogo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "280px",
    opacity: 0.05,
    zIndex: 0,
    pointerEvents: "none",
  },

  content: {
    position: "relative",
    zIndex: 1,
  },
};
