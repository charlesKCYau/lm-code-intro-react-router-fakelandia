import { Route, Routes } from "react-router-dom";
import Confession from "../confession/confession";
import Home from "../home/home";
import MainLayout from "../layouts/main_layout";
import Misdemeanour from "../misdemeanour/misdemeanour";
import NotFound from "../not_found/not_found";

const Router = () => <Routes>
    <Route path="/" element={<MainLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="confession" element={<Confession/>} />
        <Route path="misdemeanour" element={<Misdemeanour/>} />
        <Route path="*" element={<NotFound/>} />
    </Route>
</Routes>;

export default Router;