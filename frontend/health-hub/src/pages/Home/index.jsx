import './styles.css';
import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { posts: [] };
    }

    render(){
        return(
            <h1 className='text-3xl font-bold underline'>Hello World</h1>
        )
    }
}

export default Home;
