import { connect } from 'react-redux';
import Framework from './Framework';
import {userLogin} from './Redux/actions';

const mapStateToProps = state => {
    // console.log(state.userReducer.isLoggedIn);
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