//starts notes on rendering lists
import List from './List'

function App() {
  const fruits = [{id: 1, name: "appple", calories: 95}, 
                    {id: 2, name: "orange", calories: 45}, 
                    {id: 3, name: "banana",calories: 105}, 
                    {id: 4, name: "tangerine",calories: 75 },
                    {id: 5, name: "coconut", calories: 145},];

  const vegetables = [{id: 1, name: "potatoes", calories: 110}, 
                    {id: 2, name: "celery", calories: 15}, 
                    {id: 3, name: "carrots",calories: 25}, 
                    {id: 4, name: "corn",calories: 63},
                    {id: 5, name: "broccoli", calories: 50},];
  return(
    <>
      <List items = {fruits} category="Fruits"/>
      <List items = {vegetables} category="Vegetables"/>
    </>
  );
}

export default App
