import { connect } from 'react-redux'
import Chart from '../components/Chart'

const mapToStatetoProps = (state) => {
    return {
        cars: state.cars
    }

}




export default connect(mapStateToProps)(Chart)