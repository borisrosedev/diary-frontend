import routes from "./src/ts/constants/routes.constant";
import headerLayout from "./src/ts/ui/layout/header.layout";
console.log('Sono-Ho-Vado-Faccio-Mangio-Voglio-Posso-Devo');

export default function router(h:string){
    const root = document.getElementById('root') as HTMLElement;
    root.innerHTML = "";
    window.history.pushState({}, "", window.location.pathname + h);

    switch(h){
        case routes.landing.path:
            root.innerHTML += routes.landing.ui();
            new routes.landing.business(window.onNavigate);
            break;
        case routes.login.path:
            root.innerHTML += headerLayout();
            root.innerHTML += routes.login.ui();
            new routes.login.business(window.onNavigate);
            break;
        default:
            console.log('Arrivederci');
            break;
    }
}