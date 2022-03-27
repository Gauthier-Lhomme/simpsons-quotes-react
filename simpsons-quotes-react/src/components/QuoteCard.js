import React from 'react';
import './QuoteCard.css';



class QuoteCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false,
        };

    }

    render() {

        return (
            <figure className="QuoteCard">
                <img
                    src={this.props.image}
                    alt={this.props.character} />
                <figcaption>
                    <blockquote>
                        {this.props.quote}
                    </blockquote>
                    <cite><p>
                        <cite>{this.props.character}</cite>
                        <span
                            className={this.state.favorite ? 'is-favorite' : ''}
                            onClick={event => {
                                const newValue = !this.state.favorite
                                this.setState({ favorite: newValue })
                            }}
                        >&#9733;</span>
                    </p></cite>
                </figcaption>
            </figure>
        );
    }

}

export default QuoteCard;