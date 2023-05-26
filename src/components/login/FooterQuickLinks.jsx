import QuickLinksList from "./QuickLinksList";

const FooterQuickLinks = () => {
    const categories = [
        "Popular",
        "Chair",
        "Table",
        "Sofa",
        "Cupboard",
        "Lamp",
    ];

    const customerService = [
        "My Account",
        "Discount",
        "Returns",
        "Orders History",
        "Order Tracking",
    ];

    const furniture = [
        "Living Room Furniture",
        "Bar Furniture",
        "Bedroom Furniture",
        "Kids Furniture",
        "Accent Furniture",
        "Book Shelves",
    ];

    const usefulLinks = ["Promotions", "Sitemap"];

    return (
        <div className="footer__container__quick-links">
            <QuickLinksList heading={"Categories"} listItems={categories} />
            <QuickLinksList
                heading={"Customer Service"}
                listItems={customerService}
            />
            <QuickLinksList heading={"Furniture"} listItems={furniture} />
            <QuickLinksList heading={"Useful Links"} listItems={usefulLinks} />
        </div>
    );
};

export default FooterQuickLinks;
