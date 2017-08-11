let API_URL = 'http://10.1.150.79:3000/v1'

exports.POST_CREATE_NEWS_URL = `${API_URL}/createNews`
exports.GETNEWS_URL = `${API_URL}/getNews`
exports.UPDATE_EDIT_NEWS_URL = `${API_URL}/editNews`

exports.POST_CREATE_EVENTS_URL = `${API_URL}/createEvent`
exports.GETEVENTS_URL = `${API_URL}/getEvent`
exports.UPDATE_EDIT_EVENTS_URL = `${API_URL}/editEvent`

exports.POST_CREATE_CAREERS_URL = `${API_URL}/createCareer`
exports.GETCAREERS_URL = `${API_URL}/getCareer`
exports.GET_ALL_CAREERS_URL = `${API_URL}/getAllCareer`
exports.UPDATE_EDIT_CAREERS_URL = `${API_URL}/editCareer`

exports.POST_CREATE_DONATES_URL = `${API_URL}/createDonation`
exports.GETDONATES_URL = `${API_URL}/getDonation`
exports.UPDATE_EDIT_DONATES_URL = `${API_URL}/editDonation`

exports.SIGNIN_URL = `${API_URL}/adminSignin`
exports.REGISTER_URL = `${API_URL}/register`
exports.RESET_PASSWORD_URL = `${API_URL}/resetPassword`