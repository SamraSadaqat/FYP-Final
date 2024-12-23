import { USER_DRAWER_ROUTES } from "modules/user/constants/constants";

// import CreateBooking from '../components/bookings/CreateBooking';
// import CreateCourt from "../components/courts/CreateCourt";
// import CreateEmployee from "../components/employees/CreateEmployee";
// import CreateEquipment from "../components/equipments/CreateEquipments";
// import CreateRole from "../components/roles/CreateRole";
// import CreateSlot from "../components/slots/CreateSlot";
// import CreateSlot from "../components/slots/CreateSlot";
// import CreateUser from "../components/users/CreateUser";
// import BookingsPage from '../pages/Bookings';
// import CourtsPage from "../pages/Courts";
// import EmployeesPage from "../pages/Employees";
// import EquipmentPage from "../pages/Equipment";
// import GamesPage from "../pages/Games";
import RolePage from "../pages/Roles";
// import SlotsPage from "../pages/Slots";
// import SlotsPage from "../pages/Slots";
// import UsersPage from "../pages/Users";
import PatientEncounter from "../pages/PatientEncounter";
import DoctorsInformation from "../pages/DoctorsInformation";
import Excercise from "../pages/Excercise";
import Learning from "../pages/Learning";
import HerbalMedication from "../pages/HerbalMedcation";
import PatientEncounterView from "../pages/PatientEncounter/PatientEncounterView";
import PatientEncounterHistory from "../pages/PatientEncounter/PatientEncounterHistory";


export const DRAWER_ROUTES = [
  ...USER_DRAWER_ROUTES,
  {
    title: "Roles",
    link: "/user/roles",
    icon: "",
  },
  {
    title: "Employees",
    link: "/user/employees",
    icon: "",
  },
  {
    title: "Users",
    link: "/user/users",
    icon: "",
  },
  {
    title: "Courts",
    link: "/user/courts",
    icon: "",
  },
  {
    title: "Slots",
    link: "/user/slots",
    icon: "",
  },
  {
    title: "Games",
    link: "/user/games",
    icon: "",
  },
  {
    title: "Equipments",
    link: "/user/equipments",
    icon: "",
  },
  {
    title: "Bookings",
    link: "/user/bookings",
    icon: "",
  },
];

export const ADMIN_ROUTES = [
  {
    Title: "Roles",
    Path: "roles",
    Component: RolePage,
  },
  {
    Title: "Patient Encounter",
    Path: "patient-encounter",
    Component: PatientEncounter,
  },
  {
    Title: "Patient Encounter",
    Path: "patient-encounter/patient-input",
    Component: PatientEncounterView,
  },
  {
    Title: "Patient Encounter",
    Path: "patient-encounter/patient-history",
    Component: PatientEncounterHistory,
  },
  
  {
    Title: "Doctors Information",
    Path: "doctors-information",
    Component: DoctorsInformation,
  },
  {
    Title: "Excercise",
    Path: "excercise",
    Component: Excercise,
  },
  {
    Title: "Learning",
    Path: "learning",
    Component: Learning,
  },
  {
    Title: "Herbal Medication",
    Path: "herbal-medication",
    Component: HerbalMedication,
  },

];

export const META_DATA_ENUMS = {
  SCREENS: "ScreenEnum",
  COURT_TYPES: "CourtTypeEnum",
  EMPLOYEE_TYPES: "EmployeeTypeEnum",
};
