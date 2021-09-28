let apiQuotes = [];

function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";

  try {
    const res = await fetch(apiUrl);
    apiQuotes = await res.json();
    newQuote();
  } catch (err) {
    alert(err);
  }
}

getQuotes();
