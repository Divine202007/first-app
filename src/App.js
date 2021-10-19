import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="container">
    
      <div className="row">

      <div className="col-md-4">
      </div>

  <div className="col-md-4">
 
      <form className="form">
      <h1 className="login">Login</h1>
    <div className="mb-3">
      <label for="username" className="form-label">Username</label>
      <input type="email" className="form-control" id="esername" aria-describedby="emailHelp"/>
    </div>

    <div className="mb-3">
      <label for="password" className="form-label">Password</label>
      <input type="password" className="form-control" id="password"/>
    </div>
    
    <button type="submit" className="btn btn-success">Se connecter</button>
    <span className="link-text"><a href="">Pas encore inscrits ?</a></span>
  </form>
</div>

  <div className="col-md-4">
  </div>
</div>

    </div>
  );
}

export default App;
