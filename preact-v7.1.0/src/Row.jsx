'use strict';
/** @jsx preact.h */

var preact = require('preact');
var { render, h, Component } = preact;

window.rowsUpdated = 0;
window.rowsMounted = 0;

export class Row extends Component {
	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
		this.onClick = this.onClick.bind(this);
	}
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.data !== this.props.data || nextProps.styleClass !== this.props.styleClass;
	}
//	componentDidUpdate() {
//		window.rowsUpdated++;
//	}
//	componentDidMount() {
//		window.rowsMounted++;
//	}

	onDelete() {
		this.props.onDelete(this.props.data.id);
	}
	onClick() {
		this.props.onClick(this.props.data.id);
	}

	render() {
		let {styleClass, onClick, onDelete, data} = this.props;
		return (<li class="media">
          <div class="media-left">
            <a href="#">
              <img class="media-object" src="http://lorempixel.com/50/50/" alt="..." />
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">Media heading {data.label}</h4>
            <button>Like</button>
            <button>Share</button>
            <button>Comment</button>
            <ul class="media-list">
              <li class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="http://lorempixel.com/25/25" alt="..." />
                  </a>
                </div>
                <div class="media-body">
                  <h4>Chad Hietala</h4>
                  Wat LulZ
                </div>
              </li>
              <li class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="http://lorempixel.com/25/25" alt="..."/>
                  </a>
                </div>
                <div class="media-body">
                  <h4>Bill Hietala</h4>
                  Wat
                </div>
              </li>
              <li class="media">
                <div class="media-left">
                  <a href="#">
                    <img class="media-object" src="http://lorempixel.com/25/25" alt="..." />
                  </a>
                </div>
                <div class="media-body">
                  <h4>Bob Hietala {data.label}</h4>
                  Woot
                </div>
              </li>
            </ul>
          </div>
        </li>);
	}
}

