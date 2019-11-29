import React from 'react';
import { Table, Button, Modal, Input, Checkbox, Divider, Tag ,Popconfirm, Icon} from 'antd';
import {connect} from 'dva';
class Table_page extends React.Component {
    constructor() {
        super();
        this.state = {
            visible: false,
            lie: [
                {
                  title: 'Name',
                  dataIndex: 'name',
                  key: 'name',
                  render: text => {
                    //   console.log(text);
                      return <a>{text}</a>
                  },
                },
                {
                  title: 'Age',
                  dataIndex: 'age',
                  key: 'age',
                  render: aaa => {
                    //   console.log(aaa);
                      return <span>{aaa}</span>
                  }
                },
                {
                  title: 'Address',
                  dataIndex: 'address',
                  key: 'address',
                },
                {
                  title: 'hobby',
                  key: 'hobby',
                  dataIndex: 'hobby',
                  render: hobby => (
                    <span>
                      {hobby.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                          color = 'volcano';
                        }
                        return (
                          <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                          </Tag>
                        );
                      })}
                    </span>
                  ),
                },
                {
                  title: 'Action',
                  key: 'action',
                  render: (text, record) => {
                        const title = "确定要删除"+record.name+"么？？？"
                        return (
                            <div>
                                <Button type="primary" onClick={() => this.handleEdit(record)}>编辑</Button>
                                <Popconfirm
                                    placement="topRight"
                                    title={title}
                                    icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
                                    onConfirm={() => this.handleDel(record)}
                                >
                                    <Button type="danger">删除</Button>
                                </Popconfirm>
                            </div>
                        )
                  }
                },
              ], 
            plainOptions: ['chifan', 'sleep', 'football'],
            modalObj: {
                name: "",
                age: "",
                address: "",
                hobby: [],
            }
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
                    <Table columns={this.state.lie} dataSource={data} />
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
                    name: <Input placeholder="name" value={this.state.modalObj.name} onChange={(e) => this.handleNameChange(e)}/>
                    age: <Input placeholder="age" value={this.state.modalObj.age} onChange={(e) => this.handleAgeChange(e)}/>
                    address: <Input placeholder="address" value={this.state.modalObj.address} onChange={(e) => this.handleAddressChange(e)} />
                    hobby: <Checkbox.Group options={this.state.plainOptions}  value={this.state.modalObj.hobby} onChange={(e) => this.handleHobbyChange(e)} />

                </Modal>
            </div>
        )
    }
    handleEdit = (item) => {
        console.log(item);
    }
    handleDel = (item) => {
        console.log(item);
    }
    handleNameChange = (e) => {
        const newobj = Object.assign({},this.state.modalObj, {name: e.target.value});
        this.setState({
            modalObj: newobj
        })
    }
    handleAgeChange = (e) => {
        const newobj = Object.assign({},this.state.modalObj,{age: parseInt(e.target.value)});
        this.setState({
            modalObj: newobj
        })
    }
    handleAddressChange = (e) => {
        const newobj = Object.assign({},this.state.modalObj, {address: e.target.value});
        this.setState({
            modalObj: newobj
        })
    }
    handleHobbyChange = (checkedValues) => {
        const newobj = Object.assign({},this.state.modalObj,{hobby: checkedValues});
        this.setState({
            modalObj: newobj,
        })
    }
    getLastKey = () => {
        return parseInt(this.props.data[this.props.data.length - 1].key);
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = e => {
        // console.log(e);
        // console.log(this.state.modalObj)
        const item = Object.assign({},this.state.modalObj,{key: this.getLastKey()+1});
        console.log(item)
        this.props.addItem(item);
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
    
}
const mapStateToProps = state => ({
    columns: state.pzpt_table.lie,
    data: state.pzpt_table.data_source,
    ceshi: state.pzpt_chakanshuju.testData
})
const mapDispatchToProps = dispatch => ({
    addItem(item) {
        const action = {
            type: "pzpt_table/addItem",
            item,
        }
        dispatch(action);
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Table_page);