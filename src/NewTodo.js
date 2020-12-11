import logo from './logo.svg';
import './NewTodo.css';
import NewTodo from './NewTodo';


// function App() {
    class NewTodo extends Component {
        render (){
                return (
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <p>
            //       Edit <code>src/App.js</code> and save to reload.
            //     </p>
            //     <a
            //       className="App-link"
            //       href="https://reactjs.org"
            //       target="_blank"
            //       rel="noopener noreferrer"
            //     >
            //       Learn React
            //     </a>
            //   </header>
            // </div>
            // <div id="container">
            // <div id="wrapper">
            //     <h1>ToDo List</h1>
            //     <div id="form">
            //         <form id="newform">
            //             <h3>What do you have todo?</h3>
            //             <input type="text" id="info" placeholder="Add ToDo"></input>
            //             <input type="submit" id="submit"></input>
            //         </form>
            //     </div>
            
            <div id="form">
	                <form id="newform">
	                    <h3>What do you have todo?</h3>
	                    <input type="text" id="info" placeholder="Add ToDo" />
	                    <input type="submit" id="submit"/>
	                </form>
                    <NewTodo />
                    <Todo />
            </div>            
            )  ;
        }
}

export default NewTodo;
