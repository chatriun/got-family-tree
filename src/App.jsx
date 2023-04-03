// TODO: เขาอยากรู้ว่าได้โจทย์แบบนี้ data ไม่ได้มาแบบนี้
// GOTCastMember['name'] อันนี้คือการเรียกใช้ key ใน object อีกแบบนึง ซึ่งปกติเราเขียนแบบนี้ GOTCastMember.name
// TODO: การบ้านของเอกที่อยากให้คุณทำ สร้างปุ่มลบ house หรือ คน ในแต่ละ house

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


let GOTCast = [
	{
		name: "Arya",
		gender: "female",
		house: "Stark",
		parents: [
			{
				name: 'Catelyn',
			},
			{
				name: 'Ed',
			}
		]
	},
	{
		name: "Brienne",
		gender: "female",
		house: "Tarth",
		parents: []
	},
	{
		name: "Robb",
		gender: "male",
		house: "Stark",
		parents: [
			{
				name: 'Catelyn',
			},
			{
				name: 'Ed',
			}
		]
	},
	{
		name: "Sansa",
		gender: "female",
		house: "Stark",
		parents: [
			{
				name: 'Catelyn',
			},
			{
				name: 'Ed',
			}
		]
	},
	{
		name: "Bran",
		gender: "male",
		house: "Stark",
		parents: [
			{
				name: 'Catelyn',
			},
			{
				name: 'Ed',
			}
		]
	},
	{
		name: "Tyrion",
		gender: "male",
		house: "Lannister",
		parents: [
			{
				name: 'Joanna',
			},
			{
				name: 'Tywin',
			}
		]
	},
	{
		name: "Jaime",
		gender: "male",
		house: "Lannister",
		parents: [
			{
				name: 'Joanna',
			},
			{
				name: 'Tywin',
			}
		]
	},
	{
		name: "Cersei",
		gender: "female",
		house: "Lannister",
		parents: [
			{
				name: 'Joanna',
			},
			{
				name: 'Tywin',
			}
		]
	},
	{
		name: "Theon",
		gender: "male",
		house: "Greyjoy",
		parents: [
			{
				name: 'Balon',
			}
		]
	},
	{
		name: "Yara",
		gender: "female",
		house: "Greyjoy",
		parents: [
			{
				name: 'Balon',
			}
		]
	}
];

// const FindCharacter = GOTCast.find((MainCharacter) => {
//   return MainCharacter.parents.find((parent) => {
//     return parent.name === "Catelyn"
//     console.log(parent);
//   });
// });

// console.log(FindCharacter); 

const Fullname = GOTCast.map((TransformName) => {
	return {
		...TransformName,
		Fullname: `${TransformName.name} ${TransformName.house}`,
		parents: TransformName.parents.map((parentCharacter) => {
			return {
				...parentCharacter,
				Fullname: `${parentCharacter.name} ${TransformName.house}`
			}
		}),
	}
});
console.log(Fullname, GOTCast);

const filterHouse = GOTCast.filter((cast) => {
  return cast.house === "Lannister"
})

console.log(filterHouse);

const data = [
	{id: 1, name: 'John', age: 30, hobbies: ['reading', 'coding']},
	{id: 2, name: 'Jane', age: 25, hobbies: ['painting', 'singing']},
	{id: 3, name: 'Bob', age: 40, hobbies: ['running', 'swimming']},
  ];
  

// const renderList = () => {
// return (
// 	<ul>
// 	{data.map((person) => (
// 		<li key={person.id}>
// 		{person.name} ({person.age})
// 		<ul>
// 			{person.hobbies.map((hobby, index) => (
// 			<li key={index}>{hobby}</li>
// 			))}
// 		</ul>
// 		</li>
// 	))}
// 	</ul>
// );
// };


// const noParent = GOTCast.filter((cast) => {
//   return cast.parents.length === 0
// })

// const noParent2 = noParent.map((cast) => {
//   // return cast.parents.length === 0
// })
// console.log(noParent);





const array12 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array12.reduce((accumulator, currentValue) => {
	if (currentValue % 2 === 0) {
		return accumulator;
	}

	const lastResult = accumulator?.[accumulator.length - 1]?.result ?? 0;

// 	// return [
// 	//   ...accumulator,
// 	//   {
// 	//     a: lastResult,
// 	//     b: currentValue,
// 	//     result: lastResult + currentValue,
// 	//   },
// 	// ];

// 	accumulator.push({
// 		a: lastResult,
// 		b: currentValue,
// 		result: lastResult + currentValue,
// 	})

	return accumulator;
}, []);

// [
//   {
//     a: 0,
//     b: 1,
//     result: 1,
//   },
//   {
//     a: 1,
//     b: 3,
//     result: 4,
//   }
// ]

// console.log(sumWithInitial);


// const GOTCastWithFullName = [
//   ...GOTCast, ...Fullname
// ];

// console.log(GOTCastWithFullName);
// console.log(GOTCast);

// console.log(GOTCastWithFullName);

// console.log(FullName);
// const FindCharecter = GOTCast.find((MainCharacter) => {
//   return MainCharacter.name === "Brienne"
// });

// console.log(FindCharecter);

const house = GOTCast.reduce((accumulator, currentCast) => {
	if (currentCast.house === "Tarth") {
		return accumulator
	}

	return {
		...accumulator,
		[currentCast.house]: [
			...accumulator?.[currentCast.house] ?? [],
			currentCast
		]
	}
}, {});

console.log(house);
// const houseArray = Object.keys(house);
// console.log(houseArray);

// console.log(GOTCast);
// console.log(house);
// console.log(Object.keys(house));
// console.log(Object.keys[house].map(('Stark')));
// console.log(Object.keys(house['Stark']));


// console.log(Object.entries(house));




	

