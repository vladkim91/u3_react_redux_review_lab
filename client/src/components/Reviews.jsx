import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadReviews } from '../store/actions/DestinationActions';

const mapStateToProps = ({ reviewState }) => {
  return { reviewState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchReviews: () => dispatch(LoadReviews())
  };
};

const Reviews = ({ reviewState, fetchReviews, destinationId }) => {
  useEffect(() => {
    fetchReviews();
  }, []);

  const reviews = reviewState.reviews;
  const filteredReviews = reviews.filter((review) => {
    return review.destination_id == destinationId;
  });

  return (
    <div className='reviews'>
      {filteredReviews.map((review ,i) => (
        <div className="review" key={i}>
       
          <p className='username'>{review.username}</p>
          <p className='review--text'>{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
