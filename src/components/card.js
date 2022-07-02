import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

const Card = (props) => {
    const [active, setActive] = useState(false);
    const currentEl = useRef();

    const activeElementHandler = (event) => {
        setActive(!active);
        currentEl.current = event.target;
    }

    useEffect(() => {
        if(typeof currentEl.current === 'undefined') {
            return;
        }

        currentEl.current.className = active ? 'card col-md-6 active' : 'card col-md-6';

        console.log(currentEl.current.className)

    })

    const cardItem = () => {
        return props.cardItem.map(item => {
            return (
                <Row key={item.id} className='justify-content-center mt-5 mb-3'>
                    <Col className='card col-md-6' onClick={activeElementHandler}>
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