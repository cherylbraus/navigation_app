import Button from "./Button";
import { DirectionsSubway, IosShare } from "@mui/icons-material";

const LeftBox = ({
  titleLabel,
  titleSubLabel,
  price,
  originLocation,
  originTime,
  destinationLocation,
  destinationTime,
  buttonObj
}) => {
  return (
    <section className="leftbox">
      <div className="topbox">
        {<DirectionsSubway className="icon-train" />}
        <div className="topbox-title">
          <div className="topbox-title-label">{titleLabel}</div>
          <div className="topbox-title-sublabel">{titleSubLabel}</div>
        </div>
        <div className="topbox-price">{price}</div>
      </div>
      <div className="middlebox">
        <div className="origin">
          <div className="location">{originLocation}</div>
          <div className="time">{originTime}</div>
        </div>
        <div className="destination">
          <div className="location">{destinationLocation}</div>
          <div className="time">{destinationTime}</div>
        </div>
      </div>
      <div className="bottombox">
        <div className="buttons">
          {Object.keys(buttonObj).map((key) => (
            <Button icon={buttonObj[key][1]} text={buttonObj[key][0]} />
          ))}
        </div>
        <div className="share">
          <Button icon={<IosShare className="icon" />} text={"Share"} />
        </div>
      </div>
    </section>
  );
};

export default LeftBox;
