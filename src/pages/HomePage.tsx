import { Switcher } from "../components/switch";
import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routes";
// import backimage from "../assets/images/backimage.png";
import ON from "../assets/poweron.svg";
import OFF from "../assets/poweroff.svg";
function Home() {
  return (
    <div>
      {/* <h2>KAIN Manual</h2> */}
      <div className="p-4 h-screen flex -mx-2 items-center justify-center">
        {/* <img src={backimage} className="hidden sm:block " /> */}
        <Link to={ROUTES.OFF}>
          <Switcher text={"Off"} image={OFF} />
        </Link>
        <div className="mx-4 " />
        <Link to={ROUTES.ON}>
          <Switcher text={"On"} image={ON} />
        </Link>
      </div>
    </div>
  );
}

export default Home;
