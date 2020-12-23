import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { fetchApartmentsRequest } from "../actions/ApartmentsActions";
import style from "../styles/apartmentContainer.scss";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import SimpleImageSlider from "react-simple-image-slider";


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
                                <SimpleImageSlider
                                className='slider-img'
                                        width={350}
                                        height={200}
                                        showNavs={true}
                                        images={getProperPhotos(apartment.photos)}
                                    />
                                </div>
                                <div className="apt-row apartment-info">
                                    <div className="apartment-text">
                                        <h1>{apartment.details.name}</h1>
                                        <div className='apt-row-data'>
                                            <div className='rating-circ'
                                                className={`${apartment.rating.value>50 ? "rating-circ-green" : "rating-circ-red"}`} >
                                                <CircularProgressbar 
                                                value={apartment.rating.value} 
                                                text={`${apartment.rating.value/10}`}/>
                                                <p>{apartment.rating.count}<b> Reviews</b></p>
                                            </div>
                                            <div className='apt-col'>
                                                <p>  <b>Location</b> {apartment.location.name}</p>
                                                <p>  <b>Apartment Type</b> {apartment.details.apartmentTypeTitle}</p>
                                                <p>  {apartment.details.bedroomsCount}<b>  BedRooms</b></p>
                                                <p>  {apartment.details.guestsCount}<b>  Guests</b></p>
                                                {apartment.details.ExpressBookable ?
                                                    ('') : 
                                                    (<div className="card" data-label="Express Booking"/>)
                                                }
                                                {apartment.details.InstantBookable ?
                                                    ('') :
                                                    (<div className="card card-inst" data-label="Instant Booking"/>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="apartment-price">
                                        <p>DAILY RATE:  <span>{apartment.price.daily}</span>{apartment.price.currency}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            )
}
function scaleRating(rating) {
    return rating/10;
}

function getProperPhotos(photos) {
    let ph=[];
    photos.forEach(el => ph.push({url:el.t}));
    return ph;
}
const mapStateToProps = state => {
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
