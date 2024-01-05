import "./css/normalize.css";
import "./css/style.css";
import setupPage from "./setup";
import HomePage from "./homepage";
import { createFooter } from "./setup";

console.log("Test build");
setupPage();
HomePage();
createFooter();
