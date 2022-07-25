import TestRenderer from 'react-test-renderer';
import Label from '../components/Label';

test('The text data would be the same', () => {
  const textToExpect = 'pokemon_text';
  const testRenderer = TestRenderer.create(<Label text={textToExpect} />);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.children.props.value).toEqual(textToExpect);
});
