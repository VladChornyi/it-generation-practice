import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getUserInfo, usersApi } from "../../redux/users/operetions";
import axios from "axios";

export default function SingleUserPage() {
	const[isEditing, setisEditing] = useState(false);
	const[formData, setFormData] = useState({
		birthday:'',
		name: '',
		avatar: '',
		address:'',
		animalPhoto:'',
		bank:'',
		card_cvv:'',
		IBAN:'',
		email:'',
		married: false
	})

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

// const [counter, setCounter] = useState(0);

// setCounter((prevState) => prevState + 1)


	useEffect(() => {
		dispatch(getUserInfo(id));
	}, []);
	

	useEffect(() => {
		 usersApi.get(id).then(({data}) => setFormData(data));
	}, [])

	const handleEdit = () => {
		setisEditing(true)
	}
	const handleInput = (e) => {
		const {name, type, value, checked} = e.target;
		setFormData(prevState => ({
...prevState, [name]: type === "checkbox" ? checked : value })
		)
	}

	return (

		<div>
			{isEditing ? 
			<>
			<img src={avatar} /> <input onChange={handleInput} value={formData.avatar} name='avatar' type="text" placeholder="avatarUrl"/>
			<input onChange={handleInput} value={formData.name} name='name' type="text"  placeholder="name"/>
			<img src={animalPhoto} /> <input onChange={handleInput} value={formData.animalPhoto}  name='animalPhoto' type="text" placeholder="animalPhotoUrl"/>
			<input onChange={handleInput} value={formData.address} name='address' type="text" placeholder="address"/>
			<input onChange={handleInput} value={formData.birthday} name='birthday' type="date" placeholder="birthday"/>
			<input onChange={handleInput} value={formData.bank}  name='bank' type="number" placeholder="money"/>
			<input onChange={handleInput} value={formData.card_cvv} name='card_cvv' type="number" placeholder="card_cvv" min='100' max='999'/>
			<input onChange={handleInput} value={formData.IBAN} name='IBAN' type="number" placeholder="IBAN" min='1000000' max='99999999'/>
			<input onChange={handleInput} value={formData.email} name='email' type="email" placeholder="email"/>
			<input onChange={handleInput} value={formData.married} name='married' type="checkbox" checked={formData.married}/> 
			</>
			:
			<>
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
			<button type="button" onClick={handleEdit}>Edit</button>
			</>}
		</div>
	);
}
