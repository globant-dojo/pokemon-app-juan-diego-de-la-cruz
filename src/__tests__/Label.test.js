import TestRenderer from 'react-test-renderer';
import Label from '../components/Label';

test('Label Component Test', () => {
  const testRenderer = TestRenderer.create(<Label text={"test-text"} />);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.children.props.value).toEqual("test-text");
});
