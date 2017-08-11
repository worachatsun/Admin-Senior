import React, { Component } from 'react';
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
import { Router, Route, Link, hashHistory } from 'react-router'

class Routes extends Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={Login} />
                <Route path='/regis' component={Regis} />
                <Route path='/reset' component={Reset} />
                <Route path='/resetSuccessful' component={ResetSuccessful} />

                <Route path='/Dashboard' component={Dashboard} />
                
                <Route path='/News/All' component={NewsPageAll} />
                <Route path='/News/Add' component={NewsPageAdd} />
                <Route path='/News/Detail' component={NewsPageDetail} />
                <Route path='/News/Edit' component={NewsPageEdit} />

                <Route path="/Events/All" component={EventsPageAll} />
                <Route path="/Events/Add" component={EventsPageAdd} />
                <Route path="/Events/Detail" component={EventsPageDetail} />
                <Route path="/Events/Edit" component={EventsPageEdit} />

                <Route path="/Donates/All" component={DonatePageAll} />
                <Route path="/Donates/Add" component={DonatePageAdd} />
                <Route path="/Donates/Detail" component={DonatePageDetail} />
                <Route path="/Donates/Edit" component={DonatePageEdit} />

                <Route path="/Careers/All" component={CareerPageAll} />
                <Route path="/Careers/Add" component={CareerPageAdd} />
                <Route path="/Careers/Detail" component={CareerPageDetail} />
                <Route path="/Careers/Edit" component={CareerPageEdit} />

                <Route path="/Alumni/All" component={profileAll} />
                <Route path="/Alumni/Detail" component={profileDetail} />
                <Route path="/Alumni/Edit" component={profileEdit} />
                
                <Route path="/Inbox" component={Inbox} />
            </Router>
        );
    }
}

export default Routes;