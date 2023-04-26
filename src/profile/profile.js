
import PropTypes from 'prop-types'
export function Profile({fullName, bio, profession , alertName , children}){
    const styleObject={  color: 'red'};
    return(
        <>
        <h1 style={styleObject} >{fullName}</h1>
        <h2>{bio}</h2>
        <h2>{profession}</h2>
        <button onClick={ (e) => alertName(fullName)} >click here!!</button>
        <div style={styleObject}>
            {children}
        </div>
        </>
    );}

Profile.propTypes ={

    FullName : PropTypes.string.isRequired ,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired  ,
    alertName: PropTypes.func ,
}

