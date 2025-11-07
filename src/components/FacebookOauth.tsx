import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';

const FacebookOauth = () => {

    const responseFacebook = (response:any) => {
        console.log(response);
      }

    return (
        <div className='mt-1 mx-2'>
            <FacebookLogin
                appId="487149983409515"
                fields="name,email,picture"
                callback={responseFacebook} 
                icon="fa-facebook"
                textButton=''
                cssClass="buton-facebook buton-facebook lead border-0 p-0 btn-facebook "
                />
        </div>
    )
}

export default FacebookOauth