document.addEventListener("DOMContentLoaded", function () {

    const quoteElement = document.getElementById("quote-content");
    const authorElement = document.getElementById("quote-author");
    const newQuoteButton = document.getElementById("new-quote-btn");
    const twitterButton = document.getElementById("twitter-btn");

    const apiUrl = "https://type.fit/api/quotes";


    function fetchRandomQuote() {
        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((quotes) => {
                const randomIndex = Math.floor(Math.random() * quotes.length);
                const randomQuote = quotes[randomIndex];
                displayQuote(randomQuote.text, randomQuote.author);
            })
            .catch((error) => {
                console.error("Error:", error.message);
                displayQuote("An error occurred while fetching data.", "");
            });
    }

  
    function displayQuote(quote, author) {
        quoteElement.textContent = quote;
        authorElement.textContent = author ? `- ${author}` : "";
    }

  
    window.addEventListener("load", fetchRandomQuote);
    newQuoteButton.addEventListener("click", fetchRandomQuote);
    
});