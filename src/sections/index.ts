import dynamic from "next/dynamic";
import HappyCoupleSection from "./happyCouple/indx";
import OurPhotos from "./ourPhotos";

const HomeSection = dynamic<any>(
    () => import('./home'),
    { ssr: false }
)

export {
    HomeSection,
    HappyCoupleSection,
    OurPhotos
}