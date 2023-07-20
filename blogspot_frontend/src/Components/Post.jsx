import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Row,Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
const Post = ({posts}) => {
 
  return (
    <div style={{flex:"9"}}>
         <div className='container my-2' style={{ width: '1080px'}}>
          <Row xs={1} md={3} className="g-4">
            {
              posts.map( (item) =>{
             
                return(
                  <Col id={item._id}>
                  <Card sx={{ maxWidth: 300 }} className="mx-2 my-2">
                  <Link to={`/Post/${item._id}`}>  <CardMedia sx={{ height: "230px",width:"300px" }}  image={item.photo.url} alt="Blog" title="green iguana" /> </Link>
                    <CardContent>
                        <div style={{textAlign:"center"}}> {
                          item.categories.map((cat)=>{
                            return(cat);
                          })
                        }</div>
                 <Link to={`/Post/${item._id}`}> <Typography gutterBottom variant="h5" component="div" style={{color:"black"}}>
                       {item.title}
                      </Typography></Link>    
                     
                      <Typography className="desc" variant="body2" color="text.secondary">
                     {item.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                  </Col>
                )
              })

            }
     
      </Row>
      </div>
    </div>
  );
};

export default Post;
