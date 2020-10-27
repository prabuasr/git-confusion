import React, { Component } from 'react';
import { Media } from 'reactstrap';


  import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
           
    }
      

    renderDish(dish) {       
      if (dish != null){
          return(
            <div  className="col-12 col-md-5 m-1">
              <Card>
                  <CardBody>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
              </Card>
          </div>
          );
      }
      else
          return(
              <div></div>
          );
  }

  renderDishComments(comments) {
      if(comments != null){
        const comment = comments.map((comm) => {
            return (
                <div>
                <div key={comm.id}>
                  <p>{"-- "+comm.author+","+comm.date}</p>
                  <p>{comm.comment}</p>
              </div>
              </div>
            );
        });
        return(
            <div  className="col-12 col-md-5 m-1">
            <Card>
                  <CardBody>  
                <div className="row">
                {comment}
                </div>
                </CardBody>
            </Card>     
            </div>
        );  
      }
      else{
    return(
        <div></div>
    );  
  }
}

  render() {
    return(
      
        <div className="container">
        <div className="row">
            <Breadcrumb>

                <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>{this.props.dish.name}</h3>
                <hr />
            </div>                
        </div>
        <div className="row">
            
            {this.renderDish(this.props.dish)}
            
            {this.renderDishComments(this.props.comments)}

            
        </div>
        </div>
    );


}
}

 

export default DishDetail;