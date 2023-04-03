import { useState } from 'react'

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
			},
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

function RemoveBut() {
	const [items, setItems] = useState(GOTcastByHouse)
	// console.log([items, setItems]);
	const removeItem = (housename) => {
		setItems(items.filter(removeHouse => removeHouse.housename !== housename))
	}

	const removeMember = (memberToRemove) => {
		const updateMember = items.map((housename) => {
			return {
				...housename,
				members : housename.members.filter((member) => member.name !== memberToRemove)
			}
		});
		setItems(updateMember)
	}



	// const removeParent = (parentToRemove) => {
	// 	const updatedParentMember = items.map((person) => {
	// 		const updatedParents = person.map((parent) => {
	// 			return {
	// 				...parent,
	// 				parents: parent.parents.filter((parent) => parent.name !== parentToRemove)
	// 			}
	// 		})
	// 		setItems(updatedParents)
	// 	});
	// 	setItems(updatedParentMember)
	// };


// const removeParent = (parentToRemove) => {
// 	const memberInHouse = items.map((person) => {
// 		return (
// 			person.members.map((member) => {
// 				return {
// 					...parents,
// 					parents : member.parents.filter((parent) => parent.name !== parentToRemove)
// 				}
// 			})
// 		)
// 	});
// 	setItems(memberInHouse)
// }

	// const removeParent = (parentToRemove, name) => {
	// 	const updatedMember = items.map((housename) => {
	// 		const updateParent = housename.members.map((person) => {
	// 			if (person.name === name) {
	// 				return {
	// 					...person,
	// 					parents: person.parents.filter((parent) => parent.name !== parentToRemove),
	// 				};
	// 			} else {
	// 				return person
	// 			}
	// 		});
	// 		return {
	// 			...housename,
	// 			members : updateParent,
	// 		}
	// 	});
	// setItems(updatedMember);
	// };


	const removeParent = (parentToRemove, name) => {
		const updatedMember = items.map((housename) => {
			const updateParent = housename.members.map((person) =>
				person.name === name ? {
					...person,
					parents: person.parents.filter((parent) => parent.name !== parentToRemove)} : person);
			return {
				...housename,
				members : updateParent,
			}
		});
	setItems(updatedMember);
	};


	return (
		<div className="App">
			{items.map((gotCharacter) => {
				return (
					<ul key={`hooooouuusssseeeee-${gotCharacter.housename}`}>
							<strong>Member of House : {gotCharacter.housename}</strong>
							<button onClick={() => removeItem(gotCharacter.housename)}>x</button>
							<ul>
								{gotCharacter.members.map((memberHouse) => {

									return (
										<div style={{ border: '1px solid', borderColor: 'white' }} key={`members-${memberHouse.house}-${memberHouse.name}`}>
											<ul>
											<button onClick={() => removeMember(memberHouse.name)}>x</button>
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
												{memberHouse.parents.length > 0 ? <ol>
													{memberHouse.parents.map((parent) => (
														<ul key={`parent-${memberHouse.name}-${memberHouse.house}-${parent.name}`}>
														<button onClick={() => removeParent(parent.name, memberHouse.name)}>x</button>
															<div>
																<span>Name:</span> {parent.name} {parent.house}
															</div>
															<div>
																<span>Gender:</span> {parent.gender}
															</div>
															<div>
																<span style={{ color: "red" }}>Status: {parent.status}</span>
															</div>
														</ul>
													))}
												</ol> : "-"}
											</div>
											</ul>
										</div>
									)
								})}
							</ul>
					</ul>
				)
			})}

		</div>
	)
}

export default RemoveBut