export default function PrivacyPolicy() {
  return (
    <>
      {/* IMAGE BANNER */}
      <div style={styles.banner}>
        <img
          src="https://media.gettyimages.com/id/985042064/vector/digital-business-strategies.jpg?s=612x612&w=0&k=20&c=KHIxaVDgBG89mNJlfNQPK_1RMlnXlUcKDvN-pfglsrg="
          alt="Privacy Policy"
          style={styles.bannerImg}
        />
        <div style={styles.overlay}>
          <h1>Privacy Policy</h1>
          <p>Your data, your trust</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>
        <p> We do not automatically gather any personal information from you, such as your name, phone number, or e-mail address. This information is obtained only if you supply it voluntarily, usually through contacting us via e-mail or by providing it on an online form. Suvidha softwares do not sell or otherwise distribute any information collected to third parties. When you submit a question or comment, you may be asked for your name, e-mail address, or other information. This personal information is used to process and respond to your question or comment and is only disclosed to those who need it to answer your question, to the person that your inquiry relates to or to parties legislatively authorized to receive the information. </p> 
        <p> If you complete an online form and submit it to us through our website, we use that information for the purposes described on the form. Personal information collected from an online form will be treated in accordance with the privacy protection provisions. When you visit our website, our web server automatically collects a limited amount of standard information essential to the operation, security and evaluation of the website. A cookie is a small piece of text information that is sent to your browser when you access a website. Your browser will return this cookie information to the domain where the cookie originated. Cookies may be created when you visit our site. The session cookie we incorporate allows us to determine common paths used by our viewers. This information allows us to streamline navigation to the most requested pages during future upgrades. </p> 
        <p> For site security purposes and to ensure that web services remain available to all users, the district's computer system uses software programs to monitor network traffic to identify unauthorized attempts to upload or change information, or otherwise cause damage to the service we provide. No attempt is made to identify an individual user or their usage patterns except for law enforcement investigations. </p>
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
