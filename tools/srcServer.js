import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open'; //open the default browser //tools folder should be in the root folder
import MongoDB from 'mongodb'
import bodyParser from 'body-parser';
/* eslint-disable no-console */

const port = 8080;
const app = express();
const MongoClient = MongoDB.MongoClient;
const compiler = webpack(config);
var db;

MongoClient.connect('mongodb://milangupta511:jaishriram@ds143151.mlab.com:43151/user-data', (err,database)=>{
	if(err) return console.log(err);
	db=database
	app.listen(port, function(err) {
	  if (err) {
	    console.log(err);
	  } else {
	    open(`http://localhost:${port}/app`);
	}

})

app.use(bodyParser.urlencoded({extended:true}));
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/api/', (req, res)=>{
	db.collection('comments').find().toArray((err,result)=>{
		if(err) return console.log(err);
		console.log(result);
		res.json(result);
	})
})
app.use(require('webpack-hot-middleware')(compiler));

app.get('/app', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});
app.get('*', (req,res)=>{
	console.log('here');
    res.sendFile(path.join( __dirname, '../404.html'));
})


});
