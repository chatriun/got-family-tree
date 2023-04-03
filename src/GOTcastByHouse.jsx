import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

let GOTcastByHouse = [
	{
		housename: "Stark",
		members: [
			{
				name: "Robb",
				house: "Stark",
				gender: "Male",
				status: "Dead",
				parents: [
					{
						name: "Eddard",
						house: "Stark",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Cateryn",
						house: "Tully",
						gender: "Female",
						relationship: "Mother",
						status: "Dead",
					}
				]
			},
			{
				name: "Sansa",
				house: "Stark",
				gender: "Female",
				status: "Alive",
				parents: [
					{
						name: "Eddard",
						house: "Stark",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Cateryn",
						house: "Tully",
						gender: "Female",
						relationship: "Mother",
						status: "Dead",
					}
				]
			},
			{
				name: "Arya",
				house: "Stark",
				gender: "Female",
				status: "Alive",
				parents: [
					{
						name: "Eddard",
						house: "Stark",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Cateryn",
						house: "Tully",
						gender: "Female",
						relationship: "Mother",
						status: "Dead",
					}
				]
			},
			{
				name: "Brandon",
				house: "Stark",
				gender: "Male",
				status: "Alive",
				parents: [
					{
						name: "Eddard",
						house: "Stark",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Cateryn",
						house: "Tully",
						gender: "Female",
						relationship: "Mother",
						status: "Dead",
					}
				]
			},
			{
				name: "Rickon",
				house: "Stark",
				gender: "Male",
				status: "Dead",
				parents: [
					{
						name: "Eddard",
						house: "Stark",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Cateryn",
						house: "Tully",
						gender: "Female",
						relationship: "Mother",
						status: "Dead",
					}
				]
			},
			{
				name: "Eddard",
				house: "Stark",
				gender: "Male",
				status: "Dead",
				parents: []
			},
			{
				name: "Cateryn",
				house: "Tully",
				gender: "Female",
				status: "Dead",
				parents: []
			}
		]
	},
	{
		housename: "Lannister",
		members: [
			{
				name: "Cersei",
				house: "Lannister",
				gender: "Female",
				status: "Dead",
				parents: [
					{
						name: "Tywin",
						house: "Lannister",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Joanna",
						house: "Lannister",
						gender: "Female",
						relationship: "Mother",
					}
				]
			},
			{
				name: "Tyrion",
				house: "Lannister",
				gender: "Male",
				status: "Alive",
				parents: [
					{
						name: "Tywin",
						house: "Lannister",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Joanna",
						house: "Lannister",
						gender: "Female",
						relationship: "Mother",
					}
				]
			},
			{
				name: "Tywin",
				house: "Lannister",
				gender: "Male",
				status: "Dead",
				parents: []
			},
			{
				name: "Jaime",
				house: "Lannister",
				gender: "Male",
				status: "Dead",
				parents: [
					{
						name: "Tywin",
						house: "Lannister",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Joanna",
						house: "Lannister",
						gender: "Female",
						relationship: "Mother",
					}
				]
			}
		]
	},
	{
		housename: "Greygoy",
		members: [
			{
				name: "Yara",
				house: "Greyjoy",
				gender: "Female",
				status: "Alive",
				parents: [
					{
						name: "Balon",
						house: "Greyjoy",
						gender: "Male",
						relationship: "Father",
						status: "Dead",
					},
					{
						name: "Alannys",
						house: "Harlaw",
						gender: "Female",
						relationship: "Mother",
					}
				]
			}
		]
	}
]

// const submit = (e) => {
// 	setItems(name.)
// }




function App() {
	// const count = 'ake';
	// const [count, setCount] = useState(0);
	const countState = useState(6);
	const count = countState[0];
	const setCount = countState[1];

	// console.log(removeItem);
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>

			{GOTcastByHouse.map((gotCharacter, index) => {
				// {items.map(Remove => (
				// 	<div key={Remove.members}>
				// 		<p>{Remove.members}</p>
				// 		<button onClick={() => removeItem(Remove.fullname)}>Remove</button>
				// 	</div>
				// ))}

				return (
					<li key={`house-${gotCharacter.housename}-${gotCharacter.members.name}-${gotCharacter.members.gender}`}>
						{/* {index === 0 ? 'first' : null}
						{index === GOTcastByHouse.length - 1 ? 'last' : null} */}

						<div>
							<strong> Member of House : {gotCharacter.housename} </strong>
							<ul>
								{gotCharacter.members.map((memberHouse) => {

									return (
										<ul key={`members-${gotCharacter.housename}-${memberHouse.name}`}>
											{/* <button type="button">Remove Item</button> */}

											<div>
												<span>Name:</span> {memberHouse.name} {gotCharacter.housename}
											</div>
											<div>
												<span>Gender:</span> {memberHouse.gender}
											</div>
											<div>
												<span style={{ color: "red" }}>Status: {memberHouse.status}</span>
											</div>
											<div>
												<span>Parents:</span>
												{/* Ake: Old */}
												{/* <ol>
													{memberHouse.parents.length > 0 ? memberHouse.parents.map((parentCharacter) => (
														<ul key={`${gotCharacter.housename}-${parentCharacter.name}`}>
															<div>
																<span>Name:</span> {parentCharacter.name} {parentCharacter.house}
															</div>
															<div>
																<span>Gender:</span> {parentCharacter.gender}
															</div>
															<div>
																<span style={{ color: "red" }}>Status: {parentCharacter.status}</span>
															</div>
														</ul>
													)) : '-'}
												</ol> */}
												{memberHouse.parents.length > 0 ? <ol>
													{memberHouse.parents.map((parentCharacter) => (
														<ul key={`${gotCharacter.housename}-${parentCharacter.name}`}>
															<div>
																<span>Name:</span> {parentCharacter.name} {parentCharacter.house}
															</div>
															<div>
																<span>Gender:</span> {parentCharacter.gender}
															</div>
															<div>
																<span style={{ color: "red" }}>Status: {parentCharacter.status}</span>
															</div>
														</ul>
													))}
												</ol> : '-'}
											</div>
										</ul>
									)
								})}
							</ul>
						</div>
					</li>
				)
			})}


				{/* <form>
				<span>Name: </span><input type="text" name="name"></input>
				<button type="button">Remove Item</button>
				</form> */}

			{/* {GOTcastByHouse.map((gotCharacter, name) => {
				const

				return (
					// console.log(gotCharacter);
					console.log(gotCharacter.findIndex(Arya));
				)

			})} */}

			

		</div>
	)
}
// console.log(inputName);

export default App

