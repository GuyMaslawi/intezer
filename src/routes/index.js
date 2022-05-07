import { Routes as Routing, Route } from "react-router-dom";
import Dvd from "../views/dvd/Dvd";
import PromiseAll from "../views/promise/Promise";
import Users from "../views/users/Users";

const Routes = () => {
    return (
        <Routing>
            <Route path="/" element={<Users />} />
            <Route path="promise" element={<PromiseAll />} />
            <Route path="dvd" element={<Dvd />} />
        </Routing>
    );
};

export default Routes;
