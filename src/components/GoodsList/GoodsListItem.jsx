import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './GoodsList.module.css'


export default class GoodsListItem extends Component {
state = {
isPushed: false,
}

onClickChange = () => {
this.setState({isPushed: true})
}

    render(){
    return (
        <li className={styles.item}>
            <p onClick={this.onClickChange} className={`${styles.textName} ${this.state.isPushed ? styles.boldText : ''}`}>{this.props.name}</p>
            <p className={styles.textDesc}>{this.props.description}</p>
        </li>

    )}
}

GoodsListItem.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
}