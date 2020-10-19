import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

class DishDetail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }   
        
    }
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
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

  renderDishComments(dish) {
      if(dish != null){
        const menn = dish.comments.map((comm) => {
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
                {menn}
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
                  
        

                    
              {this.renderDish(this.props.dishy)}
            
      
              {this.renderDishComments(this.props.dishy)}
              </div>



</div>
          
    
  );
}
}

 

export default DishDetail;