import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import Header from './Header'
import Admin from './Admin'
import './index.css'

//React Weather Component
class Weather extends Component {

    constructor(){
        super()
        this.state = {
            weather: "Cloudy",
        }
    }

    changeWeather(newWeather){
        this.setState({
            weather: newWeather,
        })
    }

    render() {
        const { temp, incTemp, decTemp, weather, chgWeather } = this.props
        return (
            <div className="App">

                <div className="App-header">
                    <h2>React Weather</h2>
                </div>
                <Header weather={weather} temp={temp}/>
                <Admin weather={chgWeather} increase={incTemp} decrease={decTemp}/>
            </div>
        )
    }
}


//Actions
const increaseTempAction = { type: 'INCTEMP' }
const decreaseTempAction = { type: 'DECTEMP' }
function changeWeather(x) {
    return { type: 'CHGWEATHER', weather: x }
}

//reducer
function reducer(state = { temp: 80, weather: 'Bad' }, action){
    const temp = state.temp
    let weather
    if (action.weather){
        weather = action.weather
    } else {
        weather = state.weather
    }
    switch(action.type){
        case 'INCTEMP':
            return {
                temp: temp + 1,
                weather: weather,
            }
        case 'DECTEMP':
            return {
                temp: temp -1,
                weather: weather,
            }
        case 'CHGWEATHER':
            return {
                temp: temp,
                weather: weather,
            }
        default:
        return state
    }
}

//Store with overrides for Chrome Redux dev tools.
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//Map Redux state to props
function mapStateToProps(state){
    return {
        temp: state.temp,
        weather: state.weather
    }
}

//Map Redux dispatch to props
function mapDispatchToProps(dispatch) {
    return {
        incTemp: () => dispatch(increaseTempAction),
        decTemp: () => dispatch(decreaseTempAction),
        chgWeather: (x) => dispatch(changeWeather(x)),
    }
}

//Connect Redux to React App
const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(Weather)


//Render DOM
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
)
