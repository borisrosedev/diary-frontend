import { OnNavigateType } from "../../interfaces/onNavigate.type";
import BaseContainer from "../../models/BaseContainer";
import figureComponent from "../../ui/components/figure/figure.component";

export default class LandingContainer extends BaseContainer<OnNavigateType> {
    landingFigureSection: HTMLElement;
    constructor(onNavigate: OnNavigateType){
        super(onNavigate);
        console.log('Lunedì');
        this.landingFigureSection = document.getElementById('landing-section') as HTMLElement;
        this.init();
    }

    init(){
        this.landingFigureSection.innerHTML += figureComponent({
            id: "landing-figure",
            classNames:'custom-figure landing__figure', 
            src: '/assets/images/logo.webp'
        });
    }
}