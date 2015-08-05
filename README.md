# Digits with React

[Digits](https://get.digits.com/) is a free phone-number-based log in solution. This repository showcases how you can use Digits in a [React application](http://facebook.github.io/react/). Using [ES6](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf) with the help of [Babel](http://babeljs.io/) - because as my friend [Bob](https://twitter.com/bobbyrenwick) says, "It's like living in the future".

## Getting started

```bash
git clone https://github.com/AnSavvides/react-digits.git
cd react-digits
npm install
```

### Building JavaScript files in one terminal

```bash
grunt watch
```

Now open [`src/ReactDigits.js`](src/ReactDigits.js) and enter your consumer key inside the `componentWillMount` function where we first initialize Digits.

You can find your consumer key in your [Fabric web dashboard](https://fabric.io/dashboard) under the Twitter Kit tab. Note that Digits does not work with keys created from [apps.twitter.com](apps.twitter.com).

### Running a server in another terminal

```bash
python server.py
```

Head over to `localhost:5000` and you should be able to see this code in action; try and log in using Digits!

## Contributing

All contributions are welcome; fork the repository, make your changes and open a pull request. Try to stick to the coding conventions that are already in place.

At the moment, what would be most useful is adding code to show an end-to-end solution of how to use Digits. At present we only show how this is done using a Python back-end.
Have a look at the [issue tracker](https://github.com/AnSavvides/react-digits/issues) and feel free to say you are interested to work on something that has not already been assigned. Right now we have open tickets for building [Ruby](https://github.com/AnSavvides/react-digits/issues/1), [node.js](https://github.com/AnSavvides/react-digits/issues/3), [Lua](https://github.com/AnSavvides/react-digits/issues/2) and [Go](https://github.com/AnSavvides/react-digits/issues/4) back-ends. If you want to add support for another language, feel free to open an issue!

## Notes

- Digits is not available as an npm package, but rather over CDN; because of that, we had to include the Digits web SDK over CDN & reference it in our `webpack` configuration in [`externals`](http://webpack.github.io/docs/library-and-externals.html). As a side effect, this is stopping us from creating this solution as a reusable npm-installable component.

## License

MIT