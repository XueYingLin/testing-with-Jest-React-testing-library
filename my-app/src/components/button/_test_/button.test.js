import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button';

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})
