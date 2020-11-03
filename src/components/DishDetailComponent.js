import React, { Component } from 'react';
import { Media } from 'reactstrap';


  import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { 
  Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label ,Row,Col} from 'reactstrap';

  import { Control, LocalForm, Errors } from 'react-redux-form';

  
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component{
  constructor(props) {
    super(props);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      isModalOpen: false
    };
  }
  
  handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    // event.preventDefault();
}
  

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  render(){
    return(
      <div>
      <Button outline 
      onClick={this.toggleModal}> Submit Comment</Button>
      
      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <div className="row row-content">
                    <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                       
                    
                    <Row className="form-group">
                                
                                <Col md={10}>
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating"
                                  
                                    className="form-control"
                                >
                                    <option value="1">1</option> 
                                    <option value="2">2</option> 
                                    <option value="3">3</option> 
                                    <option value="4">4</option> 
                                    <option value="5">5</option> 
                                    </Control.select>
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                
                                <Col md={10}>
                                <Label htmlFor="author">Your Name</Label>
                                <Control.text model=".author" id="author" name="author"
                                     placeholder="Your Name"
                                     className="form-control"
                                     validators={{
                                      required, minLength: minLength(3), maxLength: maxLength(15)
                                  }}
                                  />
                                  <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                                   </Col> 
                            </Row>
                            <Row className="form-group">
                                
                                <Col md={10}>
                                <Label htmlFor="Comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                     className="form-control"
                                     rows="6"
                                    />
                                    </Col>
                            </Row>
                            
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        
                        </LocalForm>
                    </div>
                    </div>
                    </ModalBody>
                </Modal>
    
      </div>

    );
  }
}

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

  renderComments(comments) {
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
                <CommentForm />
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
            
            {this.renderComments(this.props.comments)}

            
            
        </div>
        
    

          
        </div>
    );


}
}

 

export default DishDetail;