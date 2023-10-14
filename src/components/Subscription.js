import React from 'react'
import styled from 'styled-components'

const Subscription = () => {
  return (
    <Container>
        <div className='big_container'>
        <div className='logo_container'>
        <img className='apple_logo' src='https://scontent.fmaa10-1.fna.fbcdn.net/v/t1.6435-9/119565256_4180838111931874_225714752779409314_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iIJWQU7CBFkAX_hTTi3&_nc_ht=scontent.fmaa10-1.fna&oh=00_AfBJyigwzdwPtgQvOdJ_dK5lHoKqGx-ukgvrrcQNgwehtQ&oe=6547ADA9' alt='logo' />
        </div>

        <div className='plan_container'>

            <div className='plans'>
            <h2>Voice Plan</h2>
            <h3>$4.99/month</h3>
            <hr/>
            <p>1 person</p>
            <p>Siri on Apple device</p>
            <p>Songs,playlists,stations</p>
            <p>All Apple devices</p>
            </div>

            <div className='plans'>
            <h2>Individual Plan</h2>
            <h3>$9.99/month</h3>
            <hr/>
            <p>1 person</p>
            <p>Siri on Apple device</p>
            <p>Songs,playlists,stations,videos</p>
            <p>All Apple devices + supported </p>
            </div>

            <div className='plans'>
            <h2>Family Plan</h2>
            <h3>$14.99/month</h3>
            <hr/>
            <p>6 people</p>
            <p>Siri on Apple device</p>
            <p>Songs,playlists,stations,videos</p>
            <p>All Apple devices + supported</p>
            </div>
            </div>
        </div>

    </Container>
  )
}

export default Subscription

const Container=styled.div`

position: fixed;
width:80%;
height: 87vh;
left:20%;
top:92px;
flex:1;
padding: 10px;
background-color: rgba(60, 60, 67, 0.18);
overflow:scroll;

.big_container{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    
}
.logo_container{
    display: flex;
    justify-content: center;
.apple_logo{
    height: 100px;
    width: 250px;
     
}
}
.plan_container{
    display:flex;
    align-items: center;
    justify-content:center;
    flex-wrap: wrap;
    overflow: visible;
    
    .plans{
        background-color:hsla(0,0%,100%,.92);
        margin: 10px;
        height: 300px;
        width: 250px;
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 40px;
        p{
            font-weight: 500;
        }
        hr{
            width: 70%;
            margin-left:10% ;
            height: 2px;
            background-color: red;
        }
    }
}



`;