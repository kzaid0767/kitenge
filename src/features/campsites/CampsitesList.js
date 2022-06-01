import { MENS } from '../../app/shared/mens';
import {Col, Row} from 'reactstrap';
import CampsiteCard from './CampsiteCard';

const Campsitelist =  () => {
    return (
        <Row className='ms-auto'>
            {MENS.map((men) => {
                        return (
                            <Col md='5' className='m-4' key={men.id}>
                                <CampsiteCard men={men} />
                            </Col>
                        );
                    })}
        </Row>
    )
}

export default Campsitelist;