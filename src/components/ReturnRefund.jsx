export default function ReturnRefund() {
  return (
    <>
      {/* IMAGE BANNER */}
      <div style={styles.banner}>
        <img
          src="https://media.gettyimages.com/id/985042064/vector/digital-business-strategies.jpg?s=612x612&w=0&k=20&c=KHIxaVDgBG89mNJlfNQPK_1RMlnXlUcKDvN-pfglsrg="
          alt="Return & Refund Policy"
          style={styles.bannerImg}
        />
        <div style={styles.overlay}>
          <h1>Return & Refund Policy</h1>
          <p>Transparent and fair refunds</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <p>
          Refund requests must be initiated within 7 days of enrollment.
        </p>

        <p>
          Refunds will not be applicable if significant course content has
          already been accessed.
        </p>

        <p>
          CoreHub reserves the right to approve or reject refund requests
          after review.
        </p>
      </div>
    </>
  );
}

const styles = {
  banner: {
    position: "relative",
    height: "260px",
    overflow: "hidden",
  },
  bannerImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
    color: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  content: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "0 20px",
    fontSize: "16px",
    lineHeight: "1.8",
  },
};
