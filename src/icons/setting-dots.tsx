interface Props {
    filled?: string
}
const MoreSettingIcon:React.FC<Props> = ({ filled="#B8C0CC"}) => {
    return (
        <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="9.5" r="2.5" fill={filled}/>
            <circle cx="15.5" cy="9.5" r="2.5" fill={filled}/>
            <circle cx="23.5" cy="9.5" r="2.5" fill={filled}/>
        </svg>
    )
}

export default MoreSettingIcon