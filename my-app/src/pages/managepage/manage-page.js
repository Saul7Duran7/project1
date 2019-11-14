import React, {Component} from 'react'


class ManagePage extends Component {
    render(){
        return(
            
         
                <div>
                  <title>Manage-Page</title>
                  <link rel="stylesheet" href="Stylesheet.css" />
                  <div className="grid-container">
                    <div className="item1">
                      <a href="manage-page.html">Manage Page</a> 
                      <a href="preview-page.html">Manage Preview</a>
                      <h1>Manage Page</h1>     
                    </div>    
                    <div className="item2">
                      <dd /><dt><h2>Shows</h2></dt>
                      <dl><button onclick="clicked()">Show1</button> <button onclick="clicked()" className="a">-</button></dl>
                      <dl><button>Show2</button> <button className="b">-</button></dl>
                    </div>         
                    <div className="item3">
                      <dd>
                      </dd><dt /><dt><h2>New/Edit Show</h2></dt>
                      <dl>Name: <textarea defaultValue={"  "} />
                      </dl>
                      <dl>Rating: <textarea defaultValue={"  "} /></dl>
                      <dl>Image Url: <textarea defaultValue={"  "} /></dl>
                      <dl><button>Create/Update</button></dl> 
                    </div>
                                      </div>
                </div>
              )
            }
          }
            
        
export default ManagePage;

