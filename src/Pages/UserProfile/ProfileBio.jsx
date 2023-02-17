import React from 'react'

const ProfileBio = ({ currentProfile }) => {
    return (
        <div>
            <div>
            {
                currentProfile?.tags.length !==0  ? (
                    <>
                        <br />
                        <h5>Tags Watched</h5>
                        {currentProfile?.tags.map((tag) => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </>
                ) : (
                    <p>0 tags Watched</p>
                )
            }
            </div>
            <div>
                {
                    currentProfile?.about?(
                        <>
                            <h5>About</h5>
                            <p>{currentProfile?.about}</p>
                        </>
                    ):(
                        <p>No Bio Found</p>
                    )
                }
            </div>
        </div>
    )
}

export default ProfileBio
