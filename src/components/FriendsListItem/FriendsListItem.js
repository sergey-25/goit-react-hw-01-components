import PropTypes from 'prop-types';
import defaultAvatar from '../../components/defaultAvatar.jpg'
import s from './FriendsListItem.module.css';

export default function FriendsListItem({ avatar = defaultAvatar, name, isOnline }) {
    return (
        <>
            <span className={s.status} {...isOnline && {style : {backgroundColor: 'green'}}}></span>
            <img className={s.avatar} src={avatar} alt={name} width="48"/>
            <p>{name}</p>
        </>
    )
}



FriendsListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}