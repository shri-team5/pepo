Object.assign || (Object.assign = require('object-assign'));

var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    serveStatic = require('serve-static'),
    cookieParser = require('cookie-parser'),
    expressSession = require('express-session'),
    slashes = require('connect-slashes'),
    passport = require('passport'),

    config = require('./config'),
    staticFolder = config.staticFolder,
    http = require('http'),
    Render = require('./render'),
    render = Render.render,
    dropCache = Render.dropCache,

    port = process.env.PORT || config.defaultPort,
    isSocket = isNaN(port),
    isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'grimfri';

require('./passport')(passport);

app
    .disable('x-powered-by')
    .enable('trust proxy')
    .use(favicon(path.join(staticFolder, 'favicon.ico')))
    .use(serveStatic(staticFolder))
    .use(morgan('combined'))
    .use(cookieParser())
    .use(bodyParser.urlencoded({extended: true}))
    .use(expressSession({
        resave: true,
        saveUninitialized: true,
        secret: config.sessionSecret
    }))
    .use(passport.initialize())
    .use(passport.session())
    .use(slashes());
// TODO: csrf, gzip

// routers import
const authRouter = require('./routers/auth.js');
const tweetsRouter = require('./routers/tweets');
const searchRouter = require('./routers/search');
const profileRouter = require('./routers/profile');
const registrationRouter = require('./routers/registration');
const settingsRouter = require('./routers/settings');

// middleware import
const isLoggedIn = require('./middleware').isLoggedIn;
const isRegisteredIn = require('./middleware').isRegisteredIn;

authRouter(app, passport);
app.get('/', isLoggedIn, isRegisteredIn, tweetsRouter);
app.use('/registration', isLoggedIn, registrationRouter);
app.use('/tweets',isLoggedIn,isRegisteredIn,  tweetsRouter);
app.use('/search',isLoggedIn,isRegisteredIn,  searchRouter);
app.use('/profile',isLoggedIn,isRegisteredIn, profileRouter);
app.use('/settings',isLoggedIn,isRegisteredIn, settingsRouter);

app.get('*', function (req, res) {
    res.status(404);
    return render(req, res, {view: '404'});
});

if (isDev) {
    app.get('/error/', function () {
        throw new Error('Uncaught exception from /error');
    });

    app.use(require('errorhandler')());
}

app.listen(port, function () {
    isSocket && fs.chmod(port, '0777');
    console.log('server is listening on', this.address().port);
});
