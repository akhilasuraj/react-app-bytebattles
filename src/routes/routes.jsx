import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import HomePage from "../Components/HomePage/HomePage";
import UserDetails from "../Components/UserDetails/UserDetails";
import { UserPageRole } from "../shared/constants/constants";
import Requests from "../Components/Requests/Requests";
import IdentityTransfer from "../Components/IdentityTransfer/IdentityTransfer";
import IdentitySearchResult from "../Components/IdentitySearchresult/IdentitySearchResult";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="userDetails" element={<UserDetails mode={UserPageRole.UserDetails} />} />
      <Route path="register" element={<UserDetails mode={UserPageRole.Register} />} />
      <Route path="approve" element={<UserDetails mode={UserPageRole.Approve} />} />
      <Route path="edit" element={<UserDetails mode={UserPageRole.Edit} />} />
      <Route path="requests" element={<Requests />} />
      <Route path="identityTransfer" element={<IdentityTransfer />} />
      <Route path="identitySearchResult">
        <Route path=":id" element={<IdentitySearchResult />} />
      </Route>
    </Route>
  )
);
