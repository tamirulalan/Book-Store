
 const React = require("react");
 const Navbar = require("../components/Navbar");
 
 class Signup extends React.Component {
   render() {
     return (
       <div>
          <head>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>
          <link rel="stylesheet" type="text/css" href="../css/new.css"/>
             </head>
         <Navbar />
         <h1>Create an new account</h1>
 
         <form action='/user/signup' method='post'>
           <fieldset>
             <legend>Create an account</legend>
 
             <label htmlFor="username">Username</label>
             <br />
             <input type="text" name="username" required />
             <br />
             <label htmlFor="email">Email</label>
             <br />
             <input type="text" name="email" required />
             <br />
             <label htmlFor="password">Password</label>
             <br />
             <input type="password" name="password" required />
             <br />
             <input type="submit" value="Signup" />
           </fieldset>
         </form>
 
         <div>
           <p className="signin">
             Already have an Account? <a className="signbtn" href="/user/signin">Signin</a>{" "}
           </p>
         </div>
       </div>
     );
   }
 }
 
 module.exports = Signup;