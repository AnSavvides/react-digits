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

### Running a server in another terminal

```bash
python server.py
```

Head over to `localhost:5000` and you should be able to see this code in action; try and log in using Digits!

## Notes

- Digits is not available as an npm package, but rather over CDN; because of that, we had to include the Digits web SDK over CDN & reference it in our `webpack` configuration in [`externals`](http://webpack.github.io/docs/library-and-externals.html). As a side effect, this is stopping us from creating this solution as a reusable npm-installable component.

## License

MIT