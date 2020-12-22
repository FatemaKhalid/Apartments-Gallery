import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchApartmentsRequest } from "../actions/ApartmentsActions";
import style from "../styles/apartmentContainer.scss";

function ApartmentContainer({ apartmentsData, fetchApartmentsRequest }) {
    useEffect(() => {
        fetchApartmentsRequest()
    }, [])
    return apartmentsData.loading ?
        (<h3>Loading</h3>)
        : apartmentsData.error ? (
            <h3>{apartmentsData.error}</h3>
        ) : (
                <div className='apartments-container'>
                    {

                        apartmentsData &&
                        apartmentsData.apartments.offers &&
                        apartmentsData.apartments.offers.map(apartment =>

                            <div className="wrapper" key={apartment.id}>
                                <div className="apt-row apartment-img">
                                    <img src={apartment.photos[0].t} />
                                    {/* TODO: BUILD PHOTOS SLIDER */}
                                </div>
                                <div className="apt-row apartment-info">
                                    <div className="apartment-text">
                                        <h1>{apartment.details.name}</h1>
                                        <h2>by studio and friends</h2>
                                        {/* TODO DIV FOR RATING */}
                                        <p> <b>Apartment Type</b> {apartment.details.apartmentTypeTitle}</p>
                                        <p> <b>Number of BedRooms</b> {apartment.details.bedroomsCount}</p>
                                        <p> <b>Number of Guests</b> {apartment.details.guestsCount}</p>
                                        {apartment.details.ExpressBookable ?
                                            ('') : 
                                            (<p className='booking-extra'><b>Express Booking</b></p>)
                                        }
                                        {apartment.details.InstantBookable ?
                                            ('') :
                                            (<p className='booking-extra'><b>Available for Instant Booking</b></p>)
                                        }
                                    </div>
                                    <div className="apartment-price">
                                        <p><span>{apartment.price.daily}</span>{apartment.price.currency}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            )
}

const mapStateToProps = state => {
    // console.log(state.apartments);
    return {
        apartmentsData: state.apartments
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchApartmentsRequest: () => dispatch(fetchApartmentsRequest())
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ApartmentContainer)
