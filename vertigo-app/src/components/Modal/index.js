import React from 'react';


const Modal = (props) => {
    const {title, content, thumbnail, author, avatar, onClick} = props;

    return (
        <div className={'modal-body'}>
            <div className="modal-container">
                <div className="modal-header">
                    <span className={'modal-header-close'} onClick={onClick}>X</span>
                    <img src={thumbnail}/>
                </div>
                <div className="modal-info">
                    <div className="modal-title">
                        {title}
                    </div>
                    <div className="modal-content">
                        {content}
                    </div>
                </div>
                <div className="modal-footer">
                    {avatar && (
                        <img src={avatar}/>

                    )}
                    <div className="modal-author">
                        {author}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Modal;