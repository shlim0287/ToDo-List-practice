const quotes = [
    {
      quote: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
    },
    {
      quote:
        "The world is a book and those who do not travel read only one page.",
      author: "Saint Augustine",
    },
    {
      quote: "Life is either a daring adventure or nothing at all.",
      author: "Helen Keller",
    },
    {
      quote: "To Travel is to Live",
      author: "Hans Christian Andersen",
    },
    {
      quote: "Only a life lived for others is a life worthwhile.",
      author: "Albert Einstein",
    },
    {
      quote: "You only live once, but if you do it right, once is enough.",
      author: "Mae West",
    },
    {
      quote: "Never go on trips with anyone you do ntot love.",
      author: "Hemmingway",
    },
    {
      quote: "We wander for distraction, but we travel for fulfilment.",
      author: "Hilaire Belloc",
    },
    {
      quote: "Travel expands the mind and fills the gap.",
      author: "Sheda Savage",
    },
  ];

function handleHover(){
  authorIn.classList.remove("hidden");
}
function handleHovers(){
  authorIn.classList.add("hidden");
}

  const quoteIn= document.createElement("span");
  const authorIn=document.createElement("span");
  authorIn.classList.add("hidden")
  quoteIn.addEventListener("mouseover",handleHover);
  quoteIn.addEventListener("mouseout",handleHovers);
  if(quoteIn.addEventListener("mouseover",handleHover)){
    handleHover();
  }else{
    handleHovers();
  }
  const div =document.querySelector("#quote")
  const randomQuote= quotes[Math.floor(Math.random()*quotes.length)];
  div.append(quoteIn);
  div.append(authorIn);


  quoteIn.innerText=randomQuote.quote;
  authorIn.innerText=randomQuote.author;


  


  
  