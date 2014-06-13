## Ubuntu Installation

Git, NodeJS, and Lineman setup:

    sudo add-apt-repository ppa:chris-lea/node.js
    sudo apt-get update
    sudo apt-get install nodejs
    sudo npm install -g lineman

PhantomJS setup:

    cd /usr/local/share/
    sudo wget http://phantomjs.googlecode.com/files/phantomjs-1.9.2-linux-x86_64.tar.bz2
    sudo tar jxvf phantomjs-1.9.2-linux-x86_64.tar.bz2
    sudo ln -s /usr/local/share/phantomjs-1.9.2-linux-x86_64/ /usr/local/share/phantomjs
    sudo ln -s /usr/local/share/phantomjs/bin/phantomjs /usr/local/bin/phantomjs

### Web Server (Express JS)
Once you've generated a directory structure with the default project template, or cloned a framework project template then it's time to get developing with Lineman.

In your command-line interface:

Navigate to your project directory:

    $ cd your-project

Start Lineman's development environment:

    $ lineman run

Point your web-browser at http://localhost:8000!

### Test Runner (Testem)
Lineman integrates a full-featured test runner called Testem. Whether you are using the default project template, or have cloned a framework project template you will have a set of default tests within the spec directory. Lineman works by compiling all your files whenever it detects a change on disk during lineman run.

In another command-line interface session:

    $ lineman spec

By default, Lineman configures Testem to re-run tests on every file change and automatically launches Chrome to execute tests using a generated Jasmine specrunner html file.

### Continuous Integration (Testem)
Lineman comes pre-configured to execute your tests using Testems "CI" mode which will run tests against Phantom JS and yield output in TAP13 format which is easy for CI environments (such as Jenkins) to consume:

    $ lineman spec-ci

The spec-ci command will compile your app, and then run tests within PhantomJS.
