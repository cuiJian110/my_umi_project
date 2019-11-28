import React, { Component } from 'react';
import { Card, Button, Checkbox  } from 'antd';
import {connect} from 'dva';
class Kapian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  render() {
    const {jiayi, jianyi, delyi, changeItem, additem, changeAll} = this.props;
    const total = this.getTotal();
    const lastId = this.getLastId();
    const select = this.getSelect();
    const money = this.getMoney();
    const isAll = this.getIsAll();
    return (
      <div>
        <div>
            <Checkbox onChange={(e) => changeAll(e)} checked={isAll}>全选</Checkbox>
            <Button onClick={() => additem(lastId+1)}> 添加shangpin </Button>
        </div>
        {
          this.props.spList.map(item => {
            return (
              <div key={item.id}>
                  <Checkbox onChange={() => changeItem(item.id)} checked={item.isChecked}></Checkbox>
                  name: {item.name}
                  num: {item.num}
                  price: {item.price}
                  <Button onClick={() => jiayi(item.id)}>+1</Button>
                  <Button onClick={() => jianyi(item.id)}>-1</Button>
                  <Button onClick={() => delyi(item.id)}>del_1</Button>
              </div>
            );
          })
        }
        <div>
            全部：{total}
            选中：{select}
            共：{money} ￥
        </div>
        
      </div>
    );
  }
  componentDidMount() {
    this.props.onDidMount();
  }
  getTotal = () => {
      return this.props.spList.length;
  }
  getLastId = () => {
      return this.props.spList[this.getTotal() - 1].id;
  }
  getSelect = () => {
      return this.props.spList.reduce((p,i) => {
        if(i.isChecked) {
            p++;
        }
        return p;
      },0)
  }
  getIsAll = () => {
      if(this.getTotal() === this.getSelect()) {
          return true;
      } else {
          return false;
      }
  }
  getMoney = () => {
      return this.props.spList.reduce((p,i) => {
          if(i.isChecked) {
              p += i.num * i.price;
          }
          return p;
      }, 0)
  }
}
const mapStateToProps = state => ({
    spList: state.sp.list
})
const mapDispatchToProps = dispatch => ({
    onDidMount: () => {
        dispatch({
          type: `sp/queryInitCards`,
          url: "test_url_dongtai"
        });
      },
    jiayi(id) {
        const action = {
            type: "sp/jiayi",
            id,
        }
        dispatch(action);
    },
    jianyi(id) {
        const action = {
            type: "sp/jianyi",
            id
        }
        dispatch(action);
    },
    delyi(id) {
        const action = {
            type: "sp/delyi",
            id
        }
        dispatch(action);
    },
    changeItem(id) {
        const action = {
            type: "sp/changeItem",
            id
        }
        dispatch(action);
    },
    additem(id) {
        const item = { 
            id,
            name: `pingguo_${id}`, 
            num: 5, 
            price: 10, 
            isChecked: false
        };
        const action = {
            type: "sp/addItem",
            item
        }
        dispatch(action);

    },
    changeAll(e) {
        const action = {
            type: "sp/changeAll",
            value: e.target.checked
        }
        dispatch(action);
    }
})
  

export default connect(mapStateToProps, mapDispatchToProps)(Kapian);