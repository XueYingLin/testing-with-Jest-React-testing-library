import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";

afterEach(cleanup)
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

it("render button correctly", () => {
   const { getByTestId } = render(<Button label="click me please" />)
   expect(getByTestId('button')).toHaveTextContent("click me please")
})

it("render button correctly", () => {
    const { getByTestId } = render(<Button label="save" />)
    expect(getByTestId('button')).toHaveTextContent("save")
 })

//snapshot testing 
//npm install react-test-renderer
//folder "_snapshots_" and file "button.test.js.snap"  are created automaticly
it("matches snapshot", () => {
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

