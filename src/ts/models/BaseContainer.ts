import sealed from "../decorators/sealed";
import {OnNavigateType} from "../interfaces/onNavigate.type";

@sealed
export default class BaseContainer<OnNavigateType> {
    onNavigate: OnNavigateType;
    constructor(onNavigate: OnNavigateType){
        this.onNavigate = onNavigate;
    }
}