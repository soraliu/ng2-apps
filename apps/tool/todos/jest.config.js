module.exports = {
  name: 'tool-todos',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/apps/tool/todos/',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
