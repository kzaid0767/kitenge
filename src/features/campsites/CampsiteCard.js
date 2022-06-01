import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

const CampsiteCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.men.image}
                alt={props.men.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.men.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}

export default CampsiteCard