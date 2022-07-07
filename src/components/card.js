import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Card = (props) => {
    const [active, setActive] = useState(false);

    const activeElementHandler = (event) => {
        setActive(!active);

        if(!event.target.classList.contains('active')) {
            event.target.className += ' active'
         } else {
            event.target.className = 'col card col-md-6'
         }
    }





   

    const cardItem = () => {
        return props.cardItem.map((item, index) => {
            return (
                <Row key={item.id} className='justify-content-center mt-5 mb-3'>
                    <Col className='col card col-md-6' onClick={activeElementHandler}>
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