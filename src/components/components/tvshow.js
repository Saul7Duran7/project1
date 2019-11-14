import React, {Component} from 'react'
import propTypes from 'prop-types'


       
    
class TVShow extends Component  {     
    
       
 
    
    
    renderDelete = () => {
        if (this.props.allowDelete === true){
            return(
                
                <button onClick={this.props.deleteHandler} id={this.props.id} className="Remove">-</button>
            )
            }
        }

    render(){

        return (

                <div>
                    <button onClick={this.props.selectHandler} className="Shows" id={this.props.id}>{this.props.name}</button>
                    {this.renderDelete()}
                </div>

        )

    }

}          





 


TVShow.propTypes = {
    name: propTypes.string.isRequired,
    allowDelete: propTypes.bool,
    selectHandler: propTypes.func.isRequired,
    deleteHandler: propTypes.func,
}

export default TVShow 