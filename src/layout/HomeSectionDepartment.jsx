import DepartmentCategories from "../components/home/DepartmentCategories";
import HomeSectionHeader from "../components/home/HomeSectionHeader";

const HomeSectionDepartment = () => {
    const title = "SHOP BY DEPARTMENT";

    const text = "Sitewide Discounts & Savings of up to 25%";
    return (
        <div className="home-section container">
            <HomeSectionHeader title={title} text={text} />
            <DepartmentCategories />
        </div>
    );
};

export default HomeSectionDepartment;
