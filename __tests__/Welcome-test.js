import React from 'react';
import renderer from 'react-test-renderer';
import {Welcome} from '../src/screens';

test('renders correctly', () => {
  const tree = renderer.create(<Welcome />).toJSON();
  expect(tree).toMatchSnapshot();
});
