import PropTypes from 'prop-types';
import FriendListItem from '../FriendsListItem/FriendsListItem';
import s from './FriendsList.module.css';

export default function FriendsList({ friends }) {
    return (
        <ul className={s.list}>
            {friends.map(friend => (
                    <li className={s.item} key={friend.id}>
                        <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline} />
                    </li>
                ))}
        </ul>
    )
}

FriendsList.propTypes = {
    friends: PropTypes.array
}