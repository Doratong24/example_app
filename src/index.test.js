import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs'; // File System

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1', (done) => { // add 'done' to make it asynchronous
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function(err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done(); // call done
      window.close();
    }); // can pass JS files as 2nd param
  });
});
