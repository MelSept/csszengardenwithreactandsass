import styles from "./Intro.module.scss";

const Intro = () => (
  <section className={styles.intro}>
    <div className="dmos">
      <p>
        A demonstration of what can be accomplished through CSS based design.
        Select any style sheet from the list to load it into this page.
      </p>
      <p>
        Download the example{" "}
        <a href="http://www.csszengarden.com/examples/index">html file</a> and{" "}
        <a href="http://www.csszengarden.com/examples/style.css">css file</a>
      </p>
    </div>

    <div className="road" role="article">
      <h3>The Road to Enlightenment</h3>
      <p>
        Littering a dark and dreary road lay the past relics of browser-specific
        tags, incompatible DOMs, broken CSS support, and abandoned browsers.
      </p>
      <p>
        We must clear the mind of the past. Web enlightenment has been achieved
        thanks to the tireless efforts of folk like the W3C, WaSP, and the major
        browser creators.
      </p>
      <p>
        The CSS Zen Garden invites you to relax and meditate on the important
        lessons of the masters. Begin to see with clarity. Learn to use the
        time-honored techniques in new and invigorating fashion. Become one with
        the web.
      </p>
    </div>
    <div className="about" role="article">
      <h3>So What is This About?</h3>
      <p>
        There is a continuing need to show the power of CSS. The Zen Garden aims
        to excite, inspire, and encourage participation. To begin, view some of
        the existing designs in the list. Clicking on any one will load the
        style sheet into this very page. The HTML remains the same, the only
        thing that has changed is the external CSS file. Yes, really.
      </p>
      <p>
        CSS allows complete and total control over the style of a hypertext
        document. The only way this can be illustrated in a way that gets people
        excited is by demonstrating what it can truly be, once the reins are
        placed in the hands of those able to create beauty from structure.
        Designers and coders alike have contributed to the beauty of the web; we
        can always push it further.
      </p>
    </div>
  </section>
);

export default Intro;
