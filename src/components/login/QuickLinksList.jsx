import { Link } from "react-router-dom";

const QuickLinksList = ({ heading, listItems }) => {
    return (
        <div className="footer__container__quick-links__list">
            <h3 className="footer__container__quick-links__list__title">
                {heading}
            </h3>
            <ul className="footer__container__quick-links__list__list-item">
                {listItems.map((item, index) => (
                    <li key={index}>
                        <Link to={"/" + item}>{item}</Link>
                    </li>
                ))}
            </ul>
            {/* <div className="footer__container__quick-links__list__list-item">
                {listItems.map((item, index) => (
                    <Link key={index} to={"/" + item}>
                        {item}
                    </Link>
                ))}
            </div> */}
        </div>
    );
};

export default QuickLinksList;
