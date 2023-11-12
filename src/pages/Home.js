import "../style/styles.css"
import { Link } from "react-router-dom";
import Arrow from "../components/icons/arrow"

export default function Home () {

  return(
    <div className="home">
      <div className="devices">
        <h1>FortiConfigurator</h1>
        <h4>Im a Sysadmin which created this website for a shool project</h4>
        <p>Select the product you want to create a configuration:</p>
        <Link to="fortigate"><Arrow /> Fortigate</Link>
      </div>
      
      <div className="contact">
        <p>changes or other requests, please fill out the <Link to="contact">ContactForm</Link></p>
      </div>
    </div>
  );
}