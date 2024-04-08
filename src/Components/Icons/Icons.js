import "./Icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faNotesMedical,
  faAddressCard,
  faAddressBook,
  faMagnifyingGlass,
  faUser,
  faDownload,
  faImage,
  faPhone,
  faBars,
  faStar,
  faLocationDot,
  faHeart,
  faArrowRight,
  faCircleXmark,
  faArrowUp,
  faCalendarDays,
  faPaperclip,
  faBell,
  


} 
from "@fortawesome/free-solid-svg-icons";

export default function Icons(props) {
  return (
    <div>
      <FontAwesomeIcon icon={props.name} />
    </div>
  );
}
