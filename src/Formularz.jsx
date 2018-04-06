import React, { Component } from 'react';
import Schema from 'form-schema-validation';
import axios from 'axios';
import {
    Form,
    TextField,
    TextareaField,
    NumberField,
    DateField,
    SubmitField,
} from 'react-components-form';
import './Formularz.css';

const errorStyles = {
    className: "error",
    fieldClassName: "fieldError",
};

const schema = new Schema({
    name: {
        type: String,
        required: true,
        errorStyles
    },
    shortcut: {
        type: String,
        required: true,
        errorStyles
    },
    startDate: {
        type: Date,
        required: true,
        errorStyles
    },
    endDate: {
        type: Date,
        required: true,
        errorStyles
    },
    rating: {
        type: Number,
        required: true,
        errorStyles
    },
    website: {
        type: String,
        required: true,
        errorStyles
    },
    description: {
        type: String,
        required: true,
        errorStyles
    },
});

class Formularz extends Component {
    submitMethod = (model) => {
        axios.defaults.headers.post.Accept = 'application/json';
        return axios.post('/airdrop',JSON.stringify({
            name: model.name,
            shortcut: model.shortcut,
            startDate: model.startDate,
            endDate: model.endDate,
            rating: model.rating,
            website: model.website,
            description: model.description,
        }))
            .then( response => console.log(response))
            .catch(error => console.log(error))
    };

    render() {
        return (
            <Form
                onSubmit={this.submitMethod}
                schema={schema}
                className="formContainer"
            >
                <TextField
                    name="name"
                    type="text"
                    wrapperClassName="fieldContainer"
                    className="field"
                    label="Name"
                />
                <TextField
                    name="shortcut"
                    type="text"
                    className="field"
                    wrapperClassName="fieldContainer"
                    label="Shortcut"
                />
                <DateField
                    name="startDate"
                    type="text"
                    className="field"
                    wrapperClassName="fieldContainer"
                    label="Start date"
                    defaultValue={Date.now}
                />
                <DateField
                    name="endDate"
                    type="text"
                    className="field"
                    wrapperClassName="fieldContainer"
                    label="End date"
                    defaultValue={Date.now}
                />
                <NumberField
                    name="rating"
                    type="number"
                    className="field"
                    wrapperClassName="fieldContainer"
                    label="Rating"
                />
                <TextField
                    name="website"
                    type="text"
                    className="field"
                    wrapperClassName="fieldContainer"
                    label="Website"
                />
                <TextareaField
                    name="description"
                    type="text"
                    className="field"
                    wrapperClassName="fieldContainer"
                    label="Description"
                />
                <SubmitField value="Submit" className="submit"/>
            </Form>
        );
    }
}

export default Formularz;