#!/usr/bin/env node
let exec = require('child_process').exec;

let activate = () => {
  return new Promise((resolve, reject) => {
    exec(`osascript -e 'tell application "Terminal" \n activate \n end tell'`, (error, stdout, stderr) => {
      if (error) reject(stderr);
      resolve(stdout);
    });
  });
};

activate().catch((err) => {
  console.log(err);
});
