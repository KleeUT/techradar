import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import renderer from 'react-test-renderer';
// import renderer from 'react-test-renderer';

describe('Button: ', () => {
  it(' renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button onClick={() => console.log('something')}>With Text</Button>, div);
  });
 
  it(' passes snapshot tests', () => {
    const component = renderer.create(
      <Button>Snap Shot Tests</Button>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})