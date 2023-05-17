import { Link } from "react-router-dom";

const QuickLinksList = ({ heading, listItems }) => {
    return (
        <div class="footer__container__quick-links__list">
            <span class="footer__container__quick-links__list__title">
                {heading}
            </span>
            <div class="footer__container__quick-links__list__list-item">
                {listItems.map((item, index) => (
                    <Link key={index} to={"/" + item}>
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default QuickLinksList;
