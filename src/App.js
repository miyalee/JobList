import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

const LIST = [
    {
        id: 'job_0',
        text: '工程研发部门',
        num: 120,
        position: [
            {
                id: 'job_01',
                text:'MAC',
                num: 9
            },
            {
                id: 'job_02',
                text:'MA',
                num: 11
            }
        ]
    },
    {
        id: 'job_1',
        text: '工研发部门',
        num: 2,
        position: [
            {
                id: 'job_11',
                text:'cAC',
                num: 14
            },
            {
                id: 'job_12',
                text:'cA',
                num: 15
            }
        ]
    }
]

class JobList extends Component {
    constructor(props) {
        super(props);

        var job_list = {};

        LIST.map(function(option, index) {
            job_list[option.id] = false;
        })

        this.state = job_list;
        this.handleJobToggle = this.handleJobToggle.bind(this);
        this.clearList = this.clearList.bind(this);
    }

    handleJobToggle(e) {      
        this.setState({
            [e.target.id]: e.target.checked
        });
    }

    clearList() {
        var self = this;

        LIST.map(function(option, index) {
            self.setState({
                [option.id]: false
            })
        })
    }

    render() {
        var self = this,
            handleJobToggle = this.handleJobToggle;

        return (
            <div className="content">
                <h2 className="title">招聘职位</h2>
                <a className="clear-btn" onClick={this.clearList}>清空</a>

                <ul className="list">
                    {
                        LIST.map(function(option, index) {
                            return(
                                <li className="type" key={index}>
                                    <input type="checkbox" id={option.id} onChange={handleJobToggle} checked={self.state[option.id]}/>111
                                    <span className="num">{option.num}</span>
                                    <PositionList status={self.state[option.id]} option={option}/>
                                </li>
                            )
                        })
                    }         
                </ul>
            </div>
        );
    }
}

class PositionList extends Component {
    constructor(props) {
        super(props);

        var self = this,
            position_option = this.props.option.position,
            position_list = {};

        position_option.map(function(option, index) {
            position_list[option.id] = self.props.status;
        })

        this.state = position_list;
        this.handleToggle = this.handleToggle.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        var self = this,
            position_option = nextProps.option.position;

        position_option.map(function(option, index) {
            self.setState({
                [option.id]: nextProps.status
            });
        });
    }

    handleToggle(e) {      
        this.setState({
            [e.target.id]: e.target.checked
        });
    }

    render() {
        var self = this,
            position_list = this.props.option.position;

        return(
            <ul>
                {
                    position_list.map(function(option, index) {
                        return(
                            <li key={index}>
                                <input type="checkbox" id={option.id} onChange={self.handleToggle} checked={self.state[option.id]}/>{option.text}
                                <span className="num">{option.num}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}

class App extends Component {
    render() {
        return (
            <JobList />
        );
    }
}

export default App;
