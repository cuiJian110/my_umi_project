import React from 'react';
import { Card, Button } from 'antd';
class Page1 extends React.Component {
    constructor() {
        super();
        this.state = {
            test: "hellow"
        }
    }
    render() {
        const style = {
            width: '400px',
            margin: '30px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            border: '1px solid #e8e8e8',
          };
        return (
            <div>
                <div>
                    <Button type="primary">test</Button>
                    <Button type="danger">danger</Button>
                </div>
                page1
                asdf
                {this.state.test}
                <div>
                    page1
                </div>
                <div>
                <Card style={style} actions={[<a>操作一</a>, <a>操作二</a>]}>
                </Card>
                </div>
            </div>
        )
    }
    
}
export default Page1;