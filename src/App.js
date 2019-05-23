import React from 'react';
import './App.css';
import Info from './components/info';
import YourIp from './components/yourIp';
const api_key=`6c4a11331f674fd69c84b866a01c2d36`;


class App extends React.Component{

  state={
    ipAdress: undefined,
    country: undefined,
    countryFlag: undefined,
    region: undefined,
    city: undefined,
    timeZone: undefined,
    provider: undefined,
    currency: undefined,
    date: undefined,
    error:""
  }

  getInfoIp = async ()=>{
    const ip=document.getElementById("ipVal").value;
    const request = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${api_key}&ip=${ip}&lang=ru`);
    const data = await request.json();
    if(data.city!==undefined){
    this.setState({
      country: data.country_name,
      countryFlag: data.country_flag,
      region: data.state_prov,
      city: data.city,
      provider: data.isp,
      currency: data.currency.code,
      error: ""
    })
    this.getInfoTime(ip);
  }
  else{
    this.setState({
      country: undefined,
      countryFlag: undefined,
      region: undefined,
      city: undefined,
      timeZone: undefined,
      provider: undefined,
      currency: undefined,
      date: undefined,
      error: "Не получилось получить ответ от сервера!"
    });
  }
  }

  getInfoTime = async (ip) =>{
      const request = await fetch(`https://api.ipgeolocation.io/timezone?apiKey=${api_key}&ip=${ip}&lang=ru`);
      const data = await request.json();
      this.setState({
        timeZone: data.timezone,
        date: data.date_time_txt
      }); 
  }

  getIp = async(e)=>{
    e.preventDefault();
    const request = await fetch(`https://api.ipify.org`);
    const ip = await request.text();
    document.getElementById("ipVal").value=ip;
  }

  render(){
      return (
      <div class="App-header">
        <h1>Getting information by ip-adress</h1>
        <YourIp
        method={this.getIp}
        getInf={this.getInfoIp}
        setState={this.setState}
        />
        <Info 
          country={this.state.country} 
          city={this.state.city}
          region={this.state.region}
          flag={this.state.countryFlag}
          timeZone={this.state.timeZone}
          provider={this.state.provider}
          hostname={this.state.hostname}
          currency={this.state.currency}
          date={this.state.date}
          error={this.state.error}
        />
      </div>);  
    }
  
  }
    

export default App;
