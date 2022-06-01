import React from 'react';
import {Card, CardImg, CardImgOverlay, CardBody, Button, CardText, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { MENS } from '../app/shared/mens';
import VitengeLogo from '../app/assets/images/vitengelogo.png';


function RenderItem({men }) {
    return (
        <Card>
            
                <CardImg height="500" src={men.image} alt={men.name} />
                <CardBody>
                <CardTitle>{men.name}</CardTitle>
                <CardText>{men.description}</CardText>
                    <Button outline >
                        <i className='fa fa-shopping-basket fa-lg'/> Add To Cart
                    </Button>
                    <Button  className="ml-5" >
                        $ {men.price}
                    </Button>
                </CardBody>
                
            
        </Card>
    );
}

function Mens () {

    const directory = MENS.map(men => {
        return (
            
            <div key={men.id} className="col-md-5 m-1">
                <RenderItem men={men} />
                
            </div>
            
        );
    });

    return (
        <div className='container'>
           
            <div className='row'>
                
                {directory}
            </div> 
        </div>
    );
    
}





export default Mens;