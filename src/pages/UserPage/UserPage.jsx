import React, { useEffect } from "react";
import { fetchUsersOperation } from "../../redux/users/operetions";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersItems,
  getIsLoading,
  getError,
} from "../../redux/users/selectors";
import moment from "moment/moment";

export default function UserPage() {
  const dispatch = useDispatch();
  const users = useSelector(getUsersItems);

  useEffect(() => {
    dispatch(fetchUsersOperation());
  }, [dispatch]);

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <h2>Name: {user.name}</h2>
          <img src={user.avatar} alt={user.name} />
          <p>Birthday: {moment(user.birthday).format("MMMM Do YYYY")}</p>
          <p>Adress: {user.address}</p>
          <button type="button">Delete me</button>
        </li>
      ))}
    </ul>
  );
}
