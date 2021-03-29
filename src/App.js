import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import TrackerView from './views/TrackerView'
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Certificate } from './views/Certificate';



const MyApp = () => (
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route exact path='/' component={TrackerView} />
                <Route exact path='/certificate/:trackedEntityInstance' component={Certificate} />
            </Switch>
        </HashRouter>
    </Provider>
)

export default MyApp
