import "./App.css";
import Form from "./Components/Form";
import MediaSign from "./Components/MediaSignin/MediaSign";
function App() {
  let url="";
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="logo">LOGO</h1>
        <Form></Form>
        <p className="description">Don't have an account? <a className="link"href={url}>Create your account</a></p>
        <MediaSign></MediaSign>
      </div>
    </div>
  );
}

export default App;
