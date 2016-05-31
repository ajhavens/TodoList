import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todo-list-header';
import TodosListItem from './todo-list-item';

export default class TodosList extends React.Component {
	render() {
		renderItems() {
			return _.map(this.props.todos, (todo, index) => <TodosListItem key={index
				} {...todo} />);
	}
	render() {
		return (
			<table>
				<TodosListHeader />
				<tbody>
					{this.renderItems()}
				</tbody>
			</table>

			);
	}
}