import { connect } from "react-redux"
import ProfileComponent from '../components/ProfileComponent'

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(ProfileComponent)

