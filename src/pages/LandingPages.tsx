import CardNotification from '../components/CardNotification'
import CardRegister from '../components/CardRegister'
import NotificationSession from '../components/CardSessionNotification'
import ProfileImg from '../components/ProfileImg'
import CardSession from '../components/CardSession'
import CardValidSession from '../components/CardSessionValid'
import CardSessionPassword from '../components/CardSessionPassword'
import CardSessionRecovery from '../components/CardSessionRecovery'
import CardSessionNewPassword from '../components/CardSessionNewPassword'
import CardRegisterValid from '../components/CardRegisterValid'
import CardRegisterVerify from '../components/CardRegisterVerify'
import CardRegisterConfirm from '../components/CardRegisterConfirm'

const LandingPages = (): JSX.Element => {
    const imgTitle = (
        <svg
            width="86"
            height="87"
            viewBox="0 0 86 87"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_729_235)">
                <path
                    d="M42.9971 0.5C19.2527 0.5 0 19.7527 0 43.4971C0 67.2414 19.2527 86.4941 42.9971 86.4941C66.7414 86.4941 85.9941 67.2414 85.9941 43.4971C85.9941 19.7527 66.7473 0.5 42.9971 0.5ZM67.5224 36.3984L40.0496 65.3332C38.5347 66.9303 36.0158 67.0066 34.4012 65.5035L20.7675 52.7917C18.5364 50.7073 18.4131 47.2079 20.4974 44.9767C22.5818 42.7455 26.0812 42.6222 28.3124 44.7066L34.636 50.6075C36.3623 52.2221 36.8379 53.2496 36.8379 53.2496C36.8379 53.2496 37.3545 52.0342 39.0044 50.3843C42.0987 47.2842 59.5019 28.7948 59.5019 28.7948C61.6039 26.5812 65.1033 26.4873 67.3169 28.5893C69.5304 30.6913 69.6244 34.1907 67.5224 36.4043V36.3984Z"
                    fill="#F9A823"
                />
            </g>
            <defs>
                <clipPath id="clip0_729_235">
                    <rect
                        width="86"
                        height="86"
                        fill="white"
                        transform="translate(0 0.5)"
                    />
                </clipPath>
            </defs>
        </svg>
    )

    const imgTitleLog = (
        <svg
            width="49"
            height="65"
            viewBox="0 0 49 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M22.7653 45.1787L21.5948 44.173C20.0947 42.8841 19.9256 40.6234 21.2145 39.1232L21.7174 38.5401C21.7934 38.4513 29.2603 29.7548 35.2947 21.7639C40.9529 14.2716 40.6783 11.8461 39.8078 10.5657C38.4555 8.57956 34.065 8.78662 26.7587 11.1784C17.9269 14.073 6.7202 18.8143 6.61033 18.8608L5.90041 19.1608C4.07911 19.9341 1.97892 19.0805 1.20561 17.2592L0.605551 15.8394C-0.16776 14.0181 0.68584 11.9179 2.50713 11.1446L3.21706 10.8446C3.69034 10.6459 14.8759 5.91311 24.05 2.90439C32.0704 0.275973 41.9333 -1.78619 47.0042 5.66379C52.3878 13.5744 45.5336 22.6471 42.2418 27.008C36.0384 35.2229 28.6307 43.8476 28.318 44.211L27.8151 44.7942C26.5263 46.2943 24.2655 46.4633 22.7653 45.1745V45.1787Z"
                fill="#F9A823"
            />
            <path
                d="M12.801 64.2706C8.52881 64.2706 4.61999 62.9648 1.99581 59.1067C-3.38779 51.1961 3.46637 42.1234 6.75822 37.7625C12.9616 29.5476 20.3693 20.9229 20.682 20.5595L21.1849 19.9763C22.4738 18.4762 24.7345 18.3072 26.2347 19.596L27.4052 20.6017C28.9053 21.8906 29.0744 24.1514 27.7855 25.6515L27.2826 26.2346C27.2066 26.3234 19.7397 35.02 13.7053 43.0108C8.04707 50.5031 8.32174 52.9287 9.19225 54.2091C10.5445 56.1952 14.935 55.9923 22.2413 53.5963C31.0731 50.7017 42.2798 45.9604 42.3897 45.9139L43.0996 45.6139C44.9209 44.8406 47.0211 45.6942 47.7944 47.5155L48.3945 48.9353C49.1678 50.7566 48.3142 52.8568 46.4929 53.6301L45.7829 53.9302C45.3097 54.1288 34.1241 58.8616 24.95 61.8703C21.0793 63.1381 16.7817 64.2748 12.801 64.2748V64.2706Z"
                fill="#F9A823"
            />
        </svg>
    )

    const imageValid = (
        <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1144_1372)">
                <rect
                    x="8"
                    y="5"
                    width="84.1456"
                    height="84.1456"
                    rx="42.0728"
                    fill="white"
                />
            </g>
            <path
                d="M77.3121 46.2793L59.342 28.3092C58.3777 27.3448 56.8256 27.3251 55.8762 28.2744C54.931 29.2196 54.9424 30.7717 55.911 31.7403L67.1731 43.0024C67.6234 43.4527 68.2316 43.7111 68.8625 43.7174L71.6385 43.7453C71.8236 43.7471 71.9848 43.8833 72.0076 44.0644C72.0307 44.2707 71.8685 44.4499 71.6623 44.4436L26.3796 43.9897C25.0253 43.9761 23.9385 45.0629 23.9562 46.4131C23.9698 47.7675 25.0786 48.8762 26.4287 48.8856L71.6988 49.3436C71.8839 49.3455 72.0451 49.4816 72.0679 49.6627C72.091 49.869 71.9288 50.0482 71.7227 50.042L68.9298 50.014C68.2989 50.0077 67.6958 50.2539 67.2544 50.6953L56.2158 61.7339C55.2706 62.6791 55.282 64.2311 56.2506 65.1997C57.2149 66.164 58.767 66.1838 59.7164 65.2344L77.3298 47.621C77.6962 47.2546 77.6902 46.6574 77.3164 46.2835L77.3121 46.2793Z"
                fill="#333333"
            />
            <defs>
                <filter
                    id="filter0_d_1144_1372"
                    x="0.135922"
                    y="0.281554"
                    width="99.8738"
                    height="99.8737"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3.14563" />
                    <feGaussianBlur stdDeviation="3.93204" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1144_1372"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1144_1372"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )

    const imageProblem = (
        <svg
            width="101"
            height="101"
            viewBox="0 0 101 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g filter="url(#filter0_d_1144_1386)">
                <rect
                    x="8"
                    y="5"
                    width="84.1456"
                    height="84.1456"
                    rx="42.0728"
                    fill="#F9A823"
                />
            </g>
            <path
                d="M77.3121 46.2793L59.342 28.3092C58.3777 27.3448 56.8256 27.3251 55.8762 28.2744C54.931 29.2196 54.9424 30.7717 55.911 31.7403L67.1731 43.0024C67.6234 43.4527 68.2316 43.7111 68.8625 43.7174L71.6385 43.7453C71.8236 43.7471 71.9848 43.8833 72.0076 44.0644C72.0307 44.2707 71.8685 44.4499 71.6623 44.4436L26.3796 43.9897C25.0253 43.9761 23.9385 45.0629 23.9562 46.4131C23.9698 47.7675 25.0786 48.8762 26.4287 48.8856L71.6988 49.3436C71.8839 49.3455 72.0451 49.4816 72.0679 49.6627C72.091 49.869 71.9288 50.0482 71.7227 50.042L68.9298 50.014C68.2989 50.0077 67.6958 50.2539 67.2544 50.6953L56.2158 61.7339C55.2706 62.6791 55.282 64.2311 56.2506 65.1997C57.2149 66.164 58.767 66.1838 59.7164 65.2344L77.3298 47.621C77.6962 47.2546 77.6902 46.6574 77.3164 46.2835L77.3121 46.2793Z"
                fill="white"
            />
            <defs>
                <filter
                    id="filter0_d_1144_1386"
                    x="0.135922"
                    y="0.281554"
                    width="99.8738"
                    height="99.8737"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    />
                    <feOffset dy="3.14563" />
                    <feGaussianBlur stdDeviation="3.93204" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.13 0"
                    />
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1144_1386"
                    />
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1144_1386"
                        result="shape"
                    />
                </filter>
            </defs>
        </svg>
    )

    return (
        <>
            <div style={{ background: '#F8F4F3' }}>
                <ProfileImg />

                <h1
                    className="container d-flex justify-content-center  text-primary shadow"
                    style={{ marginTop: '10rem' }}
                >
                    Card Session
                </h1>
                <div className="d-flex justify-content-center mt-5">
                    <CardSession />
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <CardValidSession />
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <CardSessionPassword />
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <CardSessionRecovery />
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <CardSessionNewPassword />
                </div>

                <div className="mt-5">
                    <NotificationSession
                        style={{ backgroundColor: '#F9A823' }}
                        title={'¡Genial!'}
                        text={
                            'La contraseña se cambió exitosamente. Inicia sesión para acceder.'
                        }
                        img={imageValid}
                    />
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <NotificationSession
                        title={'¡Oh no!'}
                        text={'Se ha producido un problema. Intenta más tarde.'}
                        img={imageProblem}
                    />
                </div>

                <div className="d-flex justify-content-center mt-5">
                    <NotificationSession
                        title={'¡Oh no!'}
                        text={'Se ha producido un error. Intenta más tarde.'}
                        img={imageProblem}
                    />
                </div>

                <h1 className="container d-flex justify-content-center mt-5 text-primary shadow">
                    Card Register
                </h1>
                <div style={{ backgroundColor: '' }}>
                    <CardRegister />

                    <br />
                    <br />

                    <CardRegisterValid />

                    <br />
                    <br />

                    <CardRegisterVerify />

                    <br />
                    <br />

                    <CardRegisterConfirm />

                    <br />
                    <br />

                    <div className="mb-5">
                        <CardNotification
                            iconCard={imgTitle}
                            context="El mensaje ha sido reenviado"
                            btnText={'OK'}
                            className={'bg-danger'}
                        />
                    </div>

                    <br />

                    <div className="mb-5">
                        <CardNotification
                            iconCardLog={imgTitleLog}
                            title={'¡Oh no!'}
                            context="Se ha producido un error"
                            btnText={'Intentalo más tarde'}
                            className={'btn btn-light shadow-sm'}
                            style={{
                                fontWeight: '700',
                                width: '150px',
                                fontSize: '0.7em',
                            }}
                        />
                    </div>

                    <br />

                    <div className="mb-5 pb-5">
                        <CardNotification
                            iconCardLog={imgTitleLog}
                            title={'¡Oh no!'}
                            context="Se ha producido un problema"
                            btnText={'Intentalo más tarde'}
                            className={'btn btn-light shadow-sm'}
                            style={{
                                fontWeight: '700',
                                width: '150px',
                                fontSize: '0.7em',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPages
