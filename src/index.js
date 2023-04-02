import { loadHeader } from "./load-header";
import { loadHomePage } from "./load-content";
import "./styles.css";



const content = document.getElementById('content');
loadHeader(content);
loadHomePage(content);