import React from 'react';
import { Table, Button, Modal, Input, Checkbox } from 'antd';
import {connect} from 'dva';
class Table_page extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            plainOptions: ['chifan', 'sleep', 'football'],
            hobbyArr: []
        }
    }
    render() {
        const {columns, data, ceshi} = this.props;
        return (
            <div>
                <div>
                    <Button type="primary" onClick={() => this.showModal()}>添加项目</Button>
                </div>
                <div>
                    <Table columns={columns} dataSource={data} />
                </div>
                <div>
                    {ceshi}
                </div>
                <Modal
                    title="Basic Modal"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    name: <Input placeholder="name" />
                    age: <Input placeholder="age" />
                    address: <Input placeholder="address" />
                    hobby: <Checkbox.Group options={this.state.plainOptions}  value={this.state.hobbyArr} onChange={() => this.onChange()} />

                </Modal>
            </div>
        )
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = e => {
        // console.log(e);
        this.setState({
          visible: false,
        });
    };
    
      handleCancel = e => {
        // console.log(e);
        this.setState({
          visible: false,
        });
    }
    onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
      }
}
const mapStateToProps = state => ({
    columns: state.pzpt_table.lie,
    data: state.pzpt_table.data_source,
    ceshi: state.pzpt_chakanshuju.testData
})
const mapDispatchToProps = dispatch => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Table_page);