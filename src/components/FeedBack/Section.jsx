import React from 'react';
import {Sections} from "./Section.styled"

const Section = ({title, children}) => (
    <Sections>
        <h1>{title}</h1>
        {children}
    </Sections>
)

export default Section;