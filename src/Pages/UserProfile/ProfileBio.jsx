import React from 'react'
import Card from 'react-bootstrap/Card';

const ProfileBio = ({ currentProfile }) => {
    return (
        <div>
            <br />
            <Card style={{ width: '100%',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:"20px" }}>
                <div>
                    {
                        currentProfile?.tags.length !== 0 ? (
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
            </Card>
            <br />
            <Card style={{ width: '100%',boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",padding:"20px" }}>
                <div>
                    {
                        currentProfile?.about ? (
                            <>
                                <h5>About</h5>
                                <p>{currentProfile?.about}</p>
                            </>
                        ) : (
                            <p>No Bio Found</p>
                        )
                    }
                </div>
            </Card>



        </div>
    )
}

export default ProfileBio
