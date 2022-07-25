import TestRenderer from 'react-test-renderer';
import PokemonMain from '../components/PokemonMain';

test('PokemonMain component attributes should be', () => {
  const testRenderer = TestRenderer.create(<ProgressBar value={15} updateInput={ () =>{ } }/>);
  const testInstance = testRenderer.root;
  expect(testInstance.children[0].props.children.props.children[2].props.type).toEqual("range");
  expect(testInstance.children[0].props.children.props.children[2].props.min).toEqual("0");
  expect(testInstance.children[0].props.children.props.children[2].props.max).toEqual("100");
  expect(testInstance.children[0].props.children.props.children[2].props.step).toEqual("1");
  expect(testInstance.children[0].props.children.props.children[2].props.value).toEqual(15);
});
