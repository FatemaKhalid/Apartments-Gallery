import React,{useEffect} from 'react'
import { connect } from "react-redux";
import { fetchApartments } from "../actions/ApartmentsActions";

function ApartmentContainer({ apartmentsData, fetchApartments }) {
    useEffect(() => {
        fetchApartments()
    }, [])
    return apartmentsData.loading? 
    (<h3>Loading</h3>)
    : apartmentsData.error?(
        <h3>{apartmentsData.error}</h3>
    ):(
        <div>
            <h2>APARTMENTS LIST</h2>
            <div>
                {
                    apartmentsData &&
                    apartmentsData.apartments &&
                    apartmentsData.apartments.offers.map(apartment => 
                    {/* <p>{apartment.location.name}</p> */}
                    )
                }
            </div>
        </div>
    )
}

const mapStateToProps = state=>{
    console.log(state.apartments);
    return {
        apartmentsData: state.apartments
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        fetchApartments: ()=>dispatch(fetchApartments())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApartmentContainer)
