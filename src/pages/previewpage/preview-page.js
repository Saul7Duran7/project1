
import React, {Component} from 'react'
import TVShow from '../../components/components/tvshow';
import propTypes from 'prop-types';

class PreviewPage extends Component {
  static propTypes = {
    show: propTypes.array.isRequired,
    tvShows: propTypes.array,
  }

  state = {
    tvShowSelected: {
        name: 'Show',
        phnumber: 'Rating',
        email: 'E-mail',
    }
  };
  // calculateAvgRating = () => {  
  //    const tvShows = this.props.tvShows;
     
  //    console.log(tvShows)
     
  //    if (tvShows.length >=1) {
  //    const sumRating = tvShows.reduce((acc,value) => ({rating: acc.rating + value.rating}));
  //    const avgRating = (sumRating.rating / tvShows.length);
  //    return (<h4>Average Rating: {avgRating}</h4>);
  //  }else {
  //    return (<h4>Average Rating: 0</h4>);
  //  }}
     
     
  //   const tvShows = this.props.tvShows;
  //   if (tvShows >=1) {
  //   const sumRating = tvShows.reduce((a,b) => ({rating: a.rating + b.rating}));
  //   const avgRating = (sumRating.rating / tvShows.length).toFixed(1);

  //   //  const sumRating = avtvShows.reduce((a, b) => a+b)

  //   //  const avgRating = sumRating / this.tvshows.rating.length
  //    if (tvShows >=1 )
  //      return (<h4>Average Rating: {avgRating}</h4>)
  //   else 
  //      return (<h4>Average Rating: 0</h4>);
  // }

 
 

  renderShows = () => {
    return this.props.tvShows.map((show, i) => {
      return <TVShow key={i} id={i} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name={show.name} allowDelete={false}/>
    })}
tvShowSelected = (event) => {
  let id=event.currentTarget.id;
    this.setState({
        tvShowSelected:{
          name:this.props.tvShows[id].name, 
          phnumber:this.props.tvShows[id].phnumber, 
          email:this.props.tvShows[id].email
        }
      })
}
  render(){
	
	
    return (
     
      <div className="grid-container">  
       <div className="item1">
         <h1>Preview Contact List Page</h1> 

       </div>   
                  <div className = "item2">
                  <h2>Contact List</h2>
                  <h4>{this.renderShows()}</h4>
            
              
                  
                </div>  
                 <div className= "item3">
                   <h5>{this.state.tvShowSelected.name}</h5>
                   <h5>{this.state.tvShowSelected.phnumber}</h5>
                   <h5>{this.state.tvShowSelected.email}</h5>
               
                  </div>
            </div>
        
      )
      }
      }



 PreviewPage.propTypes = {
    // title: PropTypes.string,
    // allowDelete: PropTypes.bool,
    name: propTypes.string,
    phnumber: propTypes.string,
    email: propTypes.string
}    
export default PreviewPage