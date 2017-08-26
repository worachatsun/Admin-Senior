import React, { Component } from 'react';
import Dashboard from './Dashboard'
import NewsPageAll from './News/NewsPageAll'
import NewsPageAdd from './News/NewsPageAdd'
import NewsPageDetail from './News/NewsPageDetail'
import NewsPageEdit from './News/NewsPageEdit'
import EventsPageAll from './Events/EventsPageAll'
import EventsPageAdd from './Events/EventsPageAdd'
import EventsPageEdit from './Events/EventsPageEdit'
import EventsPageDetail from './Events/EventsPageDetail'
import CareerPageAdd from './Carees/CareersPageAdd'
import CareerPageAll from './Carees/CareersPageAll'
import CareerPageDetail from './Carees/CareersPageDetail'
import CareerPageEdit from './Carees/CareersPageEdit'
import DonatePageAll from './Donates/DonatesPageAll'
import DonatePageAdd from './Donates/DonatesPageAdd'
import DonatePageDetail from './Donates/DonatesPageDetail'
import DonatePageEdit from './Donates/DonatesPageEdit'
import profileAll from './AlumniProfile/ProfileAlumniPageAll'
import profileDetail from './AlumniProfile/ProfileAlumniPageDetail'
import profileEdit from './AlumniProfile/ProfileAlumniPageEditProfile'
import Inbox from './Inboxmessage/InboxPageContent'
import Login from './Authentication/Login'
import Regis from './Authentication/Register'
import Reset from './Authentication/ResetPassword'
import ResetSuccessful from './Authentication/ResetSuccessful'
import InboxConversation from './Inboxmessage/ChatConversation'
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
                <Route path="/Inbox/conversation" component={InboxConversation} />
            </Router>
        );
    }
}

export default Routes;