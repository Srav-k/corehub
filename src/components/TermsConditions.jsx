export default function TermsConditions() {
  return (
    <>
      {/* IMAGE BANNER */}
      <div style={styles.banner}>
        <img
          src="https://media.gettyimages.com/id/985042064/vector/digital-business-strategies.jpg?s=612x612&w=0&k=20&c=KHIxaVDgBG89mNJlfNQPK_1RMlnXlUcKDvN-pfglsrg="
          alt="Terms & Conditions"
          style={styles.bannerImg}
        />
        <div style={styles.overlay}>
          <h1>Terms & Conditions</h1>
          <p>Please read our terms carefully</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
       <p> This will allow you to access and use the Website on the condition that you accept the terms and conditions set out below (the "Terms of Use"). IMPORTANT - READ BEFORE ACCESSING OR USING THE PAYMENT SERVICES. BY SELECTING THE "I ACCEPT" BUTTON BELOW, OR BY ACCESSING OR USING THE PAYMENT SERVICES, YOU AGREE THAT YOU HAVE CAREFULLY READ, UNDERSTOOD AND AGREED TO BE BOUND BY THE TERMS AND CONDITIONS OF THESE TERMS OF USE. </p> 
       <p> All content and Services on this Website, including without limitation, all text, information, designs, graphics, images, drawings, photographs, code and software and all organization and presentation of the Materials which form a part of this Website are the exclusive property of CoreHub or its licensors and are protected by intellectual property laws relating to copyrights, trade-marks, trade names, Internet domain names, trade dress and other proprietary rights. Nothing on this Website shall be construed as providing, by implication or otherwise any license to any proprietary or intellectual property rights in or to any of the Materials to you or any other party, except as expressly granted in these Terms of Use. </p>
       <p> This Website allows users to check services, descriptions, pricedetails, Pay prices applicable to each each Services through credit card/debit transactions via payment gateway The Internet is not a fully secure medium and is subject to possible interception, loss, corruption, or alteration of communication. Suvidha softwares is not liable for any damages resulting from the transmission, interception or corruption of communications to or from the Website. </p>
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
