import ReactNative from 'react-native';
// import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

import React from 'react';
import App from '../App';

const {View, Text, Switch} = ReactNative;

describe('jest snapshot tests', () => {

  beforeEach(() => {
    fetch.resetMocks()
  });

  it('renders correctly', () => {
      // TODO: invalid-json logged
    // fetch.mockResponseOnce([{
    //     id: 1, 
    //     firstName: "Foo",
    //     lastName: "Bar"
    // }]);
 fetch.mockResponseOnce();
 // fetch.mockResponseOnce(JSON.stringify({}));
 // fetch.mockResponseOnce(JSON.stringify([{ id: 1 }]));
  // const onResponse = jest.fn();
  // const onError = jest.fn();
      // fetch.mockResponseOnce('[{"id":1,"firstName":"Les","lastName":"Claypool","createdAt":"2019-12-23T15:08:47.991Z","updatedAt":"2019-12-23T15:08:47.991Z"},{"id":2,"firstName":"Al","lastName":"Pacino","createdAt":"2019-12-23T15:08:48.041Z","updatedAt":"2019-12-23T15:08:48.041Z"}]');
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
