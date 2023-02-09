import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Link } from "react-router-dom";
import { getReview, receiveReview } from "../../store/review";
import { deleteReview } from "../../store/review";
import "./ReviewDetail.css";


function ReviewShowPage() {
  const { reviewId, productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const review = useSelector(receiveReview(reviewId)) || {};
  const userId = useSelector((state) => state.session.user?.id);

  useEffect(() => {
    dispatch(getReview(productId, userId));
  }, [dispatch, productId, userId]);



  return (
    <div >

    </div>
  );
}

export default ReviewShowPage;