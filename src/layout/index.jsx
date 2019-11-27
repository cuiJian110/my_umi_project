import React from 'react';
class LayOut extends React.Component {
    render() {
        const style_header = {
            height: "60px",
            lineHeight: "60px",
            backgroundColor: "skyblue",
            textAlign: "center",
            fontSize: "20px"
        }
        return (
            <div>
                <div style={style_header}>layout_01</div>
                {this.props.children}
            </div>
        )
    }
}
export default LayOut;