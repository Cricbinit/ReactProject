import React from 'react'
const UpdateComponent = (OrignalComponent) => {
    class NewComponent extends React.Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        Increment = ()=>{
            this.setState({count:this.state.count+1})
        }
        render(){
            return(<>
<OrignalComponent count={this.state.count} Increment = {this.Increment}/>
            </>)
        }
    }
    return NewComponent;
}
export default UpdateComponent


