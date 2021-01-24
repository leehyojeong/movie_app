import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async()=>{
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount(){
    // 이 부분에서 datat fetch
    this.getMovies();
  }
  render(){
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading? "Loading":"We are ready"}
      </div>
    );
  }
}

export default App;
