const React = require('react')


class Navbar extends React.Component {
    render() {
        const mycart =()=>{
            if(typeof cart !== 'undefined'){
              return cart.length
            }else{
              return 0
            }
          }
        return(
         
            <div >
            
                <nav className="navBar">
               
                    <ul className="nav">
                        <li class="nav-item">
                            <a className="nav-link active" href="/" ><i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
                        </li>
                        <li class="nav-item">
                            <a className="nav-link" href="/product/new"><i className="fa fa-plus-circle" aria-hidden="true"></i> Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/add/product"><i className="fa fa-shopping-cart" aria-hidden="true"></i> <span> My Cart ({mycart()})  </span> </a>
                        </li>
                    </ul>
                </nav> 
                
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
             <link rel="stylesheet" type="text/css" href="../css/index.css"/>
            </div>
        )
    }
}


module.exports = Navbar