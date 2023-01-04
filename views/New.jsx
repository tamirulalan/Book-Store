
  const React = require("react");
  
  class New extends React.Component {
    render() {
        return(
            <div>
            <link rel="stylesheet" type="text/css" href="../css/new.css"/>
                <h1 className="title">New product</h1>
                <nav>
                    <a href="/">Home Page</a>
                </nav><br />
                <form action="/product" method="POST">
                    <input className="input" placeholder="name"  type='text' name='name'/> <br></br> 
                    <input className="input" placeholder="Author"  type='text' name='Author'/><br></br> 
                    <input className="input" placeholder="Price"  type='text' name='price'/><br></br> 
                    <input className="input" placeholder="Qtity"  type='text' name='Qtity'/><br></br> 
                    <input className="input" placeholder="img"  type='text' name='img'/><br></br> 
                    <input className="input" placeholder="Date"  type='text' name='Date'/><br></br> 
                    <textarea rows="7" cols="50" className="textarea" placeholder="About"  type='text' name='About'/><br></br> 
                    <br></br> 
                            <input type="submit" value="Create product"></input>
                </form>
            </div>
        )
    }
  }
  
  module.exports = New;