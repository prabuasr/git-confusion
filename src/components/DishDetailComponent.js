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
      
      const men = dish.comments.map((comm) => {
          return (
            <div >
              <Card key={comm.id}>
                <CardBody>
                <CardTitle>"Comments"</CardTitle>
                <CardText>{"-- "+comm.author+","+comm.date}</CardText>
                
                <CardText>{comm.comment}</CardText>
                
                </CardBody>
                
              </Card>
            </div>
          );
      });

          return(
              <div>
              <Card>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                    <CardText>{dish.price}</CardText>

        
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
              <div >
                <div key={comm.id}>
                  <p>{"-- "+comm.author+","+comm.date}</p>
                  <p>{comm.comment}</p>
              </div>
              </div>
            );
        });
        return(
            <div>
                <div className="row">
             {menn}
             </div>
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
            <div  className="col-12 col-md-5 m-1">
               
              {this.renderDish(this.props.dishy)}
              {this.renderDishComments(this.props.dishy)}
            </div>
          
      
  );
}
}

 

export default DishDetail;