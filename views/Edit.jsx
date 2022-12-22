const React = require('react')
const DefaultLayout =require('./Default')


class Edit extends React.Component{
    render(){
        const {product} = this.props
        console.log(this.props.product)
        return(
            <DefaultLayout title= <img style={{height: '100px', width: '400px'}} src='https://th.bing.com/th/id/R.6615a50bf04cb796db306bf3dd6eede2?rik=YGjuamJZznm%2f0g&pid=ImgRaw&r=0&sres=1&sresct=1'></img>> 
            <link rel="stylesheet" type="text/css" href="../css/edit.css"/>
            <div>
                <h1 style={heading}>Edit this product</h1>
                <form style={formFeild} action={`/product/${product._id}?_method=PUT`} method="POST">
                    Name: <input style={inputForm} type ="text" name="name" defaultValue={product.name}/> <br/>
                    Author: <input style={inputForm} type ="text" name="Author" defaultValue={product.Author}/> <br/>
                    Price: <input style={inputForm} type ="number" name="price" defaultValue={product.price}/> <br/>
                    Qtity: <input style={inputForm} type ="number" name="Qtity" defaultValue={product.Qtity}/> <br/>
                    Img: <input style={inputForm} type="text" name="Img" defaultValue={product.Img} /> <br/>
                    Date: <input style={inputForm} type ="text" name="Date" defaultValue={product.Date}/> <br/>
                    About : <textarea style={inputForm} rows="7" cols="50" class="textRegion" name="About"></textarea> <br></br>
                    <input type="submit" value="Update product"/>
                </form>
            </div>
            <div style={{marginLeft: '550px'}}>
                <a href='/product'><button style={btnH}>Product List</button ></a> 
                <a  href="/"><button style={btnHP}>Home</button ></a>
            </div>
            
            </DefaultLayout>
        )
    }
}
const heading ={
    color: 'Green',
    margin: '10px 600px'
}
const formFeild ={
        width: '30vw',
        minwidth: '500px',
        alignself: 'center',
        boxshadow: '0px 0px 0px 0.5px rgba(50, 50, 93, 0.1), 0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07)',
        border: '5px solid grey',
        borderradius: '20px',
        padding: '40px',
        margin: '0 auto'
      
}
 const inputForm ={
    padding: '10px',
    margin: '5px',
    margin: '2px',
    mozboxsizing: 'border-box',
     webkitboxsizing: 'border-box',
    boxsizing: 'border-box'
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
 const btnHP ={
    margin:"7px",
    backgroundColor: "blue",
      width: '100px',
      padding: "10px",
      boarder: "1px yellow",
      borderRadius: "5px",
      textDecoration: "none",
 }
 const button ={
    alignself: 'center',
 }
module.exports = Edit