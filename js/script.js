// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//quotes based on books
var quotes = [
  {quote:"There is some good in this world, and it’s worth fighting for.",
  author: "J.R.R. Tolkien",
  title:"The Two Towers"},
  {quote:"Get busy living, or get busy dying.",
  author: "Stephen King",
  title:"Different Seasons"},
  {quote:"Most people are nice when you finally see them.",
  author: "Harper Lee",
  title:"To Kill a Mockingbird"},
  {quote:"If we wait until we’re ready, we’ll be waiting for the rest of our lives.",
  author: "Lemony Snicket",
  title:"The Ersatz Elevator"},
  {quote:"The worst enemy to creativity is self doubt.",
  author: "Sylvia Plath",
  title:"The Unabridged Journals of Sylvia Plath"},
];

//retrieves a random quote
function getRandomQuote(quote){
  return quote[Math.floor(Math.random()*5)];
}

//gives screen a random color
function getRandomColor(){
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var Color = "rgb(" + x + "," + y + "," + z +")";
  console.log(Color);
  document.body.style.background = Color;
}

//prints a quote
function printQuote(){
  var quoteBox = document.getElementById('quote-box');
  var newQuote= getRandomQuote(quotes);
  quoteBox.innerHTML = '<p class="quote">' + newQuote.quote + '</p>' + '<p class="source">' + newQuote.author + '<span class="citation">' + newQuote.title + '</span>' +'</p>';
  getRandomColor();

}

//prints a new quote every 30 seconds
setInterval(printQuote, 30000);
