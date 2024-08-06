import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteUser} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="container">
      <p className="description">{title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
