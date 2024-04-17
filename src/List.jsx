//if we try this it will return one long string of all the fruits
/*
function List(){
    const fruits = ["appple", "orange", "banana", "tangerine"];

    return (fruits);
}

export default List
*/

//we can instead use the map method to return a list
/*
function List(){
    const fruits = ["appple", "orange", "banana", "tangerine"];

    const listItems = fruits.map(fruit => <li>{fruit}</li> );

    return (<ol>{listItems}</ol>);
}

export default List
*/

/*
//we can even return an array of objects
//let's start by returning just the fruit names

function List(){
    const fruits = [{id: 1, name: "appple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana",calories: 105}, 
                    {id: 4, name: "tangerine",calories: 75 }];
//we can use the name property for each object in the array to remove the error in the console that says "Each child in a list should have a unique "key" prop"
    //const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li> );
//it is an industry standard to use unique IDs instead of names and other identifiers that could result in naming conflicts eg if we used name we could have two people named Bob
    const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}</li> );

    return (<ol>{listItems}</ol>);
}

export default List

*/

/*
//now to return both the names and their calories
function List(){
    const fruits = [{id: 1, name: "appple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana",calories: 105}, 
                    {id: 4, name: "tangerine",calories: 75 },
                    {id: 5, name: "coconut", calories: 145},];
//let's put the list items on their own lines for ease of reading like with the fruit objects
//now we will use the javascript sort method on the array
fruits.sort((a, b) => a.name.localeCompare(b.name));//sorts the array alphabetically
//fruits.sort((a, b)=> b.name.localeCompare(a.name));//sorts the array in reverse alphabetical order
//fruits.sort((a, b) => a.calories - b.calories);//sorts the array by calories in ascending order
//fruits.sort((a, b) => b.calories - a.calories);//sorts the array by calories in descending order

    const listItems = fruits.map(fruit => <li key={fruit.id}>
                                            {fruit.name}: &nbsp;
                                            <b>{fruit.calories}</b></li> );

    return (<ol>{listItems}</ol>);
}

export default List
*/
/*
//let's filter out fruits based on their calorie count
function List(){
    const fruits = [{id: 1, name: "appple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana",calories: 105}, 
                    {id: 4, name: "tangerine",calories: 75 },
                    {id: 5, name: "coconut", calories: 145},];
                    
    //const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    //const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
    //                                                    {lowCalFruit.name}: &nbsp;
    //                                                    <b>{lowCalFruit.calories}</b></li> );
    const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

    const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
                                                        {highCalFruit.name}: &nbsp;
                                                        <b>{highCalFruit.calories}</b></li> );

    return (<ol>{listItems}</ol>);
}

export default List
*/

//let's make this a reusable component
//we can do this by making use of props

function List(props){
    const category = props.category
    const itemList = props.items

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li> );

    return (<>
            <h3 className="list-category">{category}</h3>
            <ol className="list-items">{listItems}</ol>
            </>);
}

export default List
