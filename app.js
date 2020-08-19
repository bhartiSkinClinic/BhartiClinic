const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  console.log(5);
  navlinks.classList.toggle("open");
});

window.onscroll = function () {
  myFunction();
};

var navbar = document.getElementById("navbar");
// var logo = document.getElementById("scrl");
var sticky = navbar.offsetTop;
var x = 30;
function myFunction() {
  if (window.pageYOffset >= x) {
    navbar.classList.add("sticky");
    // logo.classList.add("backk");
  } else {
    navbar.classList.remove("sticky");
    // logo.classList.remove("backk");
  }
}

var map, map1;

function initMap() {
  var myLatLng = { lat: 28.612949, lng: 77.229553 };
  var myLatLng1 = { lat: 18.633203, lng: 73.84207 };
  var mapOptions = {
    zoom: 13,
  };

  mapOptions.center = new google.maps.LatLng(28.612949, 77.229553);
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  mapOptions.center = new google.maps.LatLng(18.633203, 73.84207);
  map1 = new google.maps.Map(document.getElementById("map1"), mapOptions);

  var marker1 = new google.maps.Marker({
    position: myLatLng1,
    map: map1,
    title: "Hello World!  ",
  });
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Hello World!  ",
  });
}

var firebaseConfig = {
  apiKey: "AIzaSyAaNmGhtXLTdlUYXzzu4dGmv6k19XmoOHY",
  authDomain: "bharti-skin-clinic.firebaseapp.com",
  databaseURL: "https://bharti-skin-clinic.firebaseio.com",
  projectId: "bharti-skin-clinic",
  storageBucket: "bharti-skin-clinic.appspot.com",
  messagingSenderId: "808800579844",
  appId: "1:808800579844:web:a75fc634ad3cb9471fe051",
  measurementId: "G-X81VY65RCQ",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database = firebase.database();

var storageReff = firebase.storage().ref("banner");

storageReff
  .listAll()
  .then(function (result) {
    result.items.forEach(function (imageRef) {
      displayImage(imageRef);
      //console.log(imageRef);
    });
  })
  .catch(function (error) {
    // Handle any errors
  });

function displayImage(imageRef) {
  imageRef
    .getDownloadURL()
    .then(function (url) {
      //console.log(url);
      var x = document.createElement("IMG");
      x.setAttribute("src", url);

      x.setAttribute("alt", "banner");

      //document.body.appendChild(x);
      var divi = document.createElement("DIV");

      divi.appendChild(x);
      divi.classList.add("carousel-item");
      // document.body.appendChild(divi);
      document.getElementById("inrr").appendChild(divi);
    })
    .catch(function (error) {
      // Handle any errors
    });
}

function Bottom() {
  window.scrollTo(0, document.body.scrollHeight);
}

function chnage() {
  window.alert("hi");
}
