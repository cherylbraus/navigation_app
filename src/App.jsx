import "./styles.css";
import {
  RemoveRoad,
  Bed,
  Wifi,
  Tv,
  People,
  Restaurant
} from "@mui/icons-material";
import LeftBox from "./components/LeftBox";

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>Placeholder</h1>
      </header>

      <main>
        <div className="leftside">
          <div className="inputs"></div>
          <div className="leftboxes">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <LeftBox
                titleLabel={"#238179 - Kreco Express"}
                titleSubLabel={"Business class * 8hr 45min"}
                price={"$25"}
                originLocation={"Semarang (SMG)"}
                originTime={"01:00AM"}
                destinationLocation={"Tulungagung (TA)"}
                destinationTime={"09:45PM"}
                buttonObj={{
                  oneway: ["One-way", <RemoveRoad className="icon" />],
                  count: ["1", <People className="icon" />],
                  meals: ["3x Meal", <Restaurant className="icon" />],
                  beds: ["Bed", <Bed className="icon" />],
                  wifi: ["Wifi", <Wifi className="icon" />]
                  // tv: ["TV", <Tv className="icon" />]
                }}
              />
            ))}
          </div>
        </div>
        <div className="rightside">
          <div className="map">
            <img
              src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
              alt="map"
            />
          </div>
          <div className="tabs"></div>
          <div className="chart"></div>
        </div>
      </main>
    </div>
  );
}
