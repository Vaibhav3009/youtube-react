import React, { Component } from 'react'

 class SearchBar extends Component {

    state = {text:''}

    handleChange = (e) =>{
    
        this.setState({text:e.target.value})
        


    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onSearch(this.state.text)
    }
    render() {
        return (
            <div style={{background:'#080808'}} className='search-bar ui segment'>
                <form className='ui form' onSubmit={ (e) =>this.handleSubmit(e)}>
                    <div className='field'>
                        <label style={{color:'whitesmoke',fontSize:'1.2em'}}>Search Video</label>
                        <input style={{background:'#0f0f0f',color:'white'}}  type='text' placeholder='Search' value={this.state.text} onChange={(e)=>this.handleChange(e) }></input>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar
