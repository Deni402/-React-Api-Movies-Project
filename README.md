# React-Movies-API-Project
# Installation
   Clone or download the repo
   Run 'mongod' or 'mongod —dbpath ~/data/db' 
   Run 'npm run serve'

# Timeframe
  Two days

   ---

  ### Overview 
  ### As the title says, React-Movies-API-Project is a short team project of two days deadline where we had to create a website using an online free API which was a bit difficult to find but once we did, the fun and enjoying part started and we could play around with its potential. 
   
   ---
### Technologies used:
#### Front end:
 HTML, SCSS, Bulma, React.js, Webpack, Babel 
#### Back end: 
Node.js, Express, MongoDB, Mongoose

---
### Trending Page:

   The homepage is divided into a navbar,hero with a searchingbar and the first twenty trending movies. 

   We've used Bulma for styling and structuring the page like so =>
    
  Navbar: 
    const Navbar = () => (
    <div className="navbar is-black is-bold">
    <div className="container">
      <div className="navbar-start">
        <Link className="navbar-item" to="/">Trending</Link>
      </div>
      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
          Genres
        </a>
        <div className="navbar-dropdown">
          <a className="navbar-item">
            Action
          </a>
          <a className="navbar-item">
            Comedy
          </a>
          <a className="navbar-item">
            Crime
          </a>
          <a className="navbar-item">
            Horror
          </a>
          <a className="navbar-item">
            Thriller
          </a>
          <a className="navbar-item">
            War
          </a>
        </div>
      </div>
    </div>
  </div>
)