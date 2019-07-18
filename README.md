# React Router American Presidents

## Screenshot
![image](https://user-images.githubusercontent.com/5306791/61461113-f80f7900-a967-11e9-8eeb-c89a336fa736.png)


## To start the project

To start the project, clone the project (fork it before and clone the forked version if you want to push later), install the packages and start the React applicaiton:

```
git clone https://github.com/ironhack-dev-squad-144/react-router-american-presidents
cd react-router-american-presidents
npm install
npm start
```

## Steps to reproduce

First, install a new package.
```
$ npm install react-router-dom
```

Then, inside `src/index.js`:
```js
import { BrowserRouter as Router} from 'react-router-dom'
// ...

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
```

Then, inside `src/components/App.js`, you need to add:
- `Switch`: Only the first route inside `Switch` is rendered
- `Route`: Tool to render a component when the URL match the `path`

```js
import { Switch, Route } from 'react-router-dom';

// ...

function App() {
  return (
    <div className="App">
      {/* ... */}

      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/list-presidents' component={ListPresidents}/>
        <Route render={() => <h1>404</h1>}/>
      </Switch>
    </div>
  )
}
```

To make sure it works, try to go to different URL:
- http://localhost:3000/
- http://localhost:3000/about
- http://localhost:3000/list-presidents
- http://localhost:3000/carrot

Then, with React Router, all `<a href="...">` tags have to be replaced by: `<Link to="...">` or `<NavLink to="...">`. The `<NavLink>` is usually used in the navbar because it adds the className "active" when the URL match the `to`.

So you have to replace the `<a>` inside `src/components/MainNavbar.jsx`.

Next steps:
- Loop inside `src/components/pages/ListPresidents/jsx` to display the list of all presidents
- Inside the table, for each president, add a "Detail" link to `/president-detail/42` (in the case of Bill Clinton that is number 42)
- Inside the `App` component, add a `Route` for `PresidentDetail`






## Information about React Router

### Official documetation

Official documention: https://reacttraining.com/react-router/web/guides/)


### Installation
```
$ npm install react-router-dom
```


### Example of Import

```javascript
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
```


### List of React Router Components

<table>
  <tr>
    <th> Component </th>
    <th> Description </th>
    <th width="30%"> Main Props </td>
  </tr>
  <tr>
    <td><code>&lt;BrowserRouter&gt;</code></td>
    <td>Router Component that should wrap your application</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Route&gt;</code></td>
    <td>When the url matches its props <code>path</code>, it renders its content</td>
    <td>
      <ul>
        <li><code>path</code>: string</li>
        <li><code>component</code>: Component</li>
        <li><code>render</code>: func</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Switch&gt;</code></td>
    <td>Group <code>&lt;Route&gt;</code> together and display maximum 1</td>
    <td>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Link&gt;</code></td>
    <td>Replace the <code>&lt;a&gt;</code> tag of HTML in React Router</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
        <li><code>to</code>: object</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;NavLink&gt;</code></td>
    <td>A special version of the <code>&lt;Link&gt;</code> that will add styling attributes to the rendered element when it matches the current URL</td>
    <td>
      <ul>
        <li><code>activeClassName</code>: string</li>
        <li><code>activeStyle</code>: object</li>
        <li><code>exact</code>: bool</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td><code>&lt;Redirect&gt;</code></td>
    <td>Will navigate to a new location</td>
    <td>
      <ul>
        <li><code>to</code>: string</li>
      </ul>
    </td>
  </tr>
</table>
