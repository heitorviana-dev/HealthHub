import './styles.css';
import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = { posts: [] };
    }

    async componentDidMount(){
        const postsResponse = await fetch("http://localhost:8000/")
        const postsJson = await postsResponse.json();
        console.log(postsJson);
        this.setState({posts: postsJson});
    }

    render(){
        const { posts } = this.state;

        return(
            <h1 className='text-3xl font-bold underline'>{posts}</h1>
        )
    }
}

export default Home;
