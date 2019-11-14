import React, {Component} from 'react'
import TVShow from '../../components/components/tvshow'
import propTypes from 'prop-types';



class ManagePage extends Component {
    
  
  
  static propTypes = {
    show: propTypes.array.isRequired,
    tvShowDeleted: propTypes.func.isRequired,
    saveTVShow: propTypes.func.isRequired,
    tvShows: propTypes.array,
  }
  state = {
  name: '',
  phnumber: '',
  email: '',
  id: '',
  };
      
  tvShowSelected = (event) => {
    let id=event.currentTarget.id;
    this.setState({
      name:this.props.tvShows[id].name, 
      phnumber:this.props.tvShows[id].phnumber, 
      email:this.props.tvShows[id].email,
      id: this.props.tvShows[id]._id,
    })
  }
  
  
  tvShowDeleted = (event) => {
    let id=event.currentTarget.id;
    this.props.tvShowDeleted(id)
  }
  saveTVShow = () => {
    this.props.saveTVShow({
      name:this.state.name, 
      phnumber:this.state.phnumber, 
      email:this.state.email,
      id:this.state.id
    })
    this.setState({
      name: '', 
      phnumber: '', 
      email:'',
      id: ''
    })
  }
  updateTVShow = () => {
    this.props.updateTVShow({
      name:this.state.name, 
      phnumber:this.state.phnumber, 
      email:this.state.email,
      id:this.state.id
    })
    this.setState({
      name: '', 
      phnumber: '', 
      email:'',
      id: ''
    })
  }
  
  // static propTypes = {
  //   show: propTypes.array.isRequired,
  //   tvShowDeleted: propTypes.func.isRequired,
  //   saveTVShow: propTypes.func.isRequired,
  //   tvShows: propTypes.array,
  // }

  
  // state = {
  //   name: '',
  //   rating: '',
  //   url: '',
  //   };
           

          
     
           
        //   show = ( ) => {
        //    let newShow = this.state.show 
        //    this.setState({
        //      show: newShow  
        //                })
        //  }
       

        // tvShowSelected = (event) => {
        //   let id=event.currentTarget.id;
        //   this.setState({
        //     name:this.props.tvShows[id].name, 
        //     rating:this.props.tvShows[id].rating, 
        //     url:this.props.tvShows[id].url
        //   })
        // }
        

        // tvShowDeleted = (event) => {
        //   let id=event.currentTarget.id;
        //   this.props.tvShowDeleted(id)}
          
         
        //   saveTVShow = () => {
        //     this.props.saveTVShow({
        //       name:this.state.name, 
        //       rating:this.state.rating, 
        //       url:this.state.url
        //     })
        //     this.setState({
        //       name: '', 
        //       rating: '', 
        //       url:''
        //     })
        //   }

       
        //   let i=0
        //   for(let show of this.props.tvShows){
        //     console.log(show);
        //     shows.push(<TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name={show.name} allowDelete={true}/>)
        //   }
        //   return this.props.tvShows
        // }

// renderShows = () => { return (<TVShow  selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name="Full House"  name={this.state.show.name} allowDelete = {true}  />)}
     
renderShows = () => {
  return this.props.tvShows.map((show, i) => {
    return <TVShow key={i} id={i} selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name={show.name} allowDelete={true}/>
  })}
  
  
  
  render(){
    
    
        return(
                
          
         
           
                
                <div>               
                      

                 <title>Contact List</title>
                   
                   <div className="grid-container">
                       <div className="item1">
                          <h3>{this.props.links}</h3>
                     {/* <a href="manage-page.html">Manage Page </a> 
                     <a href="preview-page.html">Manage Preview</a> */}
                     <h1>Contact List</h1> 
                   </div>    
                   <div className="item2">
                     
                  
                     <dd /><dt><h2>Contact List</h2></dt>
                     
                  
                   <h4>{this.renderShows()}</h4>
                     
                 {/* renderShows = () => {<TVShow  selectHandler={this.tvShowSelected} deleteHandler={this.tvshowDeleted} name="Full House"  allowDelete={true}  />} */}


                      {/* <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvshowDeleted} name="Noticiero Univision" allowDelete={true}/>   */}
                     {/* <dl><button>Show1</button><button>-</button></dl>
                     <dl><button>Show2</button><button>-</button></dl> */}
                      
                   </div>         
                   <div className="item3">
                  
                     <dt><h2>New/Edit Contact</h2></dt>
                    
                    <dl> Name: <input id="name" type="text" value={this.state.name} onChange={(event)=>{
              this.setState({  name: event.target.value   })}
              }/> </dl>
                                
                    <dl>  Phone Number:      <input id="rating" type="text" value={this.state.phnumber} onChange={(event)=>{
              this.setState({   phnumber: (event.target.value ) }) }}/>   </dl>

                    <dl>  E-Mail: <input id="url" type="text" value={this.state.email} onChange={(event)=>{
              this.setState({
                email: event.target.value
              })
            }}/> </dl>

                     




                     {/* <dl>Name: <input type="text" onChange={this.setState}  defaultValue={this.state.name} ></input>
                     </dl> */}
                        

                     {/* <dl>Rating: <textarea defaultValue={"  "} /></dl> */}
                     {/* <dl>Image Url: <textarea defaultValue={"  "} /></dl> */}
                     <dl><input type="button" onClick={this.saveTVShow} value="Create/Update"  /></dl>
                   </div>
                   </div>
               </div>
              )
            }
          }
            
 
     ManagePage.propTypes = {
      // show: PropTypes.string,
      // allowDelete: PropTypes.bool,
      name: propTypes.string,
      phnumber: propTypes.string,
      email: propTypes.string
  }    
export default ManagePage