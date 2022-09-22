import "./App.css";
import AuthorizationProvider from "./context/AuthContex";
import Routes from "./routes";
import Global from "./styles/global";


function App() { 

  return (
   <AuthorizationProvider> 
    <>     
    <div className="App">       
       <Routes />
       <Global />
       </div>     
    </>
   </AuthorizationProvider>
  );
}

export default App;
