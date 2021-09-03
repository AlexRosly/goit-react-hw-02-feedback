import React from 'react';
import PropTypes from "prop-types";
import {Sections} from "./Section.styled"

const Section = ({title, children}) => (
    <Sections>
        <h1>{title}</h1>
        {children}
    </Sections>
)

Section.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Section;