import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faMagnifyingGlass,
    faBell,
    faEnvelope,
    faLock,
    faBriefcase,
    faCircleUser,
    faSearch,
    faChevronUp,
    faChevronDown,
    faSun,
    faMoon,
    faChevronLeft,
    faChevronRight,
    faCameraRotate,
    faUtensils,
    faWineGlassAlt,
    faBowlFood,
    faExclamation,
    faCheck,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

import { faHeart } from '@fortawesome/free-regular-svg-icons'

import { type SizeProp } from '@fortawesome/fontawesome-svg-core'
interface IconListI {
    icon: string
    size: SizeProp // xs, lg, 6x
    color: string
}
const IconList = ({ icon, color, size }: IconListI): JSX.Element => {
    let iconTag

    switch (icon) {
        case 'arrow-left':
            iconTag = (
                <FontAwesomeIcon icon={faArrowLeft} color={color} size={size} />
            )
            break
        case 'check':
            iconTag = (
                <FontAwesomeIcon icon={faCheck} color={color} size={size} />
            )
            break
        case 'bowl':
            iconTag = (
                <FontAwesomeIcon icon={faBowlFood} color={color} size={size} />
            )
            break
        case 'wine':
            iconTag = (
                <FontAwesomeIcon
                    icon={faWineGlassAlt}
                    color={color}
                    size={size}
                />
            )
            break
        case 'utensils':
            iconTag = (
                <FontAwesomeIcon icon={faUtensils} color={color} size={size} />
            )
            break
        case 'camera':
            iconTag = (
                <FontAwesomeIcon
                    icon={faCameraRotate}
                    color={color}
                    size={size}
                />
            )
            break
        case 'moon':
            iconTag = (
                <FontAwesomeIcon icon={faMoon} color={color} size={size} />
            )
            break
        case 'sun':
            iconTag = <FontAwesomeIcon icon={faSun} color={color} size={size} />
            break
        case 'direction-right':
            iconTag = (
                <FontAwesomeIcon
                    icon={faChevronRight}
                    color={color}
                    size={size}
                />
            )
            break
        case 'direction-left':
            iconTag = (
                <FontAwesomeIcon
                    icon={faChevronLeft}
                    color={color}
                    size={size}
                />
            )
            break
        case 'direction-down':
            iconTag = (
                <FontAwesomeIcon
                    icon={faChevronDown}
                    color={color}
                    size={size}
                />
            )
            break
        case 'direction-up':
            iconTag = (
                <FontAwesomeIcon icon={faChevronUp} color={color} size={size} />
            )
            break
        case 'search-input':
            iconTag = (
                <FontAwesomeIcon icon={faSearch} color={color} size={size} />
            )
            break
        case 'x':
            iconTag = (
                <FontAwesomeIcon
                    icon={faExclamation}
                    color={color}
                    size={size}
                />
            )
            break
        case 'favorite':
            iconTag = (
                <FontAwesomeIcon icon={faHeart} color={color} size={size} />
            )
            break
        case 'info':
            iconTag = (
                <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6 0.5C7.5913 0.5 9.11742 1.13214 10.2426 2.25736C11.3679 3.38258 12 4.9087 12 6.5C12 8.0913 11.3679 9.61742 10.2426 10.7426C9.11742 11.8679 7.5913 12.5 6 12.5C4.4087 12.5 2.88258 11.8679 1.75736 10.7426C0.632141 9.61742 0 8.0913 0 6.5C0 4.9087 0.632141 3.38258 1.75736 2.25736C2.88258 1.13214 4.4087 0.5 6 0.5ZM6 11.6429C7.36397 11.6429 8.67208 11.101 9.63655 10.1365C10.601 9.17208 11.1429 7.86397 11.1429 6.5C11.1429 5.13603 10.601 3.82792 9.63655 2.86345C8.67208 1.89898 7.36397 1.35714 6 1.35714C4.63603 1.35714 3.32792 1.89898 2.36345 2.86345C1.39898 3.82792 0.857143 5.13603 0.857143 6.5C0.857143 7.86397 1.39898 9.17208 2.36345 10.1365C3.32792 11.101 4.63603 11.6429 6 11.6429ZM6.64286 9.28571C6.64286 9.45621 6.57513 9.61972 6.45457 9.74028C6.33401 9.86084 6.1705 9.92857 6 9.92857C5.8295 9.92857 5.66599 9.86084 5.54543 9.74028C5.42487 9.61972 5.35714 9.45621 5.35714 9.28571C5.35714 9.11522 5.42487 8.9517 5.54543 8.83115C5.66599 8.71059 5.8295 8.64286 6 8.64286C6.1705 8.64286 6.33401 8.71059 6.45457 8.83115C6.57513 8.9517 6.64286 9.11522 6.64286 9.28571ZM6 3.07143C6.11366 3.07143 6.22267 3.11658 6.30305 3.19695C6.38342 3.27733 6.42857 3.38634 6.42857 3.5V7.35714C6.42857 7.47081 6.38342 7.57982 6.30305 7.66019C6.22267 7.74056 6.11366 7.78571 6 7.78571C5.88634 7.78571 5.77733 7.74056 5.69695 7.66019C5.61658 7.57982 5.57143 7.47081 5.57143 7.35714V3.5C5.57143 3.38634 5.61658 3.27733 5.69695 3.19695C5.77733 3.11658 5.88634 3.07143 6 3.07143Z"
                        fill="#E72727"
                    />
                </svg>
            )
            break
        case 'password':
            iconTag = (
                <FontAwesomeIcon icon={faLock} color={color} size={size} />
            )
            break
        case 'email':
            iconTag = (
                <FontAwesomeIcon icon={faEnvelope} color={color} size={size} />
            )
            break
        case 'search':
            iconTag = (
                <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    color={color}
                    size={size}
                />
            )
            break
        case 'userCircle':
            iconTag = (
                <FontAwesomeIcon
                    icon={faCircleUser}
                    color={color}
                    size={size}
                />
            )
            break
        case 'briefcase':
            iconTag = (
                <FontAwesomeIcon icon={faBriefcase} color={color} size={size} />
            )
            break
        case 'notify':
            iconTag = (
                <FontAwesomeIcon icon={faBell} color={color} size={size} />
            )
            break
        default:
            iconTag = <div></div>
            break
    }
    return iconTag
}

export default IconList
