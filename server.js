const express = require("express")
const ejs = require("ejs");
const app = express();
const contentful = require('contentful')
const port = 2024;


app.use(express.static('public'))

app.use("/css", express.static(__dirname + '/public/css'))
app.use("/js", express.static(__dirname + '/public/js'))
app.use("/img", express.static(__dirname + '/public/img'))
app.use("/lib", express.static(__dirname + '/public/lib'))
app.use("/easing", express.static(__dirname + '/public/lib/easing'))
app.use("/slick", express.static(__dirname + '/public/lib/slick'))

// app.set('views', './views')
app.set("view engine", 'ejs')

app.get('/', (req, res) =>{
    res.render('index');
})


app.get('/business', (req, res) =>{
    res.render('business');
})
app.get('/economics', (req, res) =>{
    res.render('economics');
})
app.get('/international', (req, res) =>{
    res.render('international');
})
app.get('/lifestyle', (req, res) =>{
    res.render('lifestyle');
})
app.get('/localnews', (req, res) =>{
    res.render('localnews');
})
app.get('/politics', (req, res) =>{
    res.render('politics');
})
app.get('/sports', (req, res) =>{
    res.render('sports');
})
app.get('/technology', (req, res) =>{
    res.render('technology');
})
app.get('/breakingnews', (req, res) =>{
    res.render('breakingnews');
})
app.get('/national', (req, res) =>{
    res.render('national');
})

// app.get("/elitesnews", (req, res) => res.render("elitesnews"));

// CONTENTFUL API
const client = contentful.createClient({
  space: '9r7ilb8r2v3t',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'sJWrcjYGjggVaguwCwFUqjV7YN-zR6FbtV69KGkjnk4'
})

const allnewsIds = [];


const getAllnewsIds = async () => {
  await client.getEntries({ content_type: "elitesNews" }).then((res) => {
    const allItems = res.items;
    // console.log(allItems)
    allItems.forEach((item) => allnewsIds.push(item.sys.id));
  });

  // createRouteBasedOnId;
allnewsIds.forEach((newsid) => {
    app.get(`/elitesnews/${newsid}`, (req, res) => res.render("elitesnews"));
  });
};
getAllnewsIds();


// APP LISTENING
app.listen(port, ()=>{
    console.log(`App listening at port: ${port}`)
})