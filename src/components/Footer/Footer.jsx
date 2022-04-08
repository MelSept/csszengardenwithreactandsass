import styles from "./Footer.module.scss"

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.icon}>
      <a
        href="http://validator.w3.org/check/referer"
        title="Check the validity of this site s HTML"
        className={styles.iconhtml}
      >
        <i className="bx bxl-html5"></i>
      </a>
      <a
        href="http://jigsaw.w3.org/css-validator/check/referer"
        title="Check the validity of this site s CSS"
        className={styles.validitycss}
      >
        <i className="bx bxl-css3"></i>
      </a>
      <a
        href="http://creativecommons.org/licenses/by-nc-sa/3.0/"
        title="View the Creative Commons license of this site: Attribution-NonCommercial-ShareAlike."
        className={styles.license}
      >
        <i className="bx bx-captions"></i>
      </a>
      <a
        href="http://mezzoblue.com/zengarden/faq/#aaa"
        title="Read about the accessibility of this site"
        className={styles.accessibility}
      >
        <i className="bx bx-accessibility"></i>
      </a>
      <a
        href="https://github.com/mezzoblue/csszengarden.com"
        title="Fork this site on Github"
        className={styles.github}
      >
        <i className="bx bxl-github"></i>
      </a>
    </div>
  </footer>
);

export default Footer;
