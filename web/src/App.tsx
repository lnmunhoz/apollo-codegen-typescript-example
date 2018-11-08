import * as React from 'react'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'

import logo from './logo.svg'
import './App.css'
import { FeedQuery, PostQuery, PostQueryVariables } from './generated/queries'

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      title
    }
  }
`

const POST_QUERY = gql`
  query PostQuery($id: ID!) {
    post(id: $id) {
      id
      text
    }
  }
`

interface IAppState {
  selectedPostId: string
}

class App extends React.Component<{}, IAppState> {
  public state = {
    selectedPostId: ''
  }

  public selectPost = (id: string) => {
    console.log(id)

    this.setState({
      selectedPostId: id
    })
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React + TypesScript + Apollo</h1>
        </header>
        <p className="App-intro">Select a post to show its text</p>

        <Query<FeedQuery, {}> query={FEED_QUERY}>
          {({ data, loading, error }) => {
            if (loading) {
              return <p>Loading...</p>
            } else {
              if (!data) {
                return <p>Sorry, no data found</p>
              }

              return (
                <React.Fragment>
                  {data.feed.map(item => (
                    <li key={item.id}>
                      {item.title}
                      <button onClick={this.selectPost.bind(this, item.id)}>
                        Select
                      </button>
                    </li>
                  ))}
                </React.Fragment>
              )
            }
          }}
        </Query>

        {this.state.selectedPostId ? (
          <Query<PostQuery, PostQueryVariables>
            query={POST_QUERY}
            variables={{
              id: this.state.selectedPostId
            }}
          >
            {({ data, loading }) => {
              if (loading) return <p>Fetching post...</p>
              if (!data || !data.post) return <p>Sorry, no data</p>

              return <p>{data.post.text}</p>
            }}
          </Query>
        ) : (
          <p>Select a post</p>
        )}
      </div>
    )
  }
}

export default App
