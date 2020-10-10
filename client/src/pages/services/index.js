import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Header from '../../components/header';
import Main from '../../components/main';

const Services = (props) => {
    return (
        <>
            <Col>
                <Header>The House Entertainment</Header>
                <Main className="center">
                    <p className={"white"}>The House Entertainmnet is an entertainment services 
                    <br/>and content creation company based out of San Diego, CA.</p>
                    <p className={"gray"}>For more information contact: <a href="mailto:hello@thehouseentertainment.com">hello@thehouseentertainment.com</a></p>
                </Main>

                <ListGroup>
                    <ListGroupItem active>
                        <ListGroupItemHeading>Music Production</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Video Production</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Studio Sessions</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Photography</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Website and eCommerce</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Graphic Design</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Collaborations/ Sponsorships</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Events</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Merch</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                <ListGroupItem>
                    <ListGroupItemHeading>Cannabis</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
            </Col>
        </>
    );
  }
export default Services