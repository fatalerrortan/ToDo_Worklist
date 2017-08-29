import { connect } from 'react-redux';
import Framework from './Framework';
import {userLogin} from './Redux/actions';

const mapStateToProps = (state, ownProps) => {
    // ownProps that is an object with every props passed to the bound component
    return {
        isLoggedIn: state.userReducer.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        doLogin: () => {
            dispatch(userLogin());
        }
    }
}

const FrameworkContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Framework);

export default FrameworkContainer;