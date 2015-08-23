<<<<<<< HEAD
##TestFirst JavaScript Overview   


## Assignment

To get a great overview of what TestFirst learning and development is watch the following video about [TestFirst](https://www.youtube.com/watch?v=8MRDJPHMpaQ).

For an introduction to Test-Driven Development, read the first three sections of [The Newbie's Guide to Test-Driven Development](http://code.tutsplus.com/tutorials/the-newbies-guide-to-test-driven-development--net-13835) ("What is Test-Driven Development?", "How does it work?", and "Great, but how is this better than regular testing?")   

Let's warm up by learning to read tests and write code to match a test's expectations. Read more about the philosophy of Test-First Learning at [TestFirst.org](http://testfirst.org/about#whytestfirstteaching).


## Setup

To start, we need to fork the repository and install `testem`, a Node test-runner that will run your test and code.

1. **Fork** the repository to your account.
2. Go to your own repositories on GitHub and **clone the FullstackTestFirst** repository link.
3. Use the link in the `git clone` then follow the rest of the commands.

```
$ git clone https://github.com/FullstackAcademy/FullstackTestFirst.git
$ cd FullstackTestFirst
$ brew install node
$ sudo npm install -g testem
```

To run the specs for a directory, you need to go into that directory and run the command `testem`. 

```
$ cd 00_hello
$ testem
TEST'EM 'SCRIPTS!
Open the URL below in a browser to connect.
http://localhost:7357/
```

Now, if you open http://localhost:7357 in a browser (we recommend Chrome) you should see the Jasmine Spec runner. The Testem is booting up a small web server, which loads in all the JS files in that directory and brings in Jasmine. Remember, Jasmine is just JavaScript, so it all runs inside the browser.

To add your script (the code you need to write), create a file with the same name as the spec file but without the word `spec`. For example, to create the functions that `helloSpec.js` needs to pass the test, create a `hello.js` file. This works because Jasmine loads all the files in lexigraphical (alphabetical) order, so `hello.js`comes before `helloSpec.js`.

## Debugging Methods

The key skill here to practice is debugging JavaScript inside Chrome. You should become comfortable with these methods:

1.  Using the `console` via `console.log` and `debugger`
2.  Stepping through your JS in the Console and evaluating variables

This is a great blog post on the topic:

http://www.creativebloq.com/javascript/javascript-debugging-beginners-3122820
[Permalink](https://www.evernote.com/shard/s3/sh/3923d313-0199-4272-b589-8a8d397a94c5/b726f74c27265fc96bb8b185e13f9208)


###Before beginning your assignment, make sure you have completed these steps: 

1. Forked & cloned the TestFirst repository.
2. Installed Node and Testem.
=======
# foundations
First repository for Fullstack Foundations
>>>>>>> 8ccc1711a4f72bd1ec808cd9189cbd5a54bb5456
