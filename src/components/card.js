import { Container, Row, Col} from 'react-bootstrap';

const Card = (props) => {

    const cardItem = () => {
        return props.cardItem.map(item => {
            return (
                <Row key={item.id} className='justify-content-center mt-5 mb-3'>
                    <Col className='col-md-6'>
                        {item.title}
                    </Col>
                </Row>
            );
        })
    }

    return(
        <Container>
            {cardItem()}
        </Container>
    );
}

export default Card;