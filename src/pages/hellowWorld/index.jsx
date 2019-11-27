import React from 'react';
class Page1 extends React.Component {
    constructor() {
        super();
        this.state = {
            test: "hellow"
        }
    }
    render() {
        return (
            <div>
                <div>
                    hellow world
                </div>
            </div>
        )
    }
    
}
export default Page1;