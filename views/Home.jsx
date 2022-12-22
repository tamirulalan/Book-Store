const React = require("react");
const DefaultLayout = require("./Default");

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Home extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <DefaultLayout title={''}>
      <link rel="stylesheet" type="text/css" href="../css/home.css"/> 
      <div className='Graph'>
        
        <nav className="navBar">  
          <ul className="navList">
          <li> <a  href="/"><h1>Home</h1></a></li>
          <li><a  href="/product/new"> <h1>Add product</h1></a></li>
          <li><a  href="/product"><h1>Product List</h1></a></li>
          <li><a  href="https://www.coupons.com/"><h1>Speacial Deals</h1></a></li>
          <li> <a  href="https://www.linkedin.com/in/tamiru-taye/"><h1>Contact Us</h1></a></li>
          </ul>
          <ul className="sign">
            
           <li> <a href='/user/signup'>Sign In/Up</a></li>
             <li><a href='/user/signout'>SignOut</a></li>
          </ul>
        </nav>
        <h1 className="wellcome">Well Come to Tame Book Store</h1>
        <img  src="https://jonathanbecher.com/wp-content/uploads/2016/04/Read-more-books.jpg"></img>
        
      </div>
      <p> Copyright © <script>document.write(new Date().getFullYear())</script> Tamiru Taye All Rights Reserved</p>
      </DefaultLayout>
    );
  }
}


module.exports = Home;
