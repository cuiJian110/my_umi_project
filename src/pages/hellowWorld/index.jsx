import React from 'react';
import {connect} from "dva";
import {Button} from "antd";
class Page1 extends React.Component {
    constructor() {
        super();
        this.state = {
            test: "hellow"
        }
    }
    render() {
        const {tvalue, init, testPost} = this.props;
        return (
            <div>
                <div>
                    hellow world
                </div>
                <div>
                    {tvalue}
                    <Button onClick={() => init()}>change</Button>
                </div>
                <div>
                    <Button onClick={() => testPost()}>testPost</Button>
                </div>
            </div>
        )
    }
    
}
const mapState = state => ({
    tvalue: state.hello.ts
})
const mapDispatch = dispatch => ({
    init() {
        const action = {
            type: "hello/handInitTs",
            url: "testGet?id=110&name='zs'"
        }
        dispatch(action)
    },
    testPost() {
        const action = {
            type: "hello/testPost",
            url: "login",
            data: {
                name: "zs",
                pwd: "123456"
            }
        }
        dispatch(action);
    }
})
export default connect(mapState,mapDispatch)(Page1);