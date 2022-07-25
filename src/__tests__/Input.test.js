import TestRenderer from 'react-test-renderer';
import Input from '../components/Input';

test('The text data would be the same', () => {
  const textToExpect = 'pokemon_text';
  const testRenderer = TestRenderer.create(<Input text={textToExpect} />);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.children.props.children[0].props.text).toEqual(textToExpect);
});
