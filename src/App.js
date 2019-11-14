// import React from 'react';
import Logo from './logo.svg';
import './App.css';
import ManagePage from './pages/managepage/manage-page'
import PreviewPage from './pages/previewpage/preview-page'
import Navigation from './components/navigation/navigation'

import {Route} from 'react-router-dom'

import React, {Component} from 'react'






class App extends Component {



 
  state = {
    show: [],
    tvShows: [],
  };

//   async componentDidMount(){
// try{
//   const promise = await fetch('http://localhost:3001/getAllTvShows')
//   const response = await promise
//   this.setState({
//     tvShows: await response.json()
//   })
// }catch(err){
//   console.log(err)
// }
//   }
  
  componentDidMount() {
    this.renderTvShows()
  }

  renderTvShows = async () => {
    try {
      const promise = await fetch('http://localhost:3001/getAllTvShows')
      this.setState({
        tvShows: await promise.json()
      })
      // console.log(this.state.tvShows)
    } catch (err) {
      console.log(err)
    }
  }

  tvShowDeleted = async (id) => {
    try {
    let id2 = this.state.tvShows[id]._id
    const deleteid = await fetch(`http://localhost:3001/findShowWithId/${id2}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/JSON',},
    })
    await deleteid
    this.renderTvShows()
  } catch (err) {
    console.log(err)
  }}


  saveTVShow = async (show) => {
    try {
      const apiCall = await fetch('http://localhost:3001/tvDemo', {
        method: 'POST',
        body: JSON.stringify(show),
        headers: { 'Content-Type': 'application/JSON', },
      })
      await apiCall
      this.renderTvShows()
    } catch (err) {
      console.log(err)
    }
  }

  updateTVShow = async (id) => {
    try {
      let id2 = id.id
      let show = id
      const update = await fetch(`http://localhost:3001/updateShow/${id2}`, {
        method: 'PUT',
        body: JSON.stringify(show),
        headers: { 'Content-Type': 'application/JSON', },
      })
      await update
      this.renderTvShows()
    } catch (err) {
      console.log(err)
    }
  }

  // state = {
  //   show:[],
  //   tvShows:[],
  //   };       

  //   componentDidMount() {
  //     fetch('http://localhost:3001')
  //     .then(res => res.json())
  //     .then(tvShows => {
  //       this.setState({
  //         tvShows
  //       })
  //     })
  //   }
  //   // tvShowDeleted = (id) => {
  //   //   let deletetvShows= [...this.state.tvShows];
  //   //     deletetvShows.splice(id, 1);
  //   //     this.setState({tvShows: deletetvShows})
  //   // }
  
  //   tvShowDeleted = (id) => {
  //     let deletetvShows= [...this.state.tvShows];
  //       deletetvShows.splice(id, 1);
  //       this.setState({tvShows: deletetvShows})
  //       fetch('http://localhost:3001', {
  //     method: 'DELETE',
  //     headers: {'Content-Type': 'application/JSON',},
  //   }).then(response => {
  //     console.log(response)
  //   })
  // }
   
       
  //     // saveTVShow = (show) => {
  //     //   this.setState((prevState) => ({
  //     //     show,
  //     //     tvShows: [...prevState.tvShows, {
  //     //       name: show.name,
  //     //       rating: show.rating,
  //     //       url: show.url}    ]
  //     //     })
  //     //   )
  //     //   }

  //     saveTVShow = (show) => {
  //       console.log(show)
  //           fetch('http://localhost:3001', {
  //             method: 'POST',
  //             headers: {
  //               'Content-Type': 'application/json'
  //             },
  //             body: JSON.stringify(show)
  //           }).then(response => response.json())
  //             .then(data => {
  //               this.setState({
  //                 tvShows: data
  //               })
  //             })
  //           }

      renderManagePage = () => {
        return (
        <ManagePage show={this.state.show} tvShows={this.state.tvShows} tvShowDeleted={this.tvShowDeleted} saveTVShow={this.saveTVShow}/>
          )
      }
    
      renderPreviewPage = () => {
        return (
          <PreviewPage show={this.state.show} tvShows={this.state.tvShows} tvShowDeleted={this.tvShowDeleted} saveTVShow={this.saveTVShow}/>
        )
      }
    

  render() {
 
    // console.log(this.state)
 
    return(    
    <div className="app">      
    
    <Navigation/>
    <Route exact path = "/" render = {this.renderManagePage} />
    <Route exact path = "/preview-page" render = {this.renderPreviewPage} />
    
    </div>
       
  )
  } 
}



  export default App;