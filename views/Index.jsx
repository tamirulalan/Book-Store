const React = require("react");
 const DefaultLayout =require('./Default');

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Index extends React.Component {
  render() {
    const { product } = this.props;
  // console.log(product)
    const renderValue =(Product)=>{
      if (Product.Qtity > 0){
       return <div>
            <h4>$ {Product.price}</h4>
            <h4>Qtity {Product.Qtity}</h4>
            </div> 
        }else{
       return <div>
        <h4 className="stock">Out of Stock</h4>
        </div>
      }
    }
    const mycart =()=>{
      if(typeof cart !== 'undefined'){
        return cart.length
      }else{
        return 0
      }
    }

    return (
      <div style={styles}>
               <nav className="navBar">
          
          <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="/" ><i className="fa fa-home fa-fw" aria-hidden="true"></i>&nbsp; Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/product/new"><i className="fa fa-plus-circle" aria-hidden="true"></i> Product</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/add/product"><i className="fa fa-shopping-cart" aria-hidden="true" ></i>  <span>  {mycart()} </span> </a>
          </li>
        </ul>
             {/* <li><a  href="/"><h1 className="bh"> Back to Home</h1></a></li>
            <li><a  href="/product/new"><h1 className="an"> </h1></a></li>
          </ul> */}
        </nav> 
      <DefaultLayout title={""}></DefaultLayout>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"
          integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossOrigin="anonymous"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"></link>
      <link rel="stylesheet" type="text/css" href="../css/index.css"/> 
        
          <div className="image-fader">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/books/textbooks/marketing/CXImprove_test/CXImprov_textbooks_T2.png"></img>
            <img src="https://th.bing.com/th/id/R.7d6d614afbcd49f1ccbc454f2828269f?rik=B3AnwF9GRiQRLQ&riu=http%3a%2f%2fwww.porchlightbooks.com%2fglobalassets%2fpage-headers%2fbuybooksheader-edited.jpg%3fpreset%3dfull-width&ehk=t9dlraeCFUYxl4LZUrMI9VCl12OTDW3V1uKkYOf45Ow%3d&risl=&pid=ImgRaw&r=0 "   />
            <img src="https://static1.squarespace.com/static/537e88a6e4b078fc56661bfc/554940a1e4b02653f832acd5/554940aae4b083e53b49e252/1430864044096/Wristlet+-+landing.jpg" />
        </div>



        <h1>Top purchused book List</h1>
        <div className="bookBar">
          <ul className="bookList">
          {product.map((product, idx) => (
            <li key={idx}>
              <a href={`/product/${product.id}`}><img className="bookCover" src={product.img} /></a>
              <br/>
              <a href={`/product/${product.id}`}>{cap(product.name)}</a>
              <br/>
               <h4>By {product.Author} </h4>
               {renderValue(product)}
              <br/>
              <form action={`/add/product}?_method=PUT`} method="POST">
            {/* <input className="btn" type="submit" value=" Buy "/> */}
                <button type="submit" className="btn btn-success">Add to Cart</button>
              </form>
              
            </li>
            
          ))}
          
        </ul>
        </div>
        
      </div>
    );
  }
}

const styles = {
  color: `Green`,
  
  // backgroundColor:  '#647551'
};

const ordirection ={
  display:'flex',
  liststyletype: 'none',
  margin: '30px 30px',
  backgroundColor: `##83E0FB`,

}
const navstyle ={
  display:'flex'
}
module.exports = Index;
