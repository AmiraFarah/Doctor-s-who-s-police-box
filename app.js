class Divone extends React.Component {


  render() {
    return (
      <div>
 
{/* 
         <h1  onClick={() => { return this.props.handleClick(this.props.name) }} >
          {this.props.name}
        </h1> */}
          <Divtwo name2={this.props.name} handleClick={this.props.handleClick}/>

      </div>
    )
  }
}

//============================
class Divtwo extends React.Component{
render(){
return(
  <div>
{/* <h1  onClick={() => { return this.props.handleClick(this.props.name2) }}>
  {this.props.name2}
</h1> */}
  <Divthree name3={this.props.name2} handleClick={this.props.handleClick}/>

  <Divthree name3={this.props.name2} handleClick={this.props.handleClick}/>
  </div>
)
}
}

//==================================
class Divthree extends React.Component{
  render(){
    return(
      <div>
<h1  onClick={() => { return this.props.handleClick(this.props.name3) }}>
  {this.props.name3}
</h1>
      </div>
    )
  }
}

//==============================

class App extends React.Component {


  state = {
    tardis: {
      name: 'TIME AND RELATIVE DIMENSION IN SPACE',
      caps: true
    }
  }


  handleClick = (text) => {
    console.log(this.state.tardis.name, 'tt')
    this.state.tardis.caps ?
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
      :
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
  }


  render() {
    return (
      <div>
        <div >
          <Divone  name={this.state.tardis.name} handleClick={this.handleClick}/>


        </div>
      </div>

    )
  }
}
ReactDOM.render(<App />, document.querySelector('.container'))