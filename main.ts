import router from "./router";
import { OnNavigateType } from "./src/ts/interfaces/onNavigate.type";
import "./styles.scss";

console.log('Buongiorno-Buonasera');


declare global {
    interface Window {
        onNavigate: OnNavigateType
    }
}

window.onNavigate = router;
window.onpopstate = () => router(window.location.hash);

router(window.location.hash);