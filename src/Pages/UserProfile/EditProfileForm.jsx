import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import './UserProfile.css'
import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from '../../actions/users';
const EditProfileForm = ({ currentUser, setSwitch }) => {

    const dispatch=useDispatch();
    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.about)
    const [tags, setTags] = useState('')
    const handleSubmit =(e)=>{
       e.preventDefault()
       toast.info('Changes on navbar are reflected on next login !',{position:"top-center"});
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
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} class="d-flex"/>
                </label><br /><br/>
                <label htmlFor="about">
                    <h4>About me</h4>
                    <textarea id="about" cols="35" rows="10" value={about} onChange={(e) => setAbout(e.target.value)} class="d-flex"></textarea>
                </label><br /><br />
                <label htmlFor="tags">
                    <h4>Watched tags</h4>
                    <p>Add tags separated by 1 space</p><br />
                    <input type="text" id='tags' onChange={(e) => setTags(e.target.value.split(' '))} class="d-flex"/>
                </label><br /><br />
                <input type="submit" value="Save Profile" className='user-submit-btn' />
                <button type='button' className='user-cancel-btn' onClick={() => setSwitch(false)}>Cancel</button>
            </form>
            
        </div>
    )
}

export default EditProfileForm
