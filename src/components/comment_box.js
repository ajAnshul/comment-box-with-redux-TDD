import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';



class Comment_box extends Component{
  constructor(props){
    super(props);
    this.state = {
      comment:''
    }
  }
  handleChange(event){
    this.setState({comment:event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.saveComments(this.state.comment);
    this.setState({comment:''})
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)} className="comment_box">
        <h4>Add a comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange.bind(this)}  />
        <div>
        <button>Submit Button </button>
        </div>
      </form>
    );
  }
}


export default connect(null,actions)(Comment_box);
