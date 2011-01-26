module.exports = {
  "id3": {
    "type": "npm"
  },
  "node-redis": {
    "type": "git",
    "path": "git://github.com/Tim-Smart/node-redis.git"
  },
  "run tests": {
    "type": "command",
    "command": function (done) {
      console.log('Function test done.');
      done();
    }
  },
  "echo": {
    "type": "command",
    "command": "rm -rf .deploy"
  }
};
