import styles from "./Navegator.module.scss"

const Navegator = () => (
  <aside className={styles.sidebar} role="info">
    <div className={styles.extra}>
      <div className={styles.design}>
        <nav role="navigation">
          <ul>
            <li>
              <a href="http://www.csszengarden.com/221/" className={styles.designerName}>
                Mid Century Modern
              </a><br/>
              {""} by{" "}
              <a href="http://andrewlohman.com/" className={styles.designerName}>
                Andrew Lohman
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/220/" className={styles.designerName}>
                Garments
              </a>{" "}
              {""} by{" "}
              <a href="http://danielmall.com/" className={styles.designerName}>
                Dan Mall
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/219/" className={styles.designerName}>
                Steel
              </a>
              {""}by{" "}
              <a href="http://steffen-knoeller.de" className={styles.designerName}>
                Steffen Knoeller
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/218/" className={styles.designerName}>
                Apothecary
              </a>
              {""} by{" "}
              <a href="http://trentwalton.com" className={styles.designerName}>
                Trent Walton
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/217/" className={styles.designerName}>
                Screen Filler
              </a>
              {""} by{" "}
              <a href="http://elliotjaystocks.com/" className={styles.designerName}>
                Elliot Jay Stocks
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/216/" className={styles.designerName}>
                Fountain Kiss
              </a>
              {""} by{" "}
              <a href="http://jeremycarlson.com" className={styles.designerName}>
                Jeremy Carlson
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/215/" className={styles.designerName}>
                A Robot Named Jimmy
              </a>
              {""} by{" "}
              <a href="http://meltmedia.com/" className={styles.designerName}>
                meltmedia
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/214/" className={styles.designerName}>
                Verde Moderna
              </a>
              {""} by{" "}
              <a href="http://www.mezzoblue.com/" className={styles.designerName}>
                Dave Shea
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.viewAllDesings}>
        <h3 className={styles.archives}>Archives:</h3>
        <nav role="navigation">
          <ul>
            <li className={styles.next}>
              <a href="/214/page1">
                <span className={styles.indicator}>&rsaquo;</span>
              </a>
            </li>
            <li className={styles.viewall}>
              <a
                href="http://www.mezzoblue.com/zengarden/alldesigns/"
                title="View every submission to the Zen Garden."
              >
                View All Designs{" "}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={styles.extras}>
        <ul>
          <li className={styles.css}>
            <a
              href="style.css"
              title="View the source CSS file of the currently-viewed design."
            >
              View This Design s CSS
            </a>
          </li>
          <li className={styles.resources}>
            <a
              href="http://www.mezzoblue.com/zengarden/resources/"
              title="Links to great sites with information on using CSS."
            >
              {" "}
              CSS Resources{" "}
            </a>
          </li>
          <li className={styles.faq}>
            <a
              href="http://www.mezzoblue.com/zengarden/faq/"
              title="A list of Frequently Asked Questions about the Zen Garden."
            >
              {" "}
              FAQ{" "}
            </a>
          </li>
          <li className={styles.submit}>
            <a
              href="http://www.mezzoblue.com/zengarden/submit/"
              title="Send in your own CSS file."
            >
              {" "}
              Submit a Design{" "}
            </a>
          </li>
          <li className={styles.translations}>
            <a
              href="http://www.mezzoblue.com/zengarden/translations/"
              title="View translated versions of this page."
            >
              {" "}
              Translations{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </aside>
);

export default Navegator;
