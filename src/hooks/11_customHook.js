/**
 * 自定义Hook, 解决的是react函数式组件中, 共享相同逻辑的问题
 * 首先: 先看一下 class 组件是如何实现不同组件之间的逻辑共享(高阶函数 和 mixin)
 * 再看一下 函数式组件 是如何实现逻辑共享
 */
import React, { useState, useEffect } from 'react'

const DataSource = {
  addChangeListener (fn) {
    setTimeout(() => {
      fn(DataSource)
    })
  },

  removeChangeListener () {

  },

  getComments () {
    return JSON.stringify([{ desc: '1' }, { desc: '2' }], null, 2)
  },

  getBlogPost () {
    return JSON.stringify([{ desc: '11' }, { desc: '22' }], null, 2)
  }
}

// 此函数接收一个组件...
function withSubscription (WrappedComponent, selectData) {
  // ...并返回另一个组件...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props)
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

class CommentList extends React.Component {
  render () {
    return <div>
      CommentList: { this.props.data }
    </div>
  }
}

class BlogPost extends React.Component {
  render () {
    return <div>
      BlogPost: { this.props.data }
    </div>
  }
}

export const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

export const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);

const useDataSource = function (selectData = () => {}) {
  const [data, setData] = useState()

  const handleChange = () => {
    setData(selectData(DataSource))
  }

  useEffect(() => {
    DataSource.addChangeListener(handleChange);

    return () => {
      DataSource.removeChangeListener(handleChange)
    }
  })

  return data
}

export const UseHookCommentList = function (props) {
  const data = useDataSource((DataSource) => DataSource.getComments())
  return <div>UseHookCommentList: { data }</div>
}

export const UseHookBlogPost = function (props) {
  const data = useDataSource((DataSource) => DataSource.getBlogPost(props.id))
  return <div>UseHookBlogPost: { data }</div>
}
