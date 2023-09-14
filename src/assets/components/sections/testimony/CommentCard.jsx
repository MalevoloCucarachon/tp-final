import React from 'react';
import './CommentCard.css'
const CommentCard = ({ comment = '', name = '', surname = '', profession = '' }) => {
    const img = {
        backgroundImage: `url('https://imgs.search.brave.com/Furfff5VLB3dcev7YxJu4jUSM47qzllInwOowucQ1Gs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE0/OTUyMTYwMy9waG90/by90aGlzLXB1dHMt/bWUtaW4tYS1hd2t3/YXJkLXBvc2l0aW9u/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1SX3NnbUx3aWUz/RmJncURqM3U1UTlJ/NEJsTTZIMXE2SGE5/LUlteDhuSndVPQ')`
    }
    return (
        <>
            <div className='comment-card'>
                <div className='img' style={img}>

                </div>
                <div className='comment-box'>
                    <p className='comment'>{comment}</p>
                    <p className='name'>{name} {surname}</p>
                    <p className='profession'>{profession}</p>
                </div>
            </div>
        </>
    )
}

export default CommentCard