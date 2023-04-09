import { loadContact } from "./load-contact";
import { loadHeader } from "./load-header";
import { loadHomePage } from "./load-homepage";
import { loadMenu } from "./load-menu";
import "./styles.css";



const content = document.getElementById('content');
loadHeader(content);
loadContact();