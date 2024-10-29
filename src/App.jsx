import "./App.css";
import MyIcon from "./assets/geo-alt.svg";
import Logo from "./assets/wblogo.svg"
import Coin from "./assets/coin-icon-removebg-preview.png"
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect ,useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import FAQ from "./faq.jsx";
import Footer from "./Footer.jsx";
function App() {
  const handleClick = () => {
    alert("Icon clicked!");
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const ChallengeCard = ({ title, points, difficulty, initialTime }) => {
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
      const timer = setInterval(() => {
        setTimeRemaining((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);

      return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => {
      const hours = String(Math.floor(time / 3600)).padStart(2, "0");
      const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
      const seconds = String(time % 60).padStart(2, "0");
      return `${hours}:${minutes}:${seconds}`;
    };

    return (
      <div className="bg-gray-200 p-6 rounded-lg shadow-md w-64 m-4 hover:shadow-lg transition-all border border-gray-400 shaky-border">
        <h2 className="text-3xl font-bold text-center py-3">{title}</h2>
        <div className="flex justify-center items-center mb-4">
          <p className="text-center text-lg font-medium">
            Ends in{" "}
            <span className="text-blue-600 font-mono text-3xl">
              {formatTime(timeRemaining)}
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center  text-red-600">
            <img src={Coin} alt="Coins" weight="7" height="7" className=""/>
            <span className="text-2xl font-extrabold">{points}</span>
          </div>
          <span
            className={`px-3 py-3 rounded-full text-sm font-bold ${
              difficulty === "Easy"
                ? "bg-green-400 text-green-900"
                : difficulty === "Medium"
                ? "bg-yellow-400 text-yellow-900"
                : "bg-red-400 text-red-900"
            }`}
          >
            {difficulty.toUpperCase()}
          </span>
        </div>
        <button className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 w-full rounded-lg font-semibold flex items-center justify-center space-x-2">
          <span>Start</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </button>
      </div>
    );
  };
  const Dashboard = () => {
    const challenges = [
      {
        title: "THE PUZZLE PATH",
        points: 100,
        difficulty: "Easy",
        initialTime: 37239,
      },
      {
        title: "MIMIC MADNESS",
        points: 200,
        difficulty: "Medium",
        initialTime: 45923,
      },
      {
        title: "ITS GONNA BE CRAZY",
        points: 500,
        difficulty: "Hard",
        initialTime: 45923,
      },
      {
        title: "HEHE MAST RAHO",
        points: 100,
        difficulty: "Easy",
        initialTime: 54321,
      },
    ];

    return (
      <div className="flex flex-wrap justify-center">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    );
  };
  return (
    <div className="bg-green-900 min-h-screen">
      <div className="bg-[url('background-image.png')] bg-cover bg-center w-full h-[800px]">
        <div className="navbar flex justify-between items-center py-4 px-4">
          <button onClick={handleClick}>
            <img
              src={MyIcon}
              alt="My Icon"
              width="40"
              height="40"
              className="filter brightness-150 invert opacity-75"
            />
          </button>
          <div className="flex space-x-8 px-2 font-serif static">
            <ul className="cursor-pointer">
              <a className="text-white no-underline" href="#dashboard">
                Dashboard
              </a>
            </ul>
            <ul className="cursor-pointer">
              <a className="text-white no-underline" href="#rules">
                Rules
              </a>
            </ul>
            <ul className="cursor-pointer">
              <a className="text-white no-underline" href="#">
                Leaderboard
              </a>
            </ul>
            <ul className="cursor-pointer">
              <a className="text-white no-underline" href="#">
                Create
              </a>
            </ul>
            <ul className="font-bold cursor-pointer">
              <a className="text-white no-underline" href="#">
                Login
              </a>
            </ul>
          </div>
        </div>
        <div className="flex flex-col text-wrap w-3/5 py-40">
          <h1
            data-aos="slide-up"
            className="text-8xl font-light font-serif text-white px-8"
          >
            UNCOVER THE SECRETS OF MNNIT CAMPUS
          </h1>
          <p data-aos="slide-up" className="px-8 text-white text-3xl">
            Join the hunt, test your wit, and see if you have what it takes to
            conquer our college’s most epic scavenger adventure!
          </p>
        </div>
      </div>
      <div id="rules" className="px-20 py-20 bg-green-950 min-h-screen">
        <div className="bg-white px-10 py-10 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-center mb-6">
            Rules & Guidelines
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
            <li>
              Points will be awarded based on the completion of challenges,
              speed, and any bonuses specified. Teams with the highest scores
              at the end of the hunt will be declared winners.
            </li>
            <li>
                  The hunt has an overall time limit, and all activities must be
                  completed within this timeframe to count.
                </li>
                <li>
                  Respect campus rules, buildings, and boundaries, and follow
                  instructions from staff or organizers. Each participant/team
                  must have a valid college ID or proof of registration for
                  verification.
                </li>
                <li>
                  Teams may only use permitted tools or information (e.g., clues
                  provided, campus maps). No external help, such as using
                  friends or online sources, is allowed unless explicitly
                  permitted. Completing certain challenges may require evidence
                  submission (e.g., photos or videos), which should be done as
                  instructed.
                </li>
                <li>
                  Hints may be available for each challenge but will result in a
                  points deduction or time penalty. Teams should request hints
                  responsibly, as misuse may impact final scores.
                </li>
                <li>
                  The organizers reserve the right to change or modify any rules
                  during the event. Decisions made by the organizers or judges
                  are final and must be respected by all participants. Any
                  disputes or clarifications should be directed to the event
                  staff for resolution.
                </li>
                <li>
                  Only one device per team (if required) may be used for
                  submitting answers, photos, or videos.
                </li>
          </ul>
        </div>
      </div>
      <div id="dashboard" className="p-10">
        <h1 className="text-center font-serif font-bold text-red-300">Live Challenges</h1>
        <Dashboard />
      </div>
      <div className="p-32"> <h2 className="text-white font-serif">Frequently Asked Questions</h2><FAQ/></div>
      <Footer/>
    </div>
  );
}

export default App;
