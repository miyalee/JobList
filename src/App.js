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
                text:'MAC 开发工程师',
                num: 9
            },
            {
                id: 'job_02',
                text:'IOS APP 测试开发工程师',
                num: 17
            },
            {
                id: 'job_03',
                text:'Android 运程控制工程师',
                num: 61
            },
            {
                id: 'job_04',
                text:'Web 前端工程师',
                num: 31
            },
            {
                id: 'job_05',
                text:'Android 多媒体软件开发工程师',
                num: 2
            }
        ]
    },
    {
        id: 'job_1',
        text: '产品设计部门',
        num: 136,
        position: [
            {
                id: 'job_11',
                text:'网页设计师',
                num: 47
            },
            {
                id: 'job_12',
                text:'ID/工业设计师',
                num: 39
            },
            {
                id: 'job_13',
                text:'视觉设计师/GUI界面设计师',
                num: 42
            },
            {
                id: 'job_14',
                text:'平面设计师',
                num: 8
            },
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
                                <li className="job" key={index}>
                                    <input type="checkbox" id={option.id} onChange={handleJobToggle} checked={self.state[option.id]}/>{option.text}
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
            <ul className="position">
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
