import TestRenderer from 'react-test-renderer';
import Button from '../components/Button';

test('Label Component Test', () => {
  const textToExpect = 'pokemon_text';
  const testRenderer = TestRenderer.create(<Button value={textToExpect} />);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.children.props['children']).toEqual(textToExpect);
});
