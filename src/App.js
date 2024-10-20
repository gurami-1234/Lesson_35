import Input from "./components/Input/Input";
import UsersList from "./components/UsersList/UsersList";

const array = [
 
  "Gurami",
  'Guga',
  'Dachi',
  'Sergo',
  'Mariami',
  "Gurami"
]

const usersArray = [
  {
    name:"Gurami",
    id:1
  },
  {
    name:"Guga",
    id:2
  },
  {
    name:"Mariami",
    id:3
  },
  {
    name:"Dachi",
    id:4
  },
  {
    name:"Sergo",
    id:5
  }
]
function App() {
  return (
    <div className="App">
      <br/>
      <br/>
      <Input/>
      <br/>
      <br/>

      <ol>
        {
          array.map((el,index)=><UsersList content={el} key={index}/>)
        }
        <hr/>
        {
          usersArray.map((el)=><UsersList content={el.name} key={el.id}/>)
        }
{/*         
        <UsersList content={array[0]}/>
        <UsersList content={array[1]}/>
        <UsersList content={array[2]}/>
        <UsersList content={array[3]}/>
        <UsersList content={array[4]}/> */}
  
      </ol>
    </div>
  );
}

export default App;
