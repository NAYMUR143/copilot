import Image from "next/image";
import top_search from "./img/top-search.png";
import arrow_left from "./img/arrow-left.png";
import arrow_right from "./img/arrow-right.png";
import white_arrow_right from "./img/white-arrow-right.png";
import brand_logo from "./img/brand-logo.png";
import part_four_right_img from "./img/part-four-right-img.png";
import part_two_left_img from "./img/part-two-left-img.png";
import part_one_right_img from "./img/part-one-right-img.png";
export default function Home() {
  return (
    <>
      <TopSection></TopSection>
      <PartOne></PartOne>
      <PartTwo></PartTwo>
      <PartThree></PartThree>
      <PartFour></PartFour>
      <PartFive></PartFive>
      <JustAbovFooter></JustAbovFooter>
      <FooterSection></FooterSection>
    </>
  );
}

function TopSection() {
  return (
    <div className="top-main-container">
      <div>
        <span style={{ width: "20px", margin: "0px 8px" }}>
          <Image src={top_search} alt="image" />
        </span>
        <span>
          Test out the first ever visual search tool for the art industry -&gt;
        </span>
      </div>

      <div className="blur-1"></div>

      <div className="waitlist-div">
        <div>
          <span className="brand_logo">
            <Image src={brand_logo} alt="logo" />
          </span>

          <button className="waitlistBtn">
            <sup
              style={{
                margin: "0px 5px",
                width: "10px",
                display: "inline-block",
              }}
            >
              <Image src={arrow_left} alt="arrow" />
            </sup>
            Join Waitlist
          </button>
        </div>
      </div>

      <div className="bg-blur">
        <div className="blur-2">
          <div>
            <h1>Co-Pilot for the Art Industry</h1>
            <p>
              Augier Art is building a tool set for galleries and art
              institutions to automate tedious workflows and <br /> unlock
              business insights using data
            </p>
          </div>
        </div>

        <div className="video">
          <video src=""></video>

          <button>
            Learn More
            <div className="imgdiv">
              <Image src={arrow_right} alt="arrow" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function PartOne() {
  return (
    <div className="part-one">
      <div>
        <p>01</p>

        <div className="left">
          <div>
            <h1>
              Search inventory in natural language and build client insights
            </h1>

            <p>
              Query your own gallery inventory like you would with a
              google-search.
              <br />
              <br />
              Discover insights regarding demand, price, aesthetic similarity,
              and related works and artists to help you find the best fit for
              your clients preferences
            </p>

            <button>
              <span>Try Our Demo</span>
              <div className="imgdiv">
                <Image src={white_arrow_right} alt="arrow" />
              </div>
            </button>
          </div>

          <div>
            <Image src={part_one_right_img} alt="part-one-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PartTwo() {
  return (
    <div className="part-two">
      <div>
        <p>02</p>

        <div className="left">
          <div>
            <h1>
              Automate your outbound with collector context and personalization
            </h1>

            <p>
              Gain new collectors and build relationships while our AI helps
              define existing collector tastes to recommend specific artworks
              <br />
              <br />
              Auto-send emails for follow ups, exhibitions & events, or new
              inventory
              <br />
              <br />
              Use analytics to understand the efficacy of your outbounds and
              revenue generated
            </p>

            <button>
              <span>Get Early Access</span>
              <div className="imgdiv">
                <Image src={white_arrow_right} alt="arrow" />
              </div>
            </button>
          </div>

          <div>
            <Image src={part_two_left_img} alt="part-two-img" />
            <p>
              *Automating sending an email to collectors about a new piece in
              today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PartThree() {
  return (
    <div className="part-three">
      <div>
        <p>03</p>

        <div>
          <div>
            Galleries were created to nurture artists and provide the
            relationships and platform for them to become great
          </div>
          <div>
            We are automating tedious business operations so galleries can get
            back to focusing on building their artists
          </div>
        </div>
      </div>
    </div>
  );
}

function PartFour() {
  return (
    <div className="part-four">
      <div>
        <p>04</p>

        <div className="left">
          <div>
            <h1>Understand the art market better than ever before</h1>

            <p className="line-height">
              The most comprehensive art database to ever exist Say goodbye to
              clunky Artnet with UX from the 90s
            </p>

            <p>
              Here’s <strong>Augier</strong> to help galleries, students, and
              museums find and learn about art with culture and context
            </p>

            <button>
              <span>Get Early Access</span>
              <div className="imgdiv">
                <Image src={white_arrow_right} alt="arrow" />
              </div>
            </button>
          </div>

          <div>
            <Image src={part_four_right_img} alt="part-four-img" />
          </div>
        </div>
      </div>
    </div>
  );
}

function PartFive() {
  return (
    <div className="part-five">
      <div>
        <div>05</div>
        <div>Trusted By</div>
      </div>
    </div>
  );
}

function JustAbovFooter() {
  return (
    <div className="justAbovFooter">
      <div className="content">
        <div></div>
        <div></div>
      </div>

      <div className="under-content">
        <div>
          <div>
            <span>Join our Community of Galleries</span>
            <input type="text" placeholder="Enter your email..." />
          </div>

          <div>
            <span>Recommend a feature or tool</span>
            <input type="text" placeholder="What would like to see next?..." />
          </div>
        </div>
      </div>
    </div>
  );
}
function FooterSection() {
  return (
    <div className="footer-section">
      <div>
        <div className="footerlogo">
          <Image src={brand_logo} alt="logo" />
        </div>
        <p>AI enabling the art market</p>
        <p>&copy; 2023 Augier Art Inc. All rights reserved.</p>
      </div>

      <div>
        <ul>
          <li>About</li>
          <li>FAQs</li>
          <li>Our Tools</li>
        </ul>

        <ul>
          <li>Search</li>
          <li>Gallery Upload</li>
          <li>Join Waitlist</li>
        </ul>
      </div>
    </div>
  );
}
