import React from 'react';
import axios from 'axios';
import Titles from './components/Titles/Titles';
import Form from './components/Form/Form';
import Weather from './components/Weather/Weather';


const API_KEY = "1b799e71a3d9f9ebe462d8b323d6fb32";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  
  getWeather = async(e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;


      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}id=524901&APPID=${API_KEY}`)
        .then(res => {
            if(city && country) {
              console.log(res);
              this.setState({
                temperature: (res.data.main.temp - 273.15).toFixed(2),
                city: res.data.name,
                country: res.data.sys.country,
                humidity: res.data.main.humidity,
                description: res.data.weather[0].description,
                error: ""
              })
            }else {
              this.setState({
                temperature: undefined,
                city: undefined,
                country: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please Enter the values"
              })
            }
        })
        .catch(err => {
          console.log(err);
        })
  }


  render() {
    return (
      <div>
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Titles />
                  </div> 
                  <div className="col-xs-7 form-container">
                    <Form getWeather={this.getWeather}/>
                    <Weather 
                      temperature={this.state.temperature} 
                      city={this.state.city} 
                      humidity={this.state.humidity}
                      description={this.state.description}
                      error={this.state.error}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
};

export default App;


