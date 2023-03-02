import React from 'react'
// import avatar from '../assets/avatar'
import chat from '../assets/chat.png'
import avatar from '../assets/avatar.png'
import circle from '../assets/circle.png'
import line_horizontal from '../assets/line_horizontal.png'
import storage from '../utils/storage'


export default function TweetCard({tweetsQuantity, followersQuantity, isFollowing}) {
    console.log('isFollowing: ', isFollowing);

    const onFollow = () => {
        console.log('asdf');
        storage.save('isFollowing', !isFollowing)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <div style={{
                marginTop: '250px',
                color: '#EBD8FF',
                
                borderRadius: "20px",
                background: 'linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)',
                boxShadow: '-2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)',
                width: '380px',
                height: '460px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '28px 0 36px'
            }}
            >
                <div style={{
                    backgroundImage: `url(${chat})`,
                    width: '308px',
                    height: '168px',
                    // marginTop: '28px',
                }}
                ></div>

                <div style={{
                    marginTop: '-16px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    top: '195px',
                    width: '100%',
                }}>
                    <div style={{
                        background: `url(${line_horizontal})`,
                        height: '8px',
                        width: '150px',
                        position: 'relative'
                    }}
                    ></div>
                    <div style={{
                        background: `url(${circle})`,
                        width: '86px',
                        height: '80px',
                        transform: 'translateX(-2px)',
                        marginLeft: '-3px',
                        marginRight: '-3px',
                        zIndex: 1,
                        position: 'relative',
                    }}
                    >
                        <img src={avatar} alt='avatar of the owner'
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '52%',
                                transform: 'translate(-50%, -50%)',
                                borderRadius: '50%',
                                width: '64px',
                                height: '64px',
                            }}
                        ></img>
                    </div>
                    <div style={{
                        background: `url(${line_horizontal})`,
                        height: '8px',
                        width: '150px',
                        position: 'relative',
                    }} ></div>
                </div>

                <p
                    style={{
                        textTransform: 'uppercase',
                        marginTop: '26px'
                    }}
                >{`${tweetsQuantity} tweets`}</p>
                <p
                    style={{
                        textTransform: 'uppercase',
                        marginTop: '16px',
                    }}
                >{`${followersQuantity} followers`}</p>

                <button
                    style={{
                        textTransform: 'uppercase',
                        marginTop: '26px',
                        width: '196px',
                        padding: '14px',
                        boxShadow: '0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)',
                        borderRadius: '10px',
                        border: 0,
                        background: !isFollowing ? '#EBD8FF' : '#5CD3A8',
                    }}
                    onClick={onFollow}
                    > follow </button>
            </div>
        </div >
    )
}
