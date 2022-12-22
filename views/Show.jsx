const React = require("react");
// const { updateOne } = require("../models/product");


function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}




class Show extends React.Component {
  render() {
    const {product} = this.props;
    const renderForm =()=>{
      if(product.Qtity >0){
       return  <div>
            <h3>{product.Qtity}: remaining </h3>
            <form action={`/product/buy/${product.id}?_method=PUT`} method="POST">
            <input className="btn" type="submit" value=" Buy "/>
            </form>
          </div> 
      }else {
        return <h3>Out of Stock</h3>
      }
    }
    return (
      <div>
      <nav className="header"><a href=""></a>This is one of Frequently bought Book</nav>
      <div className="mainDiv">
      <link rel="stylesheet" type="text/css" href="../css/show.css"/>
      
      <div>
        <img src={product.img} />
        <br/>
        <a href='/product'><button style={btnH}>product List</button ></a> 
        <a href={`/product/${product._id}/edit`}><button style={btnE}>Edit</button></a>
        <form action={`/product/${product._id}?_method=DELETE`} method="POST">
                <input style ={btnD} type="submit" value="DELETE"/>
              </form>
      </div>
        <div className="About">
           <h2 >{cap(product.name)} :{cap(product.Author)}, {cap(product.Date)} </h2> 
           <h3>About</h3>
            <h5 >{cap(product.About)}</h5>
            <img  src="https://th.bing.com/th/id/OIP.-0nzyBDSHddDQ3riX6kuAAAAAA?pid=ImgDet&rs=1"></img>
           
           
        </div>
        <div className="sideBar">
        <nav className="checkout"> <a href=""></a>Your book is waiting for checkout</nav>
        <h2 className="price" >Paperback  ${product.price}</h2>
        <h5>Delivered for free two days after {new Date().toDateString()}  for all items costs greater than $25 shipped by Tame Store</h5>
        <nav className="delivery"> <a href=""></a>If you need soon let us know!!</nav>
        
        {renderForm ()}

        </div>
        
      </div>
      </div>
      
    );
  }
}

// const sidebar ={
//   boarder: '40px',
//   inlinesize: '20px',
//   overflow: 'hidden'
//  //margin: '20px 100px'
  
// }
// const styles = {
//   color: `#000000`,
//   backgroundColor: `rgb(247, 247, 245)`,
//   display: 'flex',
//   justifycontent: 'space-around',
//   textalign: 'center',
//   createBtn: {
//     backgroundColor: "#fff",
//     padding: "5px",
//     borderRadius: "5px",
//     textDecoration: "none",
//   },

//};
const btn ={
  backgroundColor: "rgb(202, 153, 16)",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
const btnH ={
  margin:"7px",
  backgroundColor: "Green",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
const btnE ={
  margin:"7px",
  backgroundColor: "orange",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
const btnD ={
  margin:'10px 75px',
  backgroundColor: "Red",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
module.exports = Show;
