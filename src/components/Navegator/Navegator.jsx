const Navegator = () => (
  <aside className="sidebar" role="info">
    <div className="extra">
      <div className="design">
        <nav role="navigation">
          <ul>
            <li>
              <a href="http://www.csszengarden.com/221/" className="design-name">
                Mid Century Modern
              </a><br/>
              {""} by{" "}
              <a href="http://andrewlohman.com/" className="designer-name">
                Andrew Lohman
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/220/" className="design-name">
                Garments
              </a>{" "}
              {""} by{" "}
              <a href="http://danielmall.com/" className="designer-name">
                Dan Mall
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/219/" className="design-name">
                Steel
              </a>
              {""}by{" "}
              <a href="http://steffen-knoeller.de" className="designer-name">
                Steffen Knoeller
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/218/" className="design-name">
                Apothecary
              </a>
              {""} by{" "}
              <a href="http://trentwalton.com" className="designer-name">
                Trent Walton
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/217/" className="design-name">
                Screen Filler
              </a>
              {""} by{" "}
              <a href="http://elliotjaystocks.com/" className="designer-name">
                Elliot Jay Stocks
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/216/" className="design-name">
                Fountain Kiss
              </a>
              {""} by{" "}
              <a href="http://jeremycarlson.com" className="designer-name">
                Jeremy Carlson
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/215/" className="design-name">
                A Robot Named Jimmy
              </a>
              {""} by{" "}
              <a href="http://meltmedia.com/" className="designer-name">
                meltmedia
              </a>
            </li>
            <li>
              <a href="http://www.csszengarden.com/214/" className="design-name">
                Verde Moderna
              </a>
              {""} by{" "}
              <a href="http://www.mezzoblue.com/" className="designer-name">
                Dave Shea
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navegador">
        <h3 className="archives">Archives:</h3>
        <nav role="navigation">
          <ul>
            <li className="next">
              <a href="/214/page1">
                <span className="indicator">&rsaquo;</span>
              </a>
            </li>
            <li className="viewall">
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

      <div className="extras">
        <ul>
          <li className="css">
            <a
              href="style.css"
              title="View the source CSS file of the currently-viewed design."
            >
              View This Design s CSS
            </a>
          </li>
          <li className="resources">
            <a
              href="http://www.mezzoblue.com/zengarden/resources/"
              title="Links to great sites with information on using CSS."
            >
              {" "}
              CSS Resources{" "}
            </a>
          </li>
          <li className="faq">
            <a
              href="http://www.mezzoblue.com/zengarden/faq/"
              title="A list of Frequently Asked Questions about the Zen Garden."
            >
              {" "}
              FAQ{" "}
            </a>
          </li>
          <li className="submit">
            <a
              href="http://www.mezzoblue.com/zengarden/submit/"
              title="Send in your own CSS file."
            >
              {" "}
              Submit a Design{" "}
            </a>
          </li>
          <li className="translations">
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
