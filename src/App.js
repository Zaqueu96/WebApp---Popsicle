import { Fragment } from "react";
import { ToastContainer} from 'react-toastify';

import RouterCustom from "./router/Routers";
import 'react-toastify/dist/ReactToastify.css';
import "./styles.css";
export default function App() {
  return <Fragment>
    <RouterCustom />
    <ToastContainer />
  </Fragment>;

}
