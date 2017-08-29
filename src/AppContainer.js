import { connect } from 'react-redux';
import App from './App';
import {fetchWorklist, operateItem} from './Redux/actions';

const mapStateToProps = (state, ownProps) => {
    // ownProps that is an object with every props passed to the bound component
    console.log('own props from container',ownProps);
    return {
        list: state.listReducer.worklist
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchList: () => {
            dispatch(fetchWorklist());
        },
        addItem: (item) => {
            dispatch(operateItem('item_name', item, 'createItem'));
        },
        deleteItem: (itemId) => {
            dispatch(operateItem('item_id', itemId, 'deleteItem'));
        },
        markItem: (itemId, isMark) => {
            console.log(isMark);
            dispatch(operateItem('item_id', itemId, 'updateItem', isMark));
        }
    }
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
