

import React, {Component} from 'react'
class PreviewPage extends Component {
 render(){
	 return(
	
		<div>
        <title>Preview-Page</title>
        <link rel="stylesheet" href="Stylesheet.css" />
        <div className="grid-container">
          <div className="item1">
            <a href="manage-page.html">Manage Page</a>
            <a href="preview-page.html">Preview Page</a>  	
            <h1>Preview Page</h1>
          </div>
          <div className="item2"><h2>Shows</h2>
            <button>Show1</button>
            <button>Show2</button>
          </div>
          <div className="item3">
            <dd>
            </dd><dt>
              <dl> <textarea defaultValue={"Show Name "} />
              </dl>
              <dl> <textarea defaultValue={"Rating "} /> </dl>
              <dl>Image</dl>
            </dt>
          </div>
        </div>  
      </div>

		)
	 }
	}
export default PreviewPage