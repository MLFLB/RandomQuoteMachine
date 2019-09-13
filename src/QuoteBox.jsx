import React from 'react';
/* eslint-disable */

class QuoteBox extends React.Component {
    constructor() {
        super();
        this.state = {
            textQuote: '',
            authorQuote: '',
            quotes: [
                {
                    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
                    author: "Francis of Assisi"
                },
                {
                    quote: "Believe you can and you're halfway there.",
                    author: "Theodore Roosevelt"
                },
                {
                    quote: "It does not matter how slowly you go as long as you do not stop.",
                    author: "Confucius"
                },
                {
                    quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
                    author: "Thomas A. Edison"
                },
                {
                    quote: "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
                    author: "Confucius"
                },
                {
                    quote: "Don't watch the clock; do what it does. Keep going.",
                    author: "Sam Levenson"
                },
                {
                    quote: "A creative man is motivated by the desire to achieve, not by the desire to beat others.",
                    author: "Ayn Rand"
                },
                {
                    quote: "Expect problems and eat them for breakfast.",
                    author: "Alfred A. Montapert"
                },
                {
                    quote: "Start where you are. Use what you have. Do what you can.",
                    author: "Arthur Ashe"
                },
                {
                    quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
                    author: "Samuel Beckett"
                },
                {
                    quote: "Be yourself; everyone else is already taken.",
                    author: "Oscar Wilde"
                },
                {
                    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
                    author: "Albert Einstein"
                },
                {
                    quote: "Always remember that you are absolutely unique. Just like everyone else.",
                    author: "Margaret Mead"
                },
                {
                    quote: "Do not take life too seriously. You will never get out of it alive.",
                    author: "Elbert Hubbard"
                },
                {
                    quote: "People who think they know everything are a great annoyance to those of us who do.",
                    author: "Isaac Asimov"
                },
                {
                    quote: "Procrastination is the art of keeping up with yesterday.",
                    author: "Don Marquis"
                },
                {
                    quote: "Get your facts first, then you can distort them as you please.",
                    author: "Mark Twain"
                },
                {
                    quote: "A day without sunshine is like, you know, night.",
                    author: "Steve Martin"
                },
                {
                    quote: "My grandmother started walking five miles a day when she was sixty. She's ninety-seven now, and we don't know where the hell she is.",
                    author: "Ellen DeGeneres"
                },
                {
                    quote: "Don't sweat the petty things and don't pet the sweaty things.",
                    author: "George Carlin"
                },
                {
                    quote: "Always do whatever's next.",
                    author: "George Carlin"
                },
                {
                    quote: "Atheism is a non-prophet organization.",
                    author: "George Carlin"
                },
                {
                    quote: "Ainsi s’éteint la liberté. Sous des applaudissements.",
                    author: "Padmé Amidala"
                },
                {
                    quote: "Hapiness is not something ready made. It comes from your own actions.",
                    author: "Dalai Lama"
                }
            ]
        }
        this.getRandomQuote = this.getRandomQuote.bind(this);
    }


    getRandomQuote = e => {
        e.preventDefault;
        let quotes = this.state.quotes;
        let quotesLength = quotes.length;
        let randomQuotes = Math.floor(Math.random() * quotesLength);

        for (let i = 0; i < quotesLength; i + 1) {
            this.setState({
                textQuote:
                    quotes[randomQuotes].quote,
                authorQuote: quotes[randomQuotes].author
            })
            break;
        }
    };

    render() {
        return (
            <div id="quote-box">
                <h2 className="title">Quote Generator</h2>
                <p id="text">{this.state.textQuote}</p>
                <div id="author">{this.state.authorQuote}</div>
                <button onClick={this.getRandomQuote} className="btn" id="new-quote">
                    New Quote
          </button>
                <button className="btn tweet-quote"><a id="tweet-quote" href="twitter.com/intent/tweet">Tweet-me</a></button>
            </div>
        );
    }
}

//   ReactDOM.render(<QuoteBox />, document.getElementById("root"));
export default QuoteBox;