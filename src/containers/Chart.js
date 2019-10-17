import { connect } from 'react-redux'
import Chart from '../components/Chart'
// import Chart from '../containers/Chart'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }

}




export default connect(mapStateToProps)(Chart)