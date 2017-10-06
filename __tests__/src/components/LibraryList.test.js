jest.mock('../../../src/components/ListItem', () => 'ListItem');

import React from 'react';
import renderer from 'react-test-renderer';

import { LibraryList, mapStateToProps } from '../../../src/components/LibraryList';

const defaultProps = {
  libraries: [],
};

describe('LibraryList', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <LibraryList {...defaultProps} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
})

describe('LibraryList functions', () => {
  it('renderRow', () => {
    const library = {};
    const wrapper = renderer.create(
      <LibraryList {...defaultProps} />
    ).getInstance();
    expect(wrapper.renderRow(library)).toMatchSnapshot();
  });

  it('mapStateToProps', () => {
    const libraries = [];
    const state = {
      libraries,
    };
    const result = mapStateToProps(state);
    expect(result).toEqual({ libraries });
  })
})
