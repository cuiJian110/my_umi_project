import {  Divider, Tag } from 'antd';
export default {
    namespace: 'pzpt_table',
    state: {
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
                    // console.log(text);
                    // console.log(record);
                    return (
                        <span>
                        <a>Invite {record.name}</a>
                        <Divider type="vertical" />
                        <a>Delete</a>
                        </span>
                    )
              }
            },
          ], 
        data_source: [
            {
              key: 1,
              name: '111John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              hobby: ['nice', 'developer'],
            },
            {
              key: 2,
              name: '222Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              hobby: ['loser'],
            },
            {
              key: 3,
              name: '333Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              hobby: ['cool', 'teacher'],
            },
          ]
    },
    reducers: {
        addItem(state, actions) {
          const cn = JSON.parse(JSON.stringify(state));
          cn.data_source.push(actions.item);
          return cn;
        }
    }
}