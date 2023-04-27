import { awscdk } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Ben Limmer',
  authorAddress: 'ben@benlimmer.com',
  cdkVersion: '2.71.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: 'test-including-dd',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/ben/test-including-dd.git',

  publishToPypi: {
    distName: 'test-including-dd',
    module: 'test_including_dd',
  },

  deps: [
    'datadog-cdk-constructs-v2',
  ],
  bundledDeps: [
    'datadog-cdk-constructs-v2',
  ],
  peerDeps: [
    '@aws-cdk/aws-lambda-python-alpha@^2.63.0-alpha.0',
  ],

  github: false,
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
