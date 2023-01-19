import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserInfo } from "../../redux/users/operetions";

export default function SingleUserPage() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const {
		birthday,
		name,
		avatar,
		address,
		animalPhoto,
		bank,
		card_cvv,
		IBAN,
		email,
		married,
	} = useSelector((state) => state.singleUser?.data);

	useEffect(() => {
		dispatch(getUserInfo(id));
	}, []);

	return (
		<div>
			<img src={avatar} />
			<p>Name : {name}</p>
			<img src={animalPhoto} />
			<p>Adress : {address}</p>
			<p>DateBirth : {birthday}</p>
			<p>Bank : {bank} $</p>
			<p>card_cvv : {card_cvv}</p>
			<p>IBAN : {IBAN}</p>
			<p>email : {email}</p>
			<p>married : {married ? "married" : "single"}</p>
		</div>
	);
}
