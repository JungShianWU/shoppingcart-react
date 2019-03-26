import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class Modals extends React.Component {
    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>購物車</ModalHeader>
                <ModalBody>
                    這裡要購買物品
    </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.toggle}>結帳</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>取消</Button>
                </ModalFooter>
            </Modal>

        )

    };
}





export default Modals;