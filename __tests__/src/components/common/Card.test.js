import React from 'react';
import renderer from 'react-test-renderer';

import { Card } from '../../../../src/components/common/Card';

describe('Card', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <Card />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders children', () => {
    class Test extends React.Component {
      render() {
        return React.createElement('Test');
      }
    }

    const tree = renderer.create(
      <Card>
        <Test />
      </Card>
    );
    expect(tree).toMatchSnapshot();
  });
});
