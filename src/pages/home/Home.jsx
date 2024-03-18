import Intro from "../../components/SectionIntro/intro";
import BrandSection from "../../components/BrandSection/BrandSection";
import CollectionSection from "../../components/CollectionSection/CollectionSection";
import NewItems from "../../components/SectionNewItems/NewItems";
import Perfume from "../../components/SectionPerfume/perfume";
import DiscountSection from "../../components/SectionDiscount/DiscountSection";
import NewItemDiscount from "../../components/SectionNewItemDiscount/NewItemDiscount";

export function Home() {
    return <>
        <Intro/>
        <BrandSection/>
        <CollectionSection/>
        <NewItems/>
        <Perfume/>
        <DiscountSection/>
        <NewItemDiscount/>
    </>
}