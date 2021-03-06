import React, { Component } from 'react';
import TodoList from './components/TodoList'
import TodoInput from './components/TodoInput'

import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from "react-uuid";

export default class App extends Component {

    state={
      items:[],
      id:uuid(),
      item:"",
      editItem: false
    }
    
    handleChange=(e)=>{
      this.setState({
        item:e.target.value,
      })
    }

    handleSubmit=(e)=>{
       e.preventDefault();

      const newItem={
        id:uuid(),
        title:this.state.item,
      }

      console.log(newItem);

      const updatedArray= [...this.state.items, newItem];

      this.setState({
        items:updatedArray,
        id:uuid(),
        item:"",
        editItem:false,
      })
    }

    clearList=()=>{
      this.setState({
        items:[],
      })
    }

    handleDelete=(id)=>{
      const filterItem= this.state.items.filter(item=>item.id!==id)
      this.setState({
        items:filterItem
      })
    }

    handleEdit=(id)=>{
      const filterItem= this.state.items.filter(item=>item.id!==id)

      const selectedItem= this.state.items.find(item=>item.id===id)
      this.setState({
        items:filterItem,
        item:selectedItem.title,
        id:id,
        editItem:true,
      })
    }

  render() {
    return (
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
        <h3 className="text-capitalize text-center">Todo Input</h3>
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
        <TodoList  items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
        </div>
      </div>
    </div>
    );
  }
}
