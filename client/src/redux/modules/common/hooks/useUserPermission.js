
import { useSelector } from 'react-redux';


export const useUserPermission = () => {
    const { permissions } = useSelector((store) => store.common.loggedInUser);
    const newPermissions = [
    // {
    //     "screenName": "Equipments",
    //     "route": "/admin/equipments",
    //     "method": ""
    // },
    // {
    //     "screenName": "Create Equipment",
    //     "route": "/admin/equipments/create",
    //     "method": ""
    // },
    // {
    //     "screenName": "Edit Equipment",
    //     "route": "/admin/equipments/edit",
    //     "method": ""
    // },
];
    return [...permissions, ...newPermissions];
};