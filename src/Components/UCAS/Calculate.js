import React from 'react';
class Calculate extends React.Component {
    render(){
        return(
            <div>
                <h2>Points: {this.props.grade}</h2>
            </div>
        )
    }
}

export default Calculate