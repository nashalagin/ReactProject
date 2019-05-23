import React from "react";



class YourIp extends React.Component{
    render(){

        return (
            <form>
                <div  class="Fields">
                <button class="button" type="button" onClick={this.props.method}>Get my ip adress</button><br></br>
                Ip-adress: <input id="ipVal"></input>
                <button  class="button" type="button" onClick={this.props.getInf}>Get Info</button>     
                </div>
            </form> 
        )
    }

}

export default YourIp;