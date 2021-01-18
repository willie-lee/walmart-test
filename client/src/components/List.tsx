import React from "react"

const List = () => {
    return (
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
            {/* {data.posts.map(post => (
              <tr key={post.id} className="striped--near-white">
                <td className="pa3">{post.name}</td>
                <td className="pa3">{post.calories}</td>
                <td className="pa3">{post.fat}</td>
                <td className="pa3">{post.carbs}</td>
                <td className="pa3">{post.protein}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
    )
}

export default List