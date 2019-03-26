import React from 'react';
import { Jumbotron } from 'reactstrap';




class ContainerBar extends React.Component {
    render() {
        return (<div>
            <Jumbotron>
                <h1 className="display-3">技能商店</h1>
                <p className="lead">
                    有了我們，你只需要點選購買就能馬上提升技能了！
         </p>
                <p className="lead">
                    <p color="primary">心動不如馬上行動!!</p>
                </p>
            </Jumbotron>
        </div>
        )
    };
};


export default ContainerBar;
