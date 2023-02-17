import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { updateProfile } from '../../actions/users';
const EditProfileForm = ({ currentUser, setSwitch }) => {

    const dispatch=useDispatch();
    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState('')
    const handleSubmit =(e)=>{
       e.preventDefault()
       if(tags.length===0){
        dispatch(updateProfile(currentUser?.result?._id,{name,about,tags:currentUser?.result?.tags}))
       }
       else{
        dispatch(updateProfile(currentUser?.result?._id,{name,about,tags}))
       }
       setSwitch(false)
    }
    return (
        <div>
            <h3 className='edit-profile-title'>
                Edit Your Profile
            </h3>
            <h4 className="edit-profile-title-2">
                Public Information
            </h4>
            <form className="edit-profile-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    <h4>Display name</h4>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="d-flex form-control me-2"/>
                </label><br /><br/>
                <label htmlFor="about">
                    <h4>About me</h4>
                    <textarea id="about" cols="100" rows="10" value={about} onChange={(e) => setAbout(e.target.value)} class="d-flex form-control me-2"></textarea>
                </label><br /><br />
                <label htmlFor="tags">
                    <h4>Watched tags</h4>
                    <p>Add tags separated by 1 space</p><br />
                    <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))} class="d-flex form-control me-2"/>
                </label><br /><br />
                <input type="submit" value="Save Profile" className='user-submit-btn' style={{color:"white",fontWeight:"400",padding:"5px 5px"}} />
                <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
            </form>
        </div>
    )
}

export default EditProfileForm
