import React from 'react';

const weather = (props) => {
    let paragraphs = null;
        let errors = null;

        if(props.city) {
            paragraphs = (
                <div>
                    <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>
                    <p className="weather__key">Temperature: <span className="weather__value">{props.temperature}</span></p>
                    <p className="weather__key">humidity: <span className="weather__value">{props.humidity}</span></p>
                    <p className="weather__key">Conditions: <span className="weather__value">{props.description}</span></p>
                </div>
            );
        }
        if(props.error) {
            errors = (
                <p className="weather__error">{props.error}</p>
            )
        }
        return (
            <div>
                {paragraphs}
                {errors}
            </div>
        );
}
export default weather;