[
	{
		houseName: 'a',
		people: [
			{
				name: 'aaa',
				gender: 'male',
			}
		]
	},
	{
		houseName: 'b',
		people: [
			{
				name: 'bbbb',
				gender: 'male',
			},
			{
				name: 'cccc',
				gender: 'female',
			}
		]
	}
]


// console.log(GOTCast.find(""));

const array1 = [5, 12, 8, 130, 44];

// function moreThanTen(e, i , a)  {
// return e > 10;
// }

// const found = array1.find(moreThanTen);

// let found;
// for (let i = 0; i < array1.length; i++) {
//   const element = array1[i];

//   if (element === 12) {
//     continue;
//   }

//   if (element > 10) {
//     found = element;
//     break;
//   }

//   console.log('loop', element);
// }


function moreThanTen(e, i, a) {
	return e > 10;
}

function customFind(array, conditionOfTruly) {
	let result;

	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		if (conditionOfTruly(element)) {
			result = element;
			break;
		}
	}

	return result;
}

// const found = customFind(array1, moreThanTen) // สำหรับตัวเลข
// const found = customFind(GOTCast, (a) => {
//   return a.name === "Brienne"
// }) // สำหรับ GOT

// console.log(found);

// const result = GOTCast.find((a) => {
//   return a.name === "Brienne"
// });

// console.log(result);

// const array1 = ['a', 'b', 'c'];
// // array1.forEach(element => console.log(element));
// for (let i = 0; i < array1.length; i++) {
//   const element = array1[i];
//   console.log(element);
// }

// function a(param) {
//   return param + 1;
// }

// function find(callbackFn) {
//   const element = {};
//   const index = 0;
//   const array = [];

//   const resultOfA = callbackFn(element, index, array)

//   return resultOfA;
// }

// console.log(find(a));


const keyName = "foo"
const A = {
  [keyName] : "bar"
}

console.log(A);


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

console.log(GOTcastByHouse);

// const shortReturnOpject = Fullname.map((gotCharacter) => ({
// 	name: gotCharacter.name,
// 	age: gotCharacter.age,
// }))

// console.log(shortReturnOpject);

	// const [items, setItems] = useState([
	// 	{ id: 1,
	// 		name: 'Item 1'
	// 	},
	// 	{ id: 2,
	// 		name: 'Item 2'
	// 	},
	// 	{ id: 3,
	// 		name: 'Item 3'
	// 	},
	// ]);

	// const removeItem = (id) => {
	// 	setItems(items.filter(item => item.id !== id));
	// };

function App() {
	// const count = 'ake';
	// const [count, setCount] = useState(0);
	
	const [items, setItems] = useState([GOTcastByHouse])
	const removeItem = (housename) => {
		setItems(items.filter(removeHouse => removeHouse.housename !== housename))
	}

	// {items.map(item => (
	// 	<div key={item.id}>
	// 		<p>{item.name}</p>
	// 		<button onClick={() => removeItem(item.id)}>Remove Item</button>
	// 	</div>
	// ))}

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
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
				count is {count}
				</button>
				<p>
				Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
			<ol>
				{/* {Fullname.map((gotCharacter) => {
          return (
            <li>
              <div>
                <span>FN:</span> {gotCharacter.Fullname}
              </div>
              <div>
                <span>Gender:</span> {gotCharacter.gender}
              </div>
            </li>
          );
        })} */}

				{/* {Fullname.map((gotCharacter, index) => (
          <li key={gotCharacter.Fullname}>
            {index === 0 ? 'first' : null}
              
            <div>
              <span style={{color: 'red', border: '1px solid red'}} >Fullname:</span> {gotCharacter.Fullname}
            </div>
            <div>
              <span>Gender:</span> {gotCharacter.gender}
            </div>
            <div>
              <span>Parents:</span>
              <ol>
                {gotCharacter.parents.map((parentCharacter) => (
                  <li key={`${gotCharacter.Fullname}-${parentCharacter.name}`}>
                    <div>
                      <span>name:</span> {parentCharacter.name}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </li>
        ))} */}

				{Object.keys(house).map((houseArray) => {
					// console.log(houseArray);
					return (
						<ul key={`house=${houseArray}-${houseArray.name}`}>
							<h3>Member of House: {houseArray}</h3>
							{house[houseArray].map((memberArray) => (
								<li key={`member-${memberArray.house}-${memberArray.name}=${memberArray.gender}`}>
									<div>
										<span>Name: {memberArray.name}</span>
									</div>
									<div>
										<span>Gender: {memberArray.gender}</span>
									</div>
								</li>
							))}
						</ul>
					)
				})}


				{/* {Fullname.map((gotCharacter, index) => {
          <li key={gotCharacter.Fullname}>
            {index === 0 ? 'first' : null}
            {index === Fullname.length - 1 ? 'last' : null}
            <div>
              <span> Member of House :</span> {gotCharacter.house}
            </div>
            <div>
              <strong>Name:</strong> {gotCharacter.name}
            </div>
            <div>
              <span>Gender:</span> {gotCharacter.gender}
            </div>
            <div>
              <span>Parents:</span>
              <ul>
                <span>Name:</span> {gotCharacter.parents}
              </ul>
            </div>
          </li>
        })}        */}




				{/* {Fullname.map((gotCharacter, index) => (
          <span key={gotCharacter.Fullname}>
            {gotCharacter.Fullname}
            {index !== Fullname.length - 1 ? <br/> : null}
          </span>
        ))} */}

				{/* {Fullname.map((gotCharacter) => gotCharacter.Fullname)} */}

				{/* {Fullname.map((gotCharacter) => ({
          name: gotCharacter.name,
          age: gotCharacter.age,
        }))} */}
			</ol>
		</div>
	)
}


export default App

