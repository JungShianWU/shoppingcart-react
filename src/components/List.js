import React from 'react';
import { Container, Button, Row, Col, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText, Badge, Modal, ModalHeader, ModalBody, ModalFooter, Table, Alert } from 'reactstrap';
import productDB from './productDB.json';
import ContainerBar from './ContainerBar.js';






class List extends React.Component {
    state = {
        magic: productDB,
        modal: false,
        cart: []
    };
    toggle = () => this.setState({ modal: !this.state.modal })

    renderList = () => {
        return (
            this.state.magic.map(product =>
                (
                    <Col sm={6} md={4} className="mb-3">
                        <Card>
                            <CardImg width="100%" src={product.img} alt="Card image cap" />
                            <CardBlock>
                                <CardTitle>{product.title}</CardTitle>
                                <CardSubtitle>
                                    <h4>
                                        {
                                            product.discount
                                                ? <Badge color="danger">特價：{product.price}</Badge>
                                                : <Badge color="success">售價：{product.price}</Badge>
                                        }

                                    </h4>
                                </CardSubtitle>
                                <CardText>{product.desc}</CardText>
                                <Button
                                    color="secondary"
                                    onClick={() => { this.addToCart(product) }}
                                // disabled={this.state.cart.find(item => item.id === product.id)}
                                >加到購物車</Button>
                            </CardBlock>
                        </Card>
                    </Col >

                )
            )
        )
    };

    deleteCartItem = (index) => {
        const cart = this.state.cart;
        cart.splice(index, 1);

        this.setState({
            cart
        });
    }



    renderModals = () => {
        const totalPrice = this.state.cart.reduce((acc, item) => (acc += item.price), 0);
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>品項</th>
                                <th>價格</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.cart.map((item, index) => (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td><Button color="danger" onClick={() => this.deleteCartItem(index)}>X</Button></td>
                                </tr>

                            ))}



                        </tbody>

                    </Table>
                    <Alert color="success" className="text-right">
                        總價：
   {totalPrice}
                        元
</Alert>
                </ModalBody>
                <ModalFooter>
                    <Button disabled={this.state.cart.length === 0} color="primary" onClick={() => this.checkout(totalPrice)}>結帳</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>取消</Button>
                </ModalFooter>
            </Modal>
        )
    }

    renderCart = () => {

        if (!this.state.cart.length) {
            return (
                <h2 style={{ "color": "red" }} className="col-12" > 快點看看我們有什麼！</h2 >)
        } else { return (<Button onClick={this.toggle} color="primary" className="col-12" >購物車裡面已經有 {this.state.cart.length} 樣東西！！</Button>) }
    }



    addToCart = (product) => {
        const cart = this.state.cart;
        cart.push(product);

        this.setState({
            cart
        });
    }

    checkout = (totalPrice) => {
        alert(`已從您的信用卡中扣除${totalPrice}元！`);
        this.toggle()
        this.setState({ cart: [] })
    }




    render() {
        return (
            <div>
                <Container>
                    {this.renderCart()}
                </Container>


                <Row>
                    {this.renderList()}
                </Row>
                {this.renderModals()}

            </div>

        )

    };
};


export default List;
