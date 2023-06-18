import React from 'react'
import Button from '../Buttons/Buttons'
import { useTelegram } from '../../hooks/useTelegram'

const Header = (props) => {

    const {onClose, tg} = useTelegram();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    )
}

export default Header