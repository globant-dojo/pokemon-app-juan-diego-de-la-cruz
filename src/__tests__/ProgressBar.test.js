import { render, screen } from '@testing-library/react';
import { type } from '@testing-library/user-event/dist/type';
import TestRenderer from 'react-test-renderer';
import ProgressBar from '../components/ProgressBar';

test('Progress component attributes', () => {
  const testRenderer = TestRenderer.create(<ProgressBar />);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.type).toEqual("range");
  expect(testInstance.children[0].props.min).toEqual("0");
  expect(testInstance.children[0].props.max).toEqual("100");
  expect(testInstance.children[0].props.step).toEqual("1");
  expect(testInstance.children[0].props.value).toEqual(50);
});
