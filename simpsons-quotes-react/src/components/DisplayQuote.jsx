
function DisplayQuote({quote}){
    return(
        <div>
            <img src={quote.image} alt={quote.character} />
            <p>{quote.quote}</p>
            <p>{quote.character}</p>
        </div>
    )
}

export default DisplayQuote