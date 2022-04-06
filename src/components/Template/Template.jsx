import styles from "./Template.module.scss"

const Template = () => (
  <div className={styles.v2}>
    <p>
      By <a href="http://www.mezzoblue.com/">Dave Shea</a>. Bandwidth graciously
      donated by <a href="http://www.mediatemple.net/">mediatemple</a>. Now
      available:{" "}
      <a href="http://www.amazon.com/exec/obidos/ASIN/0321303474/mezzoblue-20/">
        Zen Garden, the book
      </a>
      .
    </p>
  </div>
);

export default Template;
