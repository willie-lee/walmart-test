import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      name
      calories
      fat
      carbs
      protein
    }
  }
`;

function List() {
  return (
    <Query query={GET_POSTS}>
      {({ loading, data }) => !loading && (
        <table className="f6 w-100 ba">
          <thead>
            <tr>
              <th>Name</th>
              <th>Calories</th>
              <th>Fat</th>
              <th>Carbs</th>
              <th>Protein</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map(post => (
              <tr key={post.id} className="striped--near-white">
                <td className="pa3">{post.name}</td>
                <td className="pa3">{post.calories}</td>
                <td className="pa3">{post.fat}</td>
                <td className="pa3">{post.carbs}</td>
                <td className="pa3">{post.protein}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Query>
  )
}

export default List