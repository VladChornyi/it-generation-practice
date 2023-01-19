import React, { useEffect } from "react";
import { deleteUser, fetchUsersOperation } from "../../redux/users/operetions";
import { useDispatch, useSelector } from "react-redux";
import {
	getUsersItems,
	getIsLoading,
	getError,
} from "../../redux/users/selectors";
import moment from "moment/moment";
import { Link } from "react-router-dom";

export default function UserPage() {
	const dispatch = useDispatch();
	const users = useSelector(getUsersItems);
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	useEffect(() => {
		dispatch(fetchUsersOperation());
	}, [dispatch]);

	const handleDeleteUser = (event) => {
		const { id } = event.target.dataset;
		dispatch(deleteUser(id));
	};

	return (
		<>
			{isLoading && <p>Loading...</p>}
			{error && <p>{error.message}</p>}
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						<h2>Name: {user.name}</h2>
						<img src={user.avatar} alt={user.name} />
						<button
							data-id={user.id}
							type="button"
							onClick={handleDeleteUser}
						>
							Delete me
						</button>
						<Link to={user.id}>More info</Link>
					</li>
				))}
			</ul>
		</>
	);
}
