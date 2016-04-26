import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'


render(
	React.createElement(App),
	document.getElementById('app')
);

//React dev tool link
  //http://facebook.github.io/react/blog/2015/09/02/new-react-developer-tools.html

//'inline-source-map', better for dev env not for prod, we will see error in js that it corresponds to