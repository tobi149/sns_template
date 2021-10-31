// Einleitungs Artikel ###############################################################################
const testDiv = document.querySelector('#test-div');
db.collection('index-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderEinlUnterUeberschrift(doc);
  });
  snapshot.docs.forEach(doc => {
    renderEinlText(doc);
  });
});

/*
snapshot.docs.forEach(doc => {
    renderEinlUeberschrift(doc);
  });

// Einleitung überschrift
function renderEinlUeberschrift(doc){
  let h1 = document.createElement('h1');

  h1.setAttribute('data-id', doc.id);
  h1.textContent = doc.data().einluberschrift;

  testDiv.appendChild(h1);
};
*/


// Einleitung unter Überschrift
function renderEinlUnterUeberschrift(doc){
  let h2 = document.createElement('h2');

  h2.setAttribute('data-id', doc.id);
  h2.textContent = doc.data().einlunterüberschrift;

  testDiv.appendChild(h2);
};


// Einleitung Text
function renderEinlText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().einltext;

  testDiv.appendChild(p);
};

// Dark Mode ###############################################################################
var checkbox = document.querySelector('input[name=theme]');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}

// Cookie Banner ###############################################################################
const cookieText = document.querySelector('#cookie-text');
db.collection('cookie-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderCookieText(doc);
  });
});

// Cookie Text
function renderCookieText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().cookietext;

  cookieText.appendChild(p);
};

// Mail ###############################################################################

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, phone, message);

  // Send Email
  var otherCheckbox = document.querySelector('input[value="datenschutz"]');

  sendEmail(name, email, phone, message);
  // Clear form
  document.getElementById('contactForm').reset();
  
  /*
  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);
  */

  
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    phone:phone,
    message:message
  });
}

// Send Email info
function sendEmail(name, email, phone, messages){
  Email.send({
    Host: "smtp.gmail.com",
    Username: "stoehr.silas@gmail.com",
    Password: "rqxfodqnwjmgocvr",
    To: "kontakt@silasstoehr.de",
    From: "stoehr.silas@gmail.com",
    Subject: `Nachricht - ${name}`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Telefonnummer: ${phone} <br/><hr><br/>${messages}`,

  }).then((messages) => swal("Vielen Dank!", "Deine Nachricht wurde gesendet!", "success"));
}

// Coding Text ###############################################################################
const codingText = document.querySelector('#coding-text');
db.collection('coding-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderCodingText(doc);
  });
});

// Coding Text
function renderCodingText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().text;

  codingText.appendChild(p);
};

// Künstler Text ###############################################################################
const kuenstlerText = document.querySelector('#kuenstler-text');
const kuenstlerUeberschrift = document.querySelector('#kuenstler-ueberschrift');
db.collection('kuenstler-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderKuenstlerText(doc);
    renderKuenstlerUeberschrift(doc);
  });
});

// Künstler Text
function renderKuenstlerText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().kuenstlertext;

  kuenstlerText.appendChild(p);
};

// Überschrift
function renderKuenstlerUeberschrift(doc){
  let h4 = document.createElement('h3');

  h4.setAttribute('data-id', doc.id);
  h4.textContent = doc.data().kuenstlerueberschrift;

  kuenstlerUeberschrift.appendChild(h4);
};

// Künstler Bilder ###############################################################################
const jokerText = document.querySelector('#art-img-joker');
const juicewrldText = document.querySelector('#art-img-juicewrld');
const klavierText = document.querySelector('#art-img-klavier');
const rickText = document.querySelector('#art-img-rick');
db.collection('art-joker-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderJokerText(doc);
  });
});
db.collection('art-juice-txt').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderJuiceText(doc);
  });
});
db.collection('art-klavier-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderKlavierText(doc);
  });
});
db.collection('art-morty-text').get().then(snapshot => {

  snapshot.docs.forEach(doc => {
    renderMortyText(doc);
  });
});

// Joker Text
function renderJokerText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().text;

  jokerText.appendChild(p);
};
// juice Text
function renderJuiceText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().text;

  juicewrldText.appendChild(p);
};
// klavier Text
function renderKlavierText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().text;

  klavierText.appendChild(p);
};
// morty Text
function renderMortyText(doc){
  let p = document.createElement('p');

  p.setAttribute('data-id', doc.id);
  p.textContent = doc.data().text;

  rickText.appendChild(p);
};

