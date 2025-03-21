import { OnNavigateType } from "../../interfaces/onNavigate.type";
import BaseContainer from "../../models/BaseContainer";

export default class LandingContainer extends BaseContainer<OnNavigateType> {
    constructor(onNavigate: OnNavigateType){
        super(onNavigate);
        console.log('Lunedì');
    }
}