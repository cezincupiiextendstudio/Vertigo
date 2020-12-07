import React, {useState} from 'react';
import './style.scss';
import Modal from '../Modal/index'

const Card = (props) => {
    const [open, setOpen] = useState(false);
    const {date, title, content, thumbnail, author} = props;
    const {large, small} = thumbnail;

    const modalInfo = {
        title: title,
        content: content,
        thumbnail: thumbnail.large,
        author: author.name + ' - ' + author.role,
        avatar: author.avatar,
    }

    let cleanDate = new Date(date * 1000).toDateString();
    cleanDate = cleanDate.split(' ');
    cleanDate = cleanDate.slice(1, 4);
    cleanDate = cleanDate.join(' ');

    return (
        <>
            <div className="card-container">
                <div className="card-header">
                    <img
                        src={small}/>
                    <div className="card-backdrop">
                        <span onClick={() => {
                            setOpen(!open)
                        }}>Learn More</span>
                    </div>


                </div>
                <div className="card-info">
                    <div className="card-title-container">
                        <div className="card-dots">
                            <div className="dot cyan"/>
                            <div className="dot orange"/>
                        </div>
                        <div className="card-title">{title}</div>
                    </div>
                    <div className="card-content">
                        {content}


                    </div>
                    <div className="card-footer">
                        <div className="card-footer-author">
                            {author.name}
                        </div>
                        <div className="card-footer-date">
                            {cleanDate}
                        </div>
                    </div>
                </div>
            </div>
            {open && (<Modal {...modalInfo} onClick={() => setOpen(false)}/>)}
        </>
    )
}

export default Card;