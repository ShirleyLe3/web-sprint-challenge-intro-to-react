import React from "react";

class StarWarsFilm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            film: {}
        }
    }
    
    componentDidMount() {
        fetch(this.props.film)
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.ListeningStateChangedEvent({
                film:data
            });
        });
    }
    
    render() {
   
        return (
            <div>
                {/* props.film.map(titleName => { */}
                {/* // h1>Movies: {titleName}</h1> */}
                <h3 className="film">{this.state.film.title}</h3>;
            </div>
        )}
}

export default StarWarsFilm;