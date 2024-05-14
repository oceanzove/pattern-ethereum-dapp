import {connect} from "react-redux";
import App from "./App";
import {
    test
} from "./redux/patternReducer";

const mapStateToProps = (state) => {
    return {
        page: state.page
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTest: (value) => {
            dispatch(test(value));
        },
    };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
