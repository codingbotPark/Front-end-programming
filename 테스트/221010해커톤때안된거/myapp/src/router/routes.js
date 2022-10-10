import Main from "../components/Main/Main";
import NotFound from "../common/NotFound";

export default [
  { path: "", component: <Main />, nav: true, footer: true },
  { path: "*", component: <NotFound />, nav: false, footer: false },
]