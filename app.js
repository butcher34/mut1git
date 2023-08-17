const express = require("express");
const bodyParser = require("body-parser");
var sessionstorage = require('sessionstorage');
const ejs = require("ejs");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("main");
  });

  
app.get("/subscribe", function(req, res){
  res.render("subscribe");
});

app.get("/sign-up", function(req, res){
  res.render("sign-up");
});

app.get("/sign-up-doc", function(req, res){
  res.render("sign-up-doc");
});

app.get("/see-email", function(req, res){
  res.render("see-email");
});

app.get("/show-appointment", function(req, res){
  res.render("show-appointment");
});

app.get("/search", function(req, res){
  res.render("search");
});

app.get("/records", function(req, res){
  res.render("records");
}); 

app.get("/momRecords", function(req, res){
  res.render("momRecords");
}); 

app.get("/questions", function(req, res){
  res.render("questions");
}); 

app.get("/OTP", function(req, res){
  res.render("OTP");
});

app.get("/news", function(req, res){
  res.render("news");
})

app.get("/log-in", function(req, res){
  res.render("log-in");
})

app.get("/mom-pfp", function(req, res){
  res.render("mom-pfp");
})

app.get("/doc-pfp", function(req, res){
  res.render("doc-pfp");
})

app.get("/doc-dash", function(req, res){
  res.render("doc-dash");
})

app.get("/know-doc", function(req, res){
  res.render("know-doc");
})

app.get("/forgot-password", function(req, res){
  res.render("forgot-password");
})

app.get("/doctors", function(req, res){
  res.render("doctors" );


})

app.get("/contact-us", function(req, res){
  res.render("contact-us");
})

app.get("/comment-sec", function(req, res){
  res.render("comment-sec");
})

app.get("/chat-dm", function(req, res){
  res.render("chat-dm");
})

app.get("/articles", function(req, res){
  res.render("articles");
})

app.get("/article/:index", function(req, res){

  res.render("article");
})

app.get("/article-doc", function(req, res){

  res.render("article-doc");
})

app.get("/appointment/:index", function(req, res){
  res.render("appointment");
})

app.get("/appointment-doc", function(req, res){
  res.render("appointment-doc");
})

app.get("/article-publish", function(req, res){
  res.render("article-publish");
})

  app.listen(3000, function() {
    console.log("Server started on port 3000");
  });