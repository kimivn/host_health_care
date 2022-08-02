import React from 'react';
import renderer from 'react-test-renderer';
import {Signup} from '../src/screens';

test('renders correctly', () => {
  const tree = renderer.create(<Signup />).toJSON();
  expect(tree).toMatchSnapshot();
});
