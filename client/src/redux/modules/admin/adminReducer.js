import bookings from "./slices/bookingsSlice";
import courts from "./slices/courtsSlice";
import employees from "./slices/employeesSlice";
import equipments from "./slices/equipmentSlice";
import meta from "./slices/metaSlice";
import roles from "./slices/rolesSlice";
import slots from "./slices/slotsSlice";
import users from "./slices/usersSlice";
const AdminReducer = {
  courts,
  roles,
  employees,
  slots,
  users,
  meta,
  equipments,
  bookings,
};

export default AdminReducer;
