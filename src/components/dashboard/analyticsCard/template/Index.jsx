import { PropTypes } from "prop-types";

const AnalyticsCard = ({ numberText, text, cardImage }) => {
  return (
    <div className="bg-white p-2 rounded-xl ">
      <div className="items-start">
        <h3>{numberText}</h3>
        <span>{text}</span>
      </div>
      <div>
        <img src={cardImage} alt="" />
      </div>
    </div>
  );
};
AnalyticsCard.propTypes = {
  numberText: PropTypes.node.isRequired,
  text: PropTypes.node.isRequired,
  cardImage: PropTypes.node.isRequired,
};
export default AnalyticsCard;
