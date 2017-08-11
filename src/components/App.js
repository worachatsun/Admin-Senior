import React, { Component } from 'react'
import SideNavBar from './SideNavBar'
import TopNavBar from './TopNavBar'
import Footer from './Footer'
import Dashboard from './Dashboard'
import NewsPageAll from './NewsPageAll'
import NewsPageAdd from './NewsPageAdd'
import NewsPageDetail from './NewsPageDetail'
import NewsPageEdit from './NewsPageEdit'
import EventsPageAll from './EventsPageAll'
import EventsPageAdd from './EventsPageAdd'
import EventsPageEdit from './EventsPageEdit'
import EventsPageDetail from './EventsPageDetail'
import CareerPageAdd from './CareersPageAdd'
import CareerPageAll from './CareersPageAll'
import CareerPageDetail from './CareersPageDetail'
import CareerPageEdit from './CareersPageEdit'
import DonatePageAll from './DonatesPageAll'
import DonatePageAdd from './DonatesPageAdd'
import DonatePageDetail from './DonatesPageDetail'
import DonatePageEdit from './DonatesPageEdit'
import profileAll from './ProfileAlumniPageAll'
import profileDetail from './ProfileAlumniPageDetail'
import profileEdit from './ProfileAlumniPageEditProfile'
import Inbox from './InboxPageContent'
import Login from './Authentication/Login'
import Regis from './Authentication/Register'
import Reset from './Authentication/ResetPassword'
import ResetSuccessful from './Authentication/ResetSuccessful'
import Routes from './Routes'
import { Provider } from 'react-redux'
import { configureStore } from '../store'
import { Router, Route, Link, hashHistory } from 'react-router'
class App extends Component {

    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    <Provider store={configureStore()}>
                       <Routes/>
                    </Provider>
                </div>
            </div>
        )
    }
}

export default App