import Loadable from "react-loadable";
import Loading from "./../../common/loading";

export const Home  = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})
export const Home_1 = Loadable({
    loader: () => import("./home/children/home_1"),
    loading: Loading
})
export const Login  = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})
export const Ts  = Loadable({
    loader:()=>import("./Ts"),
    loading:Loading
})
export const Test  = Loadable({
    loader:()=>import("./TEST"),
    loading:Loading
})
