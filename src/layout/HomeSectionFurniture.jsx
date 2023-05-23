import HomeSectionHeader from "../components/home/HomeSectionHeader";

const HomeSectionFurniture = () => {
    const title = "FURNITURE FOR EVERY BUDGET";
    const text =
        "From glam vibes to laid-back comfort, these sofas all have one thing in common—and that’s amazing value.";

    return (
        <div>
            <HomeSectionHeader title={title} text={text} />
        </div>
    );
};

export default HomeSectionFurniture;
