import { Node, Project, SyntaxKind } from 'ts-morph';

const removedFeatureName = process.argv[2]; // example isArticleRatingEnabled
const featureState = process.argv[3]; // example off/on

if (!removedFeatureName) {
  throw new Error('Укажите название фича-флага');
}

if (!featureState) {
  throw new Error('Укажите состояние фичи (off/on)');
}

if (!['on', 'off'].includes(featureState)) {
  throw new Error('Некорректное значение состояния фичи (off/on)');
}

const project = new Project({});

project.addSourceFilesAtPaths(['./src/**/*.ts']);
project.addSourceFilesAtPaths(['./src/**/*.tsx']);

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
  let isToggleFeatures = false;
  node.forEachChild((childNode) => {
    if (childNode.isKind(SyntaxKind.Identifier) && childNode.getText() === 'toggleFeatures') {
      isToggleFeatures = true;
    }
  });

  return isToggleFeatures;
}

files.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
      const objectOptions = node.getFirstDescendantByKind(SyntaxKind.ObjectLiteralExpression);

      if (!objectOptions) return;

      const featureNameProperty = objectOptions.getProperty('name');
      const onFunctionProperty = objectOptions.getProperty('on');
      const offFunctionProperty = objectOptions.getProperty('off');

      const onFunction = onFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const offFunction = offFunctionProperty?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
      const featureName = featureNameProperty?.getFirstDescendantByKind(SyntaxKind.StringLiteral)?.getText().slice(1, -1);

      if (featureName !== removedFeatureName) return;

      if (featureState === 'on' && onFunction) {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
      }
      if (featureState === 'off' && offFunction) {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
      }
    }
  });
});

project.save();