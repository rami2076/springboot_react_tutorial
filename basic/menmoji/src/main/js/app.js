'use strict';

// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
const client = require('./client'); // <3>
// end::vars[]

// tag::app[]
class App extends React.Component { // <1>

    constructor(props) {
        super(props);
        this.state = {menmojis: []};
    }

    componentDidMount() { // <2>
        client({method: 'GET', path: '/api/menmojis'}).done(response => {
            this.setState({menmojis: response.entity._embedded.menmojis});
        });
    }

    render() { // <3>
        return (
                <MenmojiList menmojis={this.state.menmojis}/>
                )
    }
}
// end::app[]

// tag::menmoji-list[]
class MenmojiList extends React.Component {
    render() {
        const menmojis = this.props.menmojis.map(menmoji =>
            <Menmoji key={menmoji._links.self.href} menmoji={menmoji}/>
        );
        return (
                <table>
                    <tbody>
                        <tr>
                            <th>MENMOJI</th>
                            <th>MOJI</th>
                        </tr>
                        {menmojis}
                    </tbody>
                </table>
                )
    }
}
// end::menmoji-list[]

// tag::menmoji[]
class Menmoji extends React.Component {
    render() {
        return (
                <tr>
                    <td>{this.props.menmoji.menmoji}</td>
                    <td>{this.props.menmoji.moji}</td>
                </tr>
                )
    }
}
// end::menmoji[]

// tag::render[]
ReactDOM.render(
        <App />,
        document.getElementById('react')
        )
// end::render[]