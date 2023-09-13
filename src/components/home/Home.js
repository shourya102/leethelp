import './Home.css';

export default function Home() {
  return (
      <div className="form-container">
          <form>
              <h1>Welcome to Leethelp>> </h1>
              <label htmlFor="username">Username</label>
              <input type="text" id='username'/>
              <label htmlFor="password">Password</label>
              <input type="password" id='password'/>
              <button>Log In</button>
          </form>
      </div>
  );
};