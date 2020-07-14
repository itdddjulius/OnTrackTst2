import React, {Component} from 'react';
import Books from './components/books';

    class App extends Component {


 state = {
        books: []
      }
      
      
 componentDidMount() {
        fetch('http://nyx.vima.ekt.gr:3000/')
        .then(res => res.json())
        .then((data) => {
          this.setState({ books: data })
        })
        .catch(console.log)
      }

      render () {
        return (
          // JSX to render goes here... 
<center>
<form id="login">
    <h1>Books</h1>
    <fieldset id="inputs">
    <table>
        <tr>
            <td><span><h3>Title&nbsp;<input id="title" type="text" placeholder="Title" autofocus required /></h3></span></td>
            <td><span><h3>Author&nbsp;<input id="author" type="text" placeholder="Author" autofocus required /></h3></span></td>
            <td><span><h3>Pages&nbsp;<input id="pages" type="text" placeholder="XXXXXXpg" autofocus required /></h3></span></td>
            <td><h2>Published:</h2></td>
            <td><span><h3>Year&nbsp;<input id="year" type="text" placeholder="DD/MON/YYYY" autofocus required /></h3></span><br /></td>
            <td><span><h3>Country&nbsp;<input id="country" type="text" placeholder="GB" autofocus required /></h3></span><br /></td>
            <td><span><h3>City&nbsp;<input id="city" type="text" placeholder="London" autofocus required /></h3></span><br /></td>
        </tr>
    </table>

    </fieldset>
    <fieldset id="actions">
        <input type="submit" id="submit" value="Search" />
        <a href="#">Advanced Serach?</a><a href="#">Filter</a>
    </fieldset>
</form>
</center>

                  );
      }
    }

    export default App;