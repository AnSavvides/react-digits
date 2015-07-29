# Digits with React

[Digits](https://get.digits.com/) is a free phone-number-based log in solution. This repository showcases how you can use Digits in a [React application](http://facebook.github.io/react/).

## Getting started

```bash
git clone https://github.com/AnSavvides/react-digits.git
cd react-digits
npm install
grunt watch
```

Open [`src/ReactDigits.js`](src/ReactDigits.js) and enter your consumer key inside the `componentWillMount` function where we first initialize Digits.

In another terminal window run a simple HTTP server locally:

```bash
python -m SimpleHTTPServer 8000
```

Head over to `localhost:8000` and you should be able to see this code in action! Keep in mind that this is a front-end only implementation and it is assumed that you have written code to handle the validation logic in the back-end. See the `onLoginSuccess` function in [`src/ReactDigits.js`](src/ReactDigits.js) where we make a `POST` request with `JSON` to a `/user/verify` endpoint.