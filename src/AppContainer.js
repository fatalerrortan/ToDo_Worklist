import { connect } from 'react-redux';
import App from './App';
import {fetchWorklist} from './Redux/actions';

const mapStateToProps = state => {
    return {
        list: state.listReducer.worklist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => {
            dispatch(fetchWorklist());
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